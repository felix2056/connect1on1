<template>
<div class="msg_box" style="right: 270px">
    <div class="msg_head" style="background: rgb(255, 52, 131);">
        <a href="#">
            <img :src="conversation.person.photo_url" class="img-circle img-responsive">
        </a>
            
        <span class="u_name">{{ conversation.person.name }}</span>

        <span @click="requestVideoCall()" :disabled="conversation == null || conversation.length == 0" class="u_name">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-video"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
        </span>
            
        <div class="close" @click="close">x</div> 
    </div>
    
    <div v-show="videoCalling" class="msg_wrap">
        <div class="msg_body">
            <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                <video width="100" class="img-responsive" autoplay id='remoteVideo'></video>

                <video width="100" class="img-responsive" autoplay id='localVideo' muted></video>
            </div>
        </div>
    </div>
    
    <div v-show="!videoCalling" class="msg_wrap">
        <div class="msg_body" id="msg_body">
            <div v-if="loading" class="col-md-12" style="text-align: center; margin-top: 70px;">
                <span class="spinner-border spinner-border-lg" role="status" aria-hidden="true"></span>
                <span style="text-align: center;white-space: nowrap;font-size: 16px;font-weight: 800;">{{ loadingMessage }}</span>
            </div>
            <div v-if="messages.length > 0" class="msg_push">
                <div v-for="message in messages" :key="message.id"  :class="message.user_id === user.id ? 'msg-right' : 'msg-left'">
                    {{ message.body }}
                </div>
            </div>
        </div>
            
        <div class="msg_footer text-block">
            <input v-model="newMessage" @keydown="isTyping" @keyup.enter="sendMessage" :disabled="noChatSelected" type="text" placeholder="Type and hit enter" class="msg_input form-control">
            <span class="field-error">{{ String(errors.message) }}</span>
            <!--<i v-if="typingUser != null" v-show="typing"> {{ typingUser }} is typing...</i>-->
                
            <button class="send-msg-btn btn btn-success" :disabled="noChatSelected || emptyMessage" @click.prevent="sendMessage" style="border: 0; top: 5px">
                <i class="fa fa-paper-plane"></i>
            </button>
        </div>
    </div>

    <!-- video call modal -->
    <div data-backdrop="static" data-keyboard="false" class="modal call fade" id="videoCall" tabindex="-1" role="dialog" style="display: none;" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-zoom" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="call">
                        <div>
                            <figure class="mb-4 avatar avatar-xl">
                                <img :src="conversation.person.photo_url" class="rounded-circle" alt="image">
                            </figure>
                            <h4>
                                <span class="text-success">Contacting </span> {{ conversation.person.name }}
                            </h4>
                            
                            <div class="col-md-4 offset-md-5 text-center" style="margin-top: 30px;">
                                <rotate-square5 class="video__spinner"></rotate-square5>
                            </div>
                            
                            <div class="action-button">
                                <button @click="stopVideoCall" type="button" class="btn btn-danger btn-floating btn-lg" data-dismiss="modal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>
                                <!--<button type="button" class="btn btn-success btn-pulse btn-floating btn-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-video"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                                </button>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ./ video call modal -->

    <!-- video answer modal -->
    <div data-backdrop="static" data-keyboard="false" class="modal call fade" id="videoAnswer" tabindex="-1" role="dialog" style="display: none;" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-zoom" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="call">
                        <div>
                            <figure class="mb-4 avatar avatar-xl">
                                <img :src="conversation.person.photo_url" class="rounded-circle" alt="image">
                            </figure>
                            <h4>
                                {{ conversation.person.name }} is requesting a <span class="text-success">Video Call </span>
                            </h4>
                            
                            <div class="col-md-4 offset-md-5 text-center" style="margin-top: 30px;">
                                <rotate-square5 class="video__spinner"></rotate-square5>
                            </div>
                            
                            <div class="action-button">
                                <button @click="stopVideoCall" type="button" class="btn btn-danger btn-floating btn-lg" data-dismiss="modal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>
                                <button @click="answerCall" type="button" class="btn btn-success btn-pulse btn-floating btn-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-video"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ./ video answer modal -->
</div>
</template>

<script>
import { RotateSquare5 } from "vue-loading-spinner";
import { servers } from '../utils/ICEServers';
import { log } from "../utils/logging";

export default {
    props: ['user', 'conversation'],

    components: {
        RotateSquare5
    },

    data() {
        return {
            loading: true,
            loadingMessage: "",

            typing: false,
            typingUser: null,

            messages: [],
            newMessage: "",

            videoCalling: false,
            isCaller: false,
        
            // videos
            myVideo: {},
            remoteVideo: {},

            //offer received from person who requested video call
            offer: null,

            //peerConnectionDidCreate
            peerConnectionDidCreate: false,

            // Media config
            constraints: {
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
        noChatSelected() {
            return this.conversation == null;
            //return Object.keys(this.user).length === 0 ||  Object.keys(this.otherUser).length === 0; //check empty obj
            //return this.user.length == 0 || this.otherUser.length == 0; //check empty arr
        },

        emptyMessage() {
            return this.newMessage == ""
        }
    },

    mounted() {
        this.getMessages(this.conversation.id)
        this.initializeVideo(this.conversation);
    },

    methods: {
        getMessages(conversation_id) {
            let _this = this;

            this.loading = true;
            this.loadingMessage = "fetching messages...";

            let url = `/mini-messages/${conversation_id}`;


            axios.get(url)
            .then(response => {
                this.messages = response.data.messages;

                this.loading = false;
                this.loadingMessage = "";

                setTimeout(function () {
                    var msg_body = this.$el.querySelector("#msg_body");
                    msg_body.scrollTop = msg_body.scrollHeight;
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
                }, 9000);
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
            }, 3000);
        },

        notTyping() {
            this.typing = false;
        },

        sendMessage() {
            if (this.conversation == null) {
                return
            }

            if (this.newMessage == "") {
                return;
            }

            let user_id = this.conversation.person.id;
            let message = this.newMessage;
            let url = `/send-message/${conversation_id}`;

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

        close() {
            this.$emit('remove', this.conversation);
        },

        async initializeVideo(conversation) {
            if (conversation != null) {
                Echo.private('video.' + conversation.id)
                .listen('VideoChatStart', (data) => {
                    if(data.to != this.user.id){
                        return;
                    }

                    if(data.type === 'signal') {
                        this.onSignalMessage(data);
                    } else if(data.type === 'text') {
                        console.log('received text message from ' + data.from + ', content: ' + data.content);
                    } else{
                        console.log('received unknown message type ' + data.type + ' from ' + data.from);
                    }
                });

                // Set the video element
                this.myVideo = document.getElementById("localVideo");
                this.remoteVideo = document.getElementById("remoteVideo");

                // Create peer connection
                this.createPeerConnection();

                // Event listeners
                this.onIceCandidates();
                this.onAddStream();
            }
        },

        async requestVideoCall() {
            if (this.conversation == null || this.conversation.length == 0) {
                return;
            }

            if (this.videoCalling == true) {
                return;
            }

            log(`${this.user.name} wants to start a call`); 

            this.isCaller = true;
            $('#videoCall').modal('show');

            await this.getUserMedia();
            await this.getAudioVideo();

            this.startVideoCall();
        },

        async getUserMedia() {
            log(`Requesting ${this.user.name} video stream`);
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

        // Send signaling data via Scaledrone
        async sendSignal(details) {
            let user = this.user.id; 
            let otheruser = this.conversation.person.id;
            //return console.log(details['content'])

            var message = { from: user, to: otheruser, type: details['type'], subtype: details['subtype'], content: details['content'], time: new Date() };
            await axios.post('/trigger-video-call', {message: message});
        },

        startVideoCall() {
            // Add local stream
            this.addLocalStream();
            this.videoCalling = true;

            if (this.isCaller) {
                this.callFriend();
            } else {
                this.createAnswer()
            }
        },

        createPeerConnection() {
            this.pc = new RTCPeerConnection(this.configuration);
            log(`Created ${this.user.name} peer connection object`);
        },

        addLocalStream(){
            this.pc.addStream(this.localStream)
        },

        onIceCandidates() {
            // send any ice candidates to the other peer
            log(`${this.user.name} starting onice candidate`);
            var limit = 0;
            this.pc.onicecandidate = ({ candidate }) => {
                if (limit == 0) {
                    var details = [];
            
                    details['type'] = 'signal';
                    details['subtype'] = 'candidate';
                    details['content'] = candidate;

                    this.sendSignal(details);
                    limit = 1;
                } else {
                    return;
                }
            };
        },

        onAddStream() {
            log(`${this.user.name} starting onadd stream`);

            this.pc.onaddstream = (event) => {
                if(!this.remoteVideo.srcObject && event.stream) {
                    this.remoteStream = event.stream
                    this.remoteVideo.srcObject = this.remoteStream ;
                }
            }
        },

        callFriend() {
            log(`${this.user.name} wants to start a call`);   
            this.createOffer();
        },

        async setRemoteDescription(remoteDesc) {
            try {
                log(`${this.user.name} setRemoteDescription: start`);
                await this.pc.setRemoteDescription(remoteDesc);
                log(`${this.user.name} setRemoteDescription: finished`);
            } catch (error) {
                log(`Error setting the RemoteDescription in ${this.user.name}. Error: ${error}`);
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
            log(`${this.user.name} create an offer: start`);
            
            try {
                const offer = await this.pc.createOffer(this.offerOptions);

                log(`Offer from ${this.user.name}\n ${offer.sdp}`);
                log(`${this.user.name} setLocalDescription: start`);
                
                await this.pc.setLocalDescription(offer);
                
                log(`${this.user.name} setLocalDescription: finished`);
                
                this.sendSignalingMessage(this.pc.localDescription, true);
            } catch (error) {
                log(`Error creating the offer from ${this.user.name}. Error: ${error}`);
            }
        },

        sendSignalingMessage(desc, offer) {
            const isOffer = offer ? "offer" : "answer";
            log(`${this.user.name} sends the ${isOffer} through the signal channel`);
            // send the offer to the other peer
            var details = [];
            
            details['type'] = 'signal';
            details['subtype'] = isOffer;
            details['content'] = desc;

            this.sendSignal(details);
        },

        onSignalMessage(m) {
            log(m.subtype);
            
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
            $('#videoAnswer').modal('show');
        },

        answerCall() {
            this.isCaller = false;

            $('#videoAnswer').modal('hide');
            this.startAnswer()
        },

        async startAnswer() {
            log(`Requesting ${this.user.name} video stream`);
            
            await this.getUserMedia();
            await this.getAudioVideo();

            this.startVideoCall();
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
            $('#videoCall').modal('hide');
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

            $('#videoCall').modal('hide')
        },

        closeMedia(){
            this.localStream.getTracks().forEach(function(track){track.stop();});
        },

        clearView(){
            this.myVideo.srcObject = null;
            this.remoteVideo.srcObject = null;
        },

        //Video call already going on and member wants to end it
        endVideoCall() {
            let details = [];

            details['type'] = 'signal';
            details['subtype'] = 'close';
            details['content'] = 'ending the call';

            this.sendSignal(details);

            log('Ending call');
            this.pc.close();
            this.pc = null;

            this.videoCalling = false;

            this.closeMedia();
            this.clearView();
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
    pointer-events: auto;
}
</style>