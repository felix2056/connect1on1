<template>
<div class="msg_box">
    <div class="msg_head" style="background: rgb(255, 52, 131)">
        <a href="#">
            <img :src="user.photo_url" class="img-circle img-responsive">
        </a>
            
        <span class="u_name">{{ user.name }}</span>

        <div class="close" @click="close">x</div> 
    </div>

    <div v-show="videoCalling" class="msg_wrap">
        <div class="msg_body">
            <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                <video width="100" class="img-responsive" autoplay id='localVideo' muted></video>

                <video width="100" class="img-responsive" autoplay id='remoteVideo'></video>
            </div>

            <!-- video call -->
            <div class="text-center" id="videoCall" style="display: none; margin-top: 20px;">
                <span>contacting {{ user.name }} </span>
                <hr style="margin: 0; border-color: #ff3483;">
                <div class="text-center col-md-4 offset-md-4" style="margin-top: 20px;">
                    <rotate-square5 class="video__spinner"></rotate-square5>
                </div>
            </div>
        </div>
    </div>

    <div v-show="voiceCalling" class="msg_wrap">
        <div class="msg_body">
            <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                <audio id="localAudio" autoplay controls muted></audio>
    
                <audio id="remoteAudio" autoplay></audio>
            </div>
            <div class="text-center" id="voiceCall" style="display: none; margin-top: 20px;">
                <span>contacting {{ user.name }} </span>

                <hr style="margin: 0; border-color: #ff3483;">
                
                <div class="text-center col-md-4 offset-md-4" style="margin-top: 20px; margin-bottom: 20px;">
                    <rotate-square5 class="video__spinner"></rotate-square5>
                </div>
                        
                <button @click="endCall()" type="button" class="col-md-12 text-center btn btn-danger btn-floating btn-lg" style="background: #df1b5c;border-color: #df1b5c;color: #fff;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>

                <div style="margin-bottom: 15px"></div>
            </div>

            <!-- <div class="voiceAnswer" id="voiceAnswer" style="display: none;">
                <span>{{ otheruser }} wants to do a voice chat</span>
                    
                <button @click="endCall()" type="button" class="btn btn-danger btn-floating btn-lg" style="background: #df1b5c;border-color: #df1b5c;color: #fff;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
                        
                <button @click="answerCall()" type="button" class="btn btn-success btn-pulse btn-floating btn-lg" style="background: #0abb87;border-color: #0abb87;color: #fff;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </button>

                <div style="margin-bottom: 15px"></div>
            </div> -->
        </div>
    </div>
    
    <div v-show="videoCalling == false && voiceCalling == false" class="msg_wrap">
        <div class="msg_body" id="msg_body">
            <div v-if="loading" class="col-md-12" style="text-align: center; margin-top: 70px;">
                <span class="spinner-border spinner-border-lg" role="status" aria-hidden="true"></span>
                <span style="text-align: center;white-space: nowrap;font-size: 16px;font-weight: 600;">{{ loadingMessage }}</span>
            </div>
            <div v-if="messages.length > 0" class="msg_push">
                <div v-for="message in messages" :key="message.id"  :class="message.user_id === user.id ? 'msg-right' : 'msg-left'" style="margin-bottom: 10px">
                    {{ message.body }}
                </div>

                <div style="margin-bottom: 20px"></div>
            </div>
            <div v-else>
                <span style="text-align: center;white-space: nowrap;font-size: 16px;font-weight: 600;">No messages!</span>
            </div>
        </div>
            
        <div class="msg_footer text-block" style="clear: both">
            <input v-model="newMessage" @keydown="isTyping" @keyup.enter="sendMessage" type="text" placeholder="Type and hit enter" class="msg_input form-control">
            <span class="field-error">{{ String(errors.message) }}</span>
            <!--<i v-if="typingUser != null" v-show="typing"> {{ typingUser }} is typing...</i>-->
                
            <button class="send-msg-btn btn btn-success" :disabled="emptyMessage" @click.prevent="sendMessage" style="border: 0; top: 5px">
                <i class="fa fa-paper-plane"></i>
            </button>

            <button type="button" @click="want2VoiceChat()" data-toggle="tooltip" title="Start voice chat" data-original-title="Start voice chat" class="btn btn-warning col-md-6 col-sm-6 col-6" style="border: 0px;top: 5px;float: left;">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </button>

            <button type="button" @click="want2VideoChat()" data-toggle="tooltip" title="Start video chat" data-original-title="Start video chat" class="btn btn-info col-md-6 col-sm-6 col-6" style="border: 0px;top: 5px;float: left;">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-video"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
            </button>
        </div>
    </div>
</div>
</template>

<script>
import { RotateSquare5 } from "vue-loading-spinner";
import { servers } from '../utils/ICEServers';
import { log } from "../utils/logging";

export default {
    props: ['authuser', 'user'],

    components: {
        RotateSquare5
    },

    data() {
        return {
            loading: true,
            loadingMessage: "",

            typing: false,
            typingUser: null,
            
            conversation: null,

            messages: [],
            newMessage: "",

            videoCalling: false,
            voiceCalling: false,
            isCaller: false,

            //Differenciate between when first user wants a voice chat. Video chat is the default
            otherUserRequestedVoice: false,
        
            // videos
            myVideo: {},
            remoteVideo: {},

            //audios
            myAudio: {},
            remoteAudio: {},

            //offer received from person who requested video call
            offer: null,

            //peerConnectionDidCreate
            peerConnectionDidCreate: false,

            // Media config Video Call
            videoConstraints: {
                audio: {
                    echoCancellation: true,
                    noiseSuppression: true, 
                    autoGainControl: false
                },
                video: { 
                    width: 1080, 
                    height: 720 
                }
            },

            // Media config Voice Call
            voiceConstraints: {
                audio: {
                    echoCancellation: true,
                    noiseSuppression: true, 
                    autoGainControl: false
                },
                video: false
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
                message: ""
            }
        }
    },

    computed: {
        emptyMessage() {
            return this.newMessage == ""
        }
    },

    async mounted() {
        var w = $(window).width();
        var h = $(window).height();

        if (w < 768) {
            $('.msg_box').css('width',  w - 30);
            $('.msg_box').css('height', h);

            //Set height for scroll effect
            $('#msg_body').css('height', h);
            
            // $('.msg_box').css('height', 425);
            $('.online-side-nav').hide();

            this.$store.state.conversationIsFull = true;
        } else {
            $('.msg_box').css('width', 250);
            $('.online-side-nav').hide();
        }
        
        $(window).on('resize', function(){
            var w = $(window).width();
            var h = $(window).height();
            
            if (w < 768) {
                console.log(w)
                $('.msg_box').css('width', w - 30);
                $('.msg_box').css('height', h);
                
                //Set height for scroll effect
                $('#msg_body').css('height', h);
                // $('.msg_box').css('height', 425);
                $('.online-side-nav').hide();

                this.$store.state.conversationIsFull = true;
            } else {
                $('.msg_box').css('width', 250);
                $('.online-side-nav').hide();
            }
        });
        
        await this.getMessages(this.user.id)
    },

    methods: {
        async getMessages(user_id) {
            let _this = this;

            this.loading = true;
            this.loadingMessage = "fetching messages...";

            let url = `/mini-messages-without-convo/${user_id}`;

            axios.get(url)
            .then(response => {
                if(response.data.messages != null) {
                    this.messages = response.data.messages;
                }

                if(response.data.conversation != null) {
                    this.conversation = response.data.conversation;
                }

                this.initializeVideo(this.conversation).then(() => {
                    if (this.user.video) {
                        this.requestVideoCall();
                    }
                });

                this.loading = false;
                this.loadingMessage = "";

                var msg_body = document.getElementById("msg_body");

                setTimeout(function () {
                    msg_body.scrollTop = msg_body.scrollHeight;
                }, 200);
            });

            Echo.private('chat')
            .listen('MessageSent', (e) => {
                console.log(e);

                this.$store.dispatch('addSelectedUser', {user: this.user});

                this.messages.push({
                    id: e.message.id,
                    user_id: e.message.user_id,
                    user: e.message.user,
                    body: e.message.body,
                    created_at: e.message.created_at
                });

                setTimeout(function () {
                    var msg_body = this.$el.querySelector("#msg_body");
                    msg_body.scrollTop = msg_body.scrollHeight;
                }, 200);
            })
            .listenForWhisper('typing', (e) => {
                this.typingUser = e.typingUser;
                this.typing = e.typing;

                // remove is typing indicator after 0.9s
                setTimeout(function() {
                    _this.typing = false
                }, 900);
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
            if (this.user == null) {
                return
            }

            if (this.newMessage == "") {
                return;
            }

            let user_id = this.user.id;
            let message = this.newMessage;
            let url = `/send-message/${user_id}`;

            axios.post(url, {  user_id: user_id, message: message })
            .then(response => {
                this.messages.push(response.data.message);
                this.newMessage = "";

                setTimeout(function () {
                    var msg_body = this.$el.querySelector("#msg_body");
                    msg_body.scrollTop = msg_body.scrollHeight;
                }, 200);
            })
            .catch(error => {
                error.response.data.error.message ? (this.errors.message = error.response.data.error.message) : null
            });
        },

        async initializeVideo(conversation) {
            if (conversation != null) {
                log(`${this.authuser.name} initializing and setting up in case of video call`);

                Echo.private('video.' + conversation.id)
                .listen('VideoChatStart', (data) => {
                    // VALIDATOR: since the other user is getting the broadcast, data.to will now be the authuser while data.from will be the other user. It's reversed
                    if(data.from != this.user.id && data.to != this.authuser.id){
                        return;
                    }

                    if(data.type === 'signal') {
                        this.onSignalMessage(data);
                    } else{
                        console.log('received unknown message type ' + data.type + ' from ' + data.from);
                    }
                });

                // Set the video and audio element in case there would be need for them
                this.myVideo = document.getElementById("localVideo");
                this.remoteVideo = document.getElementById("remoteVideo");

                this.myAudio = document.getElementById('localAudio'); 
                this.remoteAudio = document.getElementById('remoteAudio');

                // Create peer connection
                this.createPeerConnection();

                // Event listeners
                this.onIceCandidates();
                this.onAddStream();
            }
        },

        async want2VoiceChat() {
            Swal.fire({
                title: "Attempting To Call " + this.user.name,
                type: "info",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Proceed"
            }).then(result => {
                if (result.value) {
                    this.requestVoiceCall();
                }
            });
        }, 

        async want2VideoChat() {
            Swal.fire({
                title: "Attempting To Video Call " + this.user.name,
                type: "info",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Proceed"
            }).then(result => {
                if (result.value) {
                    this.requestVideoCall();
                }
            });
        },

        async requestVoiceCall() {
            if (this.conversation == null || this.conversation.length == 0) {
                Toast.fire({
                    type: "error",
                    title: "You do not have an active conversation with " + this.user.name
                });

                this.closeMedia();
                this.clearView();
                return;
            }

            if (this.voiceCalling || this.videoCalling) {
                return;
            }

            log(`${this.authuser.name} wants to start a voice call`); 

            this.isCaller = true;
            $('#voiceCall').show();

            await this.getUserVoiceMedia();
            await this.getAudio();

            this.startVoiceCall();
        },

        async requestVideoCall() {
            if (this.conversation == null || this.conversation.length == 0) {
                Toast.fire({
                    type: "error",
                    title: "You do not have an active conversation with " + this.user.name
                });

                this.closeMedia();
                this.clearView();
                return;
            }

            if (this.voiceCalling || this.videoCalling) {
                return;
            }

            log(`${this.authuser.name} wants to start a call`); 

            this.isCaller = true;
            $('#videoCall').show();

            await this.getUserMedia();
            await this.getAudioVideo();

            this.startVideoCall();
        },

        async getUserMedia() {
            log(`Requesting ${this.authuser.name} video stream`);
            if ("mediaDevices" in navigator) {
                try {
                    const stream = await navigator.mediaDevices.getUserMedia(this.videoConstraints);
                    this.myVideo.srcObject = stream;
                    this.localStream = stream;
                    log("Received local video stream");
                } catch (error) {
                    log(`getUserMedia error: ${error}`);
                }
            }
        },

        async getUserVoiceMedia() {
            log(`Requesting ${this.authuser.name} video stream`);
            if ("mediaDevices" in navigator) {
                try {
                    const stream = await navigator.mediaDevices.getUserMedia(this.voiceConstraints);
                    this.myAudio.srcObject = stream;
                    this.localStream = stream;
                    log("Received local voice stream");
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

        getAudio() {
            const audio = this.localStream.getAudioTracks();
            if (audio.length > 0) log(`Using audio device: ${audio[0].label}`);
        },

        // Send signaling data via Scaledrone
        async sendSignal(details) {
            let user = this.authuser.id; 
            let otheruser = this.user.id;
            //return console.log(details['content'])

            var message = { from: user, to: otheruser, type: details['type'], subtype: details['subtype'], content: details['content'], contact_type: details['contact_type'], time: new Date() };
            await axios.post('/trigger-video-call', {message: message});
        },

        startVoiceCall() {
            // Add local stream
            this.addLocalStream();

            if (this.videoCalling) {
                //User already in a call so don't let him proceed
                Toast.fire({
                    type: "error",
                    title: "You are already in a video call with " + this.user.name
                });

                return;
            }

            if (this.voiceCalling) {
                //User already in a call so don't let him proceed
                Toast.fire({
                    type: "error",
                    title: "You are already in a voice call with " + this.user.name
                });

                return;
            }

            this.voiceCalling = true;

            if (this.isCaller) {
                this.callFriend();
            } else {
                this.createAnswer()
            }
        },

        startVideoCall() {
            // Add local stream
            this.addLocalStream();

            if (this.videoCalling) {
                //User already in a call so don't let him proceed
                Toast.fire({
                    type: "error",
                    title: "You are already in a video call with " + this.user.name
                });

                return;
            }

            if (this.voiceCalling) {
                //User already in a call so don't let him proceed
                Toast.fire({
                    type: "error",
                    title: "You are already in a voice call with " + this.user.name
                });

                return;
            }

            this.videoCalling = true;

            if (this.isCaller) {
                this.callFriend();
            } else {
                this.createAnswer()
            }
        },

        createPeerConnection() {
            this.pc = new RTCPeerConnection(this.configuration);
            log(`${this.authuser.name} Created peer connection object with ${this.user.name}`);
        },

        addLocalStream(){
            this.pc.addStream(this.localStream)
        },

        onIceCandidates() {
            // send any ice candidates to the other peer
            log(`${this.authuser.name} starting onice candidate`);
            var limit = 0;
            this.pc.onicecandidate = ({ candidate }) => {
                if (limit == 0) {
                    var details = [];
            
                    details['type'] = 'signal';
                    details['subtype'] = 'candidate';
                    details['content'] = candidate;

                    //Tell the other user you only want voice chat
                    if (this.voiceCalling) {
                        details['contact_type'] = 'Voice';
                    }
                    else {
                        //Video is default
                        details['contact_type'] = 'Video';
                    }

                    this.sendSignal(details);

                    //Limit the number of ICEs to be sent to avoid recuring multiple times
                    limit = 1;
                } else {
                    return;
                }
            };
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

        callFriend() {
            log(`${this.authuser.name} wants to start a call`);   
            this.createOffer();
        },

        async setRemoteDescription(remoteDesc) {
            try {
                log(`${this.authuser.name} setRemoteDescription: start`);
                await this.pc.setRemoteDescription(remoteDesc);
                log(`${this.authuser.name} setRemoteDescription: finished`);
            } catch (error) {
                log(`Error setting the RemoteDescription with ${this.user.name}. Error: ${error}`);
            }
        },

        async createAnswer() {
            log(`${this.user.name} create an answer: start`);
            try {
                const answer = await this.pc.createAnswer();

                log(`Answer from ${this.user.name}\n ${answer.sdp}`);
                log(`${this.user.name} setLocalDescription: start`);
                
                await this.pc.setLocalDescription(answer);
                
                log(`${this.user.name} setLocalDescription: finished`);
                this.sendSignalingMessage(this.pc.localDescription, false);
            } catch (error) {
                log(`Error creating the answer from ${this.user.name}. Error: ${error}`);
            }
        },

        async createOffer() {
            log(`${this.authuser.name} create an offer: start`);
            
            try {
                const offer = await this.pc.createOffer(this.offerOptions);

                log(`Offer from ${this.user.name}\n ${offer.sdp}`);
                log(`${this.authuser.name} setLocalDescription: start`);
                
                await this.pc.setLocalDescription(offer);
                
                log(`${this.authuser.name} setLocalDescription: finished`);
                
                this.sendSignalingMessage(this.pc.localDescription, true);
            } catch (error) {
                log(`Error creating the offer from ${this.authuser.name}. Error: ${error}`);
            }
        },

        sendSignalingMessage(desc, offer) {
            const isOffer = offer ? "offer" : "answer";
            log(`${this.authuser.name} sends the ${isOffer} through the signal channel`);
            // send the offer to the other peer
            var details = [];
            
            details['type'] = 'signal';
            details['subtype'] = isOffer;
            details['content'] = desc;

            //Tell the other user you only want voice chat
            if (this.voiceCalling) {
                details['contact_type'] = 'Voice';
            }
            else {
                //Video is default
                details['contact_type'] = 'Video';
            }

            this.sendSignal(details);
        },

        onSignalMessage(m) {
            log(m.subtype);

            //pop up the session to the user who has been called by adding him to a conversation
            this.$store.dispatch('addSelectedUser', {user: this.user});

            if (m.contact_type == 'Voice') {
                this.otherUserRequestedVoice = true;
            }
            
            if(m.subtype === 'offer') {
                log('got remote offer from ' + m.from + ', content ' + m.content);
                this.onSignalOffer(m.content);
            } else if(m.subtype === 'answer') {
                this.onSignalAnswer(m.content);
            } else if(m.subtype === 'candidate') {
                log('got remote candidate from ' + m.from + ', content ' + m.content);
                this.onSignalCandidate(m.content);
            } else if(m.subtype === 'close') {
                this.onSignalClose();
            } else {
                console.log('unknown signal type ' + m.subtype);
            }
        },

        async onSignalOffer(offer) {
            log('onsignal offer')
            this.offer = offer;
            
            var data = {
                type: this.offer.type,
                sdp: this.offer.sdp += "\n"
            }
            await this.setRemoteDescription(data);

            if (this.otherUserRequestedVoice) {
                Swal.fire({
                    title: "Incoming Call...",
                    text: this.user.name + " is calling you",
                    type: "info",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Answer"
                }).then(result => {
                    if (result.value) {
                        this.answerCall();
                    }
                });   
            } else {
                Swal.fire({
                    title: "New Video Chat Request",
                    text: this.user.name + " wants to video chat.",
                    type: "info",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Answer"
                }).then(result => {
                    if (result.value) {
                        this.answerCall();
                    }
                });
            }
            
            // $('#videoAnswer').show();
        },

        answerCall() {
            this.isCaller = false;

            // $('#videoAnswer').hide();
            this.startAnswer()
        },

        async startAnswer() {
            log(`Requesting ${this.user.name} video stream`);

            if (this.otherUserRequestedVoice) {
                await this.getUserVoiceMedia();
                await this.getAudio();

                this.startVoiceCall();
            } else{
                await this.getUserMedia();
                await this.getAudioVideo();

                this.startVideoCall();
            }
        },

        async onSignalAnswer(answer) {
            log('onRemoteAnswer : ' + answer);

            var data = {
                type: answer.type,
                sdp: answer.sdp += "\n"
            }
            await this.setRemoteDescription(data);
            
            this.onSetRemoteSuccess(this.pc);
        },

        onSetRemoteSuccess(pc) {
            if (this.otherUserRequestedVoice) {
                $('#voiceCall').hide();
            } else {
                $('#videoCall').hide();
            }
        
            log(pc + ' setRemoteDescription complete');
        },

        async onSignalCandidate(candidate) {
            try {
                log(`${this.user.name} attempting to add a candidate`);
                await this.pc.addIceCandidate(new RTCIceCandidate(candidate));
                log(`Candidate added`);
            } catch (error) {
                log(`Error adding a candidate in ${this.user.name}. Error: ${error}`)
            }
        },

        async close() {
            if (this.videoCalling || this.voiceCalling) {
                Swal.fire({
                    title: "Attempting To End Call?",
                    text: "Closing this chat will end your current call session with " + this.user.name,
                    type: "error",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "End call"
                }).then(result => {
                    if (result.value) {
                        this.endCall();
                    } else {
                        return
                    }
                });
            } else {
                this.$emit('remove', this.user);
            }
        },

        //Video call already going on and member wants to end it
        async endCall() {
            let details = [];

            details['type'] = 'signal';
            details['subtype'] = 'close';
            details['content'] = 'ending the call';

            //Tell the other user you only want voice chat
            if (this.voiceCalling) {
                details['contact_type'] = 'Voice';
            }
            else {
                //Video is default
                details['contact_type'] = 'Video';
            }

            await this.sendSignal(details);

            log('Ending call');
            this.pc.close();
            this.pc = null;

            this.videoCalling = false;

            this.closeMedia();
            this.clearView();

            this.$emit('remove', this.user);
        },

        onSignalClose() {
            log('Ending call');
            this.pc.close();
            this.pc = null;

            this.videoCalling = false;

            this.closeMedia();
            this.clearView();
        },

        stopVideoCall() {
            this.pc.close();
            this.pc = null;

            this.videoCalling = false;
            
            this.closeMedia();
            this.clearView();

            if (this.otherUserRequestedVoice) {
                $('#voiceCall').hide();
            } else {
                $('#videoCall').hide();
            }
        },

        closeMedia(){
            this.localStream.getTracks().forEach(function(track){track.stop();});
        },

        clearView(){
            if (this.otherUserRequestedVoice) {
                this.myAudio.srcObject = null;
                this.remoteAudio.srcObject = null;
            } else {
                this.myVideo.srcObject = null;
                this.remoteVideo.srcObject = null;
            }

            Toast.fire({
                type: "success",
                title: "Your call has ended"
            });
        }
    }
}
</script>

<style>
input[type="text"]:disabled, button:disabled {
    cursor: not-allowed! important; 
}

.msg_box{
    float: right;
    position: relative;
    right: 0;
    margin-left: 5px;
    height: 100%;
    pointer-events: auto;
}
</style>