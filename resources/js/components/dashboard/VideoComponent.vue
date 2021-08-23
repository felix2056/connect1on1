<template>
<div v-if="videoCalling" class="col-6 col-s-9">
    <div>
        <video  class="img-responsive" width="400" autoplay id='remoteVideo'>
            <source src="/storage/testvideo.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        
        <video  class="img-responsive" autoplay id='localVideo'>
            Your browser does not support the video tag.
        </video>
    </div>
  </div>
</template>

<script>
import Modals from './modals/Modals';
import { RotateSquare5 } from "vue-loading-spinner";
import { servers } from './utils/ICEServers';
import { log } from "./utils/logging";

export default {
    props: ['authuser', 'otheruser', 'conversation'],

    components: {
        Modals,
        RotateSquare5
    },
      
    data() {
        return {
            loading: false,
            loadingMessage: "",

            messages: [],
            newMessage: "",
            
            typing: false,
            typingUser: null,

            videoCalling: true,
            // videos
            myVideo: {},
            remoteVideo: {},

            room: "",

            // Media config
            constraints: {
                audio: {
                    echoCancellation: true,
                    noiseSuppression: true, 
                    autoGainControl: false
                },
                video: { 
                    width: 450, 
                    height: 348 
                }
            },

            // local & remote video stream
            localStream: undefined,
            remoteStream: undefined,
            // STUN ice servers
            configuration: servers,

            // Peer connection
            pc: undefined,
            // Offer config
            offerOptions: {
                offerToReceiveAudio: 1,
                offerToReceiveVideo: 1
            },

            errors: {
                message: "",
            }
        };
    },

    computed: {
        emptyMessage() {
            return this.newMessage == ""
        }
    },

    async created() {
        this.room = this.authuser.id + '-' + this.otheruser.id;
        await this.getUserMedia();
        await this.getAudioVideo();
        
        // Create peer connection
        this.createPeerConnection();  
        
        // Add local stream
        this.addLocalStream();
        
        // Event listeners
        this.onIceCandidates();
        this.onAddStream();
        
        !this.videoAnswer.video ? 
        this.callFriend() : // Caller
        this.handleAnser() // Callee
    },

    async mounted() {
        //this.getMessages(this.otheruser.id);

        this.myVideo = document.getElementById("localVideo");
        this.remoteVideo = document.getElementById("remoteVideo");
    },
    
    methods: {
        check(id) {
            return id === this.otheruser.id;
        },

        async getMessages(user_id) {
            let _this = this;

            this.loading = true;
            this.loadingMessage = "fetching messages...";

            let url = `/messages/${user_id}`;

            var chat_body = this.$el.querySelector("#chatbody");

            axios.get(url)
            .then(response => {
                if(response.data.messages != null) {
                    this.messages = response.data.messages;
                }

                this.loading = false;
                this.loadingMessage = "";

                setTimeout(function () {
                    chat_body.scrollTop = chat_body.scrollHeight;
                }, 200);
            });

            Echo.private('chat')
            .listen('MessageSent', (e) => {
                console.log(e);

                this.messages.push({
                    id: e.message.id,
                    user_id: e.message.user_id,
                    user: e.message.user,
                    body: e.message.body,
                    created_at: e.message.created_at
                });

                setTimeout(function () {
                    chat_body.scrollTop = chat_body.scrollHeight;
                }, 200);
            })
            .listenForWhisper('typing', (e) => {
                this.typingUser = e.typingUser;
                this.typing = e.typing;

                // remove is typing indicator after 0.9s
                setTimeout(function() {
                    _this.typing = false
                }, 900);
            })
            .listen('VideoChatStart', (data) => {
                if(data.to != this.authuser.id){
                    return;
                }
                
                if(data.type === 'signal'){
                    onSignalMessage(data);
                }
                else{
                    console.log('received unknown message type ' + data.type + ' from ' + data.from);
                }
            });
        },

        isTyping() {
            let channel = Echo.private('chat');
            let self = this;

            setTimeout(function() {
                channel.whisper('typing', {
                    typingUser: self.user.name,
                    typing: true
                });
            }, 300);
        },

        notTyping() {
            this.typing = false;
        },

        sendMessage() {
            if (this.otheruser == null) {
                return
            }

            if (this.newMessage == "") {
                return;
            }

            let user_id = this.otheruser.id;
            let message = this.newMessage;
            let url = `/send-message/${user_id}`;

            axios.post(url, {  user_id: user_id, message: message })
            .then(response => {
                this.messages.push(response.data.message);
                this.newMessage = "";

                var chat_body = this.$el.querySelector("#chatbody");

                setTimeout(function () {
                    var msg_body = this.$el.querySelector("#msg_body");
                    msg_body.scrollTop = msg_body.scrollHeight;
                }, 200);
            })
            .catch(error => {
                error.response.data.error.message ? (this.errors.message = error.response.data.error.message) : null
            });
        },

        callFriend() {
            log(`${this.authuser.name} wants to start a call`);   
        
            this.createOffer();
        },
    
        async handleAnser() {
            log(`${this.authuser.name} gets an offer from ${this.videoAnswer.from}`);
            await this.setRemoteDescription(this.videoAnswer.remoteDesc);
            
            this.createAnswer();
        },

        async getUserMedia() {
            log(`Requesting ${this.authuser.name} video stream`);
            if ("mediaDevices" in navigator) {
                try {
                    const stream = await navigator.mediaDevices.getUserMedia(this.constraints);
                    this.myVideo.srcObject = stream;
                    this.localStream = stream;
                    log("Received local video stream");
                } catch (error) {
                    log(`getUserMedia error: ${error}`);
                }
            }
        },

        getAudioVideo() {
            const video = this.localStream.getVideoTracks();
            const audio = this.localStream.getAudioTracks();
            if (video.length > 0) log(`Using video device: ${video[0].label}`);
            if (audio.length > 0) log(`Using audio device: ${audio[0].label}`);
        },

        createPeerConnection() {
            this.pc = new RTCPeerConnection(this.configuration);
            log(`Created ${this.authuser.name} peer connection object`);
        },

        async createOffer() {
            log(`${this.authuser.name} create an offer: start`);
            try {
                const offer = await this.pc.createOffer(this.offerOptions);

                log(`Offer from ${this.authuser.name}\n ${offer.sdp}`);
                log(`${this.authuser.name} setLocalDescription: start`);
                
                await this.pc.setLocalDescription(offer);
                
                log(`${this.authuser.name} setLocalDescription: finished`);
                
                this.sendSignalingMessage(this.pc.localDescription, true);
            } catch (error) {
                log(`Error creating the offer from ${this.authuser.name}. Error: ${error}`);
            }
        },

        async createAnswer() {
            log(`${this.authuser.name} create an answer: start`);
            try {
                const answer = await this.pc.createAnswer();
                log(`Answer from ${this.authuser.name}\n ${answer.sdp}`);
                log(`${this.authuser.name} setLocalDescription: start`);
                await this.pc.setLocalDescription(answer);
                log(`${this.authuser.name} setLocalDescription: finished`);
                this.sendSignalingMessage(this.pc.localDescription, false);
            } catch (error) {
                log(`Error creating the answer from ${this.authuser.name}. Error: ${error}`);
            }
        },

        sendSignalingMessage(desc, offer) {
            const isOffer = offer ? "offer" : "answer";
            log(`${this.authuser.name} sends the ${isOffer} through the signal channel`);
            // send the offer to the other peer
            this.$socket.emit("privateMessagePCSignaling", {
                desc: desc,
                to: this.to,
                from: this.$store.state.username,
                room: this.room
            });
        },

        async setRemoteDescription(remoteDesc) {
            try {
                log(`${this.authuser.name} setRemoteDescription: start`);
                await this.pc.setRemoteDescription(remoteDesc);
                log(`${this.authuser.name} setRemoteDescription: finished`);
            } catch (error) {
                log(`Error setting the RemoteDescription in ${this.authuser.name}. Error: ${error}`
                );
            }
        },

        onIceCandidates() {
            // send any ice candidates to the other peer
            log(`${this.authuser.name} starting onice candidate`);
            this.pc.onicecandidate = ({ candidate }) => {
                /*this.$socket.emit("privateMessagePCSignaling", {
                    candidate,
                    to: this.otheruser.name,
                    from: this.authuser.name,
                    room: this.room
                });*/

                return log('thisis the candidate ' + candidate);

                var message = {from: this.authuser.id, to:this.otheruser.id, type: 'signal', subtype: 'candidate', content: candidate, time:new Date()};
                axios.post('/trigger/', message );
            };
        },

        async addCandidate(candidate) {
            try {
                log(`${this.authuser.name} added a candidate`);
                await this.pc.addIceCandidate(candidate);
                log(`Candidate added`);
            } catch (error) {
                log(`Error adding a candidate in ${this.authuser.name}. Error: ${error}`)
            }
        },

        onAddStream() {
            log(`${this.authuser.name} starting onadd stream`);

            this.pc.onaddstream = (event) => {
                if(!this.remoteVideo.srcObject && event.stream) {
                    this.remoteStream = event.stream
                    this.remoteVideo.srcObject = this.remoteStream ;
                }
            }
        },

        addLocalStream(){
            this.pc.addStream(this.localStream)
        },

        resetConnection(){
            this.pc.close();
            this.pc = null;
            this.localStream.getTracks().forEach(track => track.stop())
            this.$emit("closeVideo");
        }
    },

    watch: {
        videoAnswer: function(newVal, oldVal) {
            const desc = newVal.remoteDesc;
            const candidate = newVal.candidate;
            const close = newVal.close;
            if (desc !== undefined && desc !== oldVal.remoteDesc) {
                this.setRemoteDescription(desc);
            }
            if (candidate !== undefined && candidate !== oldVal.candidate) {
                this.addCandidate(candidate);
            }
            if(close && close !== oldVal.close){
                this.resetConnection();
            }
        }
  }
};
</script>