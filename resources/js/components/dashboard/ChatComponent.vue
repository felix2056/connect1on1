<template>
<div class="chat">
    <!--<Modals v-if="!noChatSelected" :user="user" :otherUser="conversation.person" />-->

    <div class="chat-header">
        <div class="chat-header-user" v-if="!noChatSelected">
            <figure class="avatar">
                <img :src="conversation.person.photo_url" class="rounded-circle" :alt="conversation.person.name">
            </figure>
            
            <div>
                <h5>{{ conversation.person.name }}</h5>
        
                <small class="text-success">
                    <i v-if="typingUser != null" v-show="typing"> {{ typingUser }} is typing...</i>
                </small>
            </div>
        </div>
        
        <div class="chat-header-action">
            <ul class="list-inline">
                <li class="list-inline-item d-xl-none d-inline">
                    <button class="btn btn-outline-light mobile-navigation-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    </button>
                </li>
                
                <li class="list-inline-item" data-toggle="tooltip" title="" data-original-title="Voice call">
                    <button class="btn btn-outline-light text-success" :disabled="noChatSelected" data-toggle="modal" data-target="#call">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </button>
                </li>
                
                <li class="list-inline-item" data-toggle="tooltip" title="" data-original-title="Video call">
                    <button class="btn btn-outline-light text-warning" :disabled="noChatSelected" data-toggle="modal" data-target="#videoCall">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-video"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                    </button>
                </li>
                
                <li class="list-inline-item">
                    <button class="btn btn-outline-light" :disabled="noChatSelected" data-toggle="dropdown" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                    </button>
                    
                    <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(968px, 53px, 0px);">
                        <a href="#" data-navigation-target="contact-information" class="dropdown-item active">Profile</a>
                        <a href="#" class="dropdown-item">Add to archive</a>
                        <a href="#" class="dropdown-item">Delete</a>
                        
                        <div class="dropdown-divider"></div>
                        
                        <a href="#" class="dropdown-item text-danger">Block</a>
                    </div>
                </li>

                <button @click="requestVideoCall()"></button>
            </ul>
        </div>
    </div>

    <div v-if="videoCalling" class="container video" style="background: rgba(21, 20, 20, 0.61); overflow:auto">  
        <div class="row">
            <div class="col-lg-12 text-right" style="right: 0;margin-bottom: 20px; margin-top: 20px;">
                <video width="100" class="img-responsive" autoplay id='localVideo'></video>
            </div>
            <div class="col-lg-12 col-md-12 mb-4">
                <div class="card" tabindex="-1">
                    <!--Body-->
                    <div class="card-body mb-0 p-0">
                        <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                            <video width="100" class="img-responsive" autoplay id='remoteVideo'></video>

                            <!--<div class="modal-content">
                                <div class="modal-body">
                                    <div class="call">
                                        <div>
                                            <figure class="mb-4 avatar avatar-xl">
                                                <img :src="conversation.person.photo_url" class="rounded-circle" alt="image">
                                            </figure>
                                            <h4>Waiting for <span class="text-success">{{ conversation.person.name }}...</span></h4>
                                            <div class="action-button">
                                                <button type="button" class="btn btn-danger btn-floating btn-lg" data-dismiss="modal">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                                </button>
                                                <button type="button" class="btn btn-success btn-pulse btn-floating btn-lg">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-video"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>-->
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 text-center" style="right: 0;margin-bottom: 20px; margin-top: 20px;">
                    <div class="action-button">
                        <button type="button" data-dismiss="modal" class="btn btn-danger btn-floating btn-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    <div v-else id="chatbody" class="chatbody" :class="{ 'no-message': noChatSelected }" style="overflow: auto; outline: currentcolor none medium;" tabindex="1"> <!-- .no-message -->
        <div v-if="noChatSelected" class="no-message-container">
            <div class="row mb-5">
                <div class="col-md-6 offset-md-3 col-sm-6 offset-sm-3 col-6 offset-3">
                    <img src="/images/dashboard/undraw_empty_xct9.svg" class="img-fluid" alt="image">
                </div>
            </div>
            <p class="lead">Select a chat to read messages</p>
        </div>

        <div v-else-if="loading" class="col-md-12" style="text-align: center; margin-top: 70px;">
            <span class="spinner-border spinner-border-lg" role="status" aria-hidden="true"></span>
            <span style="text-align: center;white-space: nowrap;font-size: 16px;font-weight: 100;">{{ loadingMessage }}</span>
        </div>
        
        
        <div v-else class="messages">
            <div v-if="messages.length > 0" v-for="message in messages" :key="message.id" class="message-item" :class="{ 'outgoing-message': message.user_id === user.id }">
                <div class="message-avatar">
                    <figure class="avatar">
                        <img :src="message.user.photo_url" class="rounded-circle" :alt="message.user.name">
                    </figure>
                    
                    <div>
                        <h5>{{ message.user.name }}</h5>

                        <div class="time">
                            <timeago :datetime="message.created_at" :auto-update="60"></timeago>
                            <!--<i class="ti-double-check text-info"></i>-->
                        </div>
                    </div>
                </div>
                
                <div class="message-content">
                    {{ message.body }}
                </div>
            </div>
            
            <!--<div class="message-item messages-divider sticky-top" data-label="Today"></div>-->
            <div class="mb-10"></div>
                    
        </div>
    </div>

    <div class="chat-footer">
        <form>
            <div>
                <button class="btn btn-light mr-3" :disabled="noChatSelected" data-toggle="tooltip" title="" type="button" data-original-title="Emoji">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smile"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                </button>
            </div>
            
            <input type="text" class="form-control" @keydown="isTyping" v-model="newMessage" :disabled="noChatSelected" placeholder="Type your message...">
            <span class="field-error">{{ String(errors.message) }}</span>

            <div class="form-buttons">
                <button class="btn btn-light" :disabled="noChatSelected" data-toggle="tooltip" title="" type="button" data-original-title="Add files">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-paperclip"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                </button>
                <button class="btn btn-light d-sm-none d-block" :disabled="noChatSelected" data-toggle="tooltip" title="" type="button" data-original-title="Send a voice record">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mic"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
                </button>
                <button class="btn btn-primary" type="button" :disabled="noChatSelected || emptyMessage" @click.prevent="sendMessage">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
            </div>
        </form>
    </div>
</div>
</template>

<script>
$(function () {
    var localVideo = document.getElementById('localVideo');
    var remoteVideo = document.getElementById('remoteVideo');
    //var answerButton = document.getElementById('answerCallButton');

    //answerButton.onclick = answerCall;

    //$('input[type=file]').on('change', prepareUpload);
});

var files;

var conversationID;
var leftUID;
var rightUID;
var startTime;
var localStream;
var pc;

var offerOptions = {
    offerToReceiveAudio: 1,
    offerToReceiveVideo: 1
};

var isCaller = false;
var peerConnectionDidCreate = false;
var candidateDidReceived = false;

function trace(arg) {
    var now = (window.performance.now() / 1000).toFixed(3);
    console.log(now + ': ', arg);
}

//import Modals from './modals/Modals';

export default {
    props: ['user', 'conversation'],

    components: {
        //Modals,
    },
      
    data() {
        return {
            loading: false,
            loadingMessage: "",

            messages: [],
            newMessage: "",
            
            typing: false,
            typingUser: null,

            videoCalling: false,

            errors: {
                message: "",
            }
        };
    },

    computed: {
        noChatSelected() {
            return this.conversation == null;
            //return Object.keys(this.authUser).length === 0 ||  Object.keys(this.otherUser).length === 0; //check empty obj
            //return this.authUser.length == 0 || this.otherUser.length == 0; //check empty arr
        },

        emptyMessage() {
            return this.newMessage == ""
        }
    },

    async created() {
        this.$parent.$on('chat_selected', this.getMessages);
    },
    
    methods: {
        check(id) {
            return id === this.user.id;
        },

        async getMessages() {
            let _this = this;

            this.loading = true;
            this.loadingMessage = "fetching messages...";

            let conversation_id = this.conversation.id;
            let url = `/messages/${conversation_id}`;

            var chat_body = this.$el.querySelector("#chatbody");

            axios.get(url)
            .then(response => {
                this.messages = response.data.messages;

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
            if (this.conversation == null) {
                return
            }

            if (this.newMessage == "") {
                return;
            }

            let conversation_id = this.conversation.id;
            let message = this.newMessage;
            let url = `/send-message/${conversation_id}`;

            axios.post(url, {  conversation_id: conversation_id, message: message })
            .then(response => {
                this.messages.push(response.data.message);
                this.newMessage = "";

                var chat_body = this.$el.querySelector("#chatbody");

                setTimeout(function () {
                    chat_body.scrollTop = chat_body.scrollHeight;
                }, 200);
            })
            .catch(error => {
                error.response.data.error.message ? (this.errors.message = error.response.data.error.message) : null
            });
        },

        requestVideoCall() {
            if(this.conversation.length === 0) {
                return;
            }

            this.videoCalling = true;

            Cookies.set('uuid', this.user.id);
            Cookies.set('conversationID', this.conversation.id);
            Cookies.set('remoteUUID', this.conversation.person.id);

            window.remoteUUID = this.conversation.person.id;

            leftUID = Cookies.get('uuid');
            rightUID = Cookies.get('remoteUUID');
            isCaller = true;

            start()
        },
    }
};

async function start() {
    trace('Requesting local stream');
    await getUserMedia()
}

async function getUserMedia() {
    navigator.mediaDevices.getUserMedia({
        audio: true,
        video: {
            width: { min: 1280 },
            height: { min: 720 }
        }
    })
    .then(gotStream)
    .catch(function(e) {
        alert('getUserMedia() error: ' + e.name);
    });
}

function gotStream(stream) {
    trace('Received local stream');
    
    localVideo.srcObject = stream;
    localStream = stream;
    call()
}

function call() {
    conversationID = Cookies.get('conversationID');

    trace('Starting call');
    startTime = window.performance.now();
    var videoTracks = localStream.getVideoTracks();
    var audioTracks = localStream.getAudioTracks();
    
    if (videoTracks.length > 0) {
        trace('Using video device: ' + videoTracks[0].label);
    }
    if (audioTracks.length > 0) {
        trace('Using audio device: ' + audioTracks[0].label);
    }

    var configuration = { "iceServers": [{ "urls": "stun:stun.ideasip.com" }] };
    pc = new RTCPeerConnection(configuration);

    trace('Created local peer connection object pc');


    pc.onicecandidate = function(e) {
        onIceCandidate(pc, e);
    };
    

    pc.oniceconnectionstatechange = function(e) {
        onIceStateChange(pc, e);
    };

    pc.onaddstream = gotRemoteStream;

    //return alert('this far')

    pc.addStream(localStream);

    trace('Added local stream to pc');

    peerConnectionDidCreate = true;

    if(isCaller) {
        trace('createOffer start');
        trace('pc createOffer start');

        pc.createOffer(
            offerOptions
        ).then(
            onCreateOfferSuccess,
            onCreateSessionDescriptionError
        );
    }else{
        onAnswer()
    }
}

function onAnswer(){
        var remoteOffer = Cookies.getJSON('offer');

        pc.setRemoteDescription(remoteOffer).then(function(){onSetRemoteSuccess(pc)}, onSetSessionDescriptionError);

        pc.createAnswer().then(
            onCreateAnswerSuccess,
            onCreateSessionDescriptionError
        );
    }

function onCreateAnswerSuccess(desc) {
        trace('Answer from pc:\n' + desc.sdp);
        trace('pc setLocalDescription start');
        pc.setLocalDescription(desc).then(
            function() {
                onSetLocalSuccess(pc);
            },
            onSetSessionDescriptionError
        );
        conversationID = Cookies.get('conversationID');
        var message = {from: leftUID, to:rightUID, type: 'signal', subtype: 'answer', content: desc, time:new Date()};
        //axios.post('/trigger/' + conversationID , message );
    }

function onCreateSessionDescriptionError(error) {
        trace('Failed to create session description: ' + error.toString());
    }

function onIceCandidate(pc, event) {
        if (event.candidate){
            trace(pc + ' ICE candidate: \n' + (event.candidate ? event.candidate.candidate : '(null)'));
            conversationID = Cookies.get('conversationID');
            var message = {from: leftUID, to:rightUID, type: 'signal', subtype: 'candidate', content: event.candidate, time:new Date()};
            //axios.post('/trigger/' + conversationID , message );
        }
    }

function onAddIceCandidateSuccess(pc) {
        trace(pc + ' addIceCandidate success');
    }

    function onAddIceCandidateError(pc, error) {
        trace(pc + ' failed to add ICE Candidate: ' + error.toString());
    }

    function onIceStateChange(pc, event) {
        if (pc) {
            trace(pc + ' ICE state: ' + pc.iceConnectionState);
            console.log('ICE state change event: ', event);
        }
    }

function onCreateOfferSuccess(desc) {
        trace('Offer from pc\n' + desc.sdp);
        trace('pc setLocalDescription start');
        pc.setLocalDescription(desc).then(
            function() {
                onSetLocalSuccess(pc);
            },
            onSetSessionDescriptionError
        );

        conversationID = Cookies.get('conversationID');
        var message = {from: leftUID, to:rightUID, type: 'signal', subtype: 'offer', content: desc, time:new Date()};
        //axios.post('/trigger/' + conversationID , message );
    }

function onSetLocalSuccess(pc) {
        trace( pc + ' setLocalDescription complete');
    }


    function onSetSessionDescriptionError(error) {
        trace('Failed to set session description: ' + error.toString());
    }

function gotRemoteStream(e) {
    if (remoteVideo.srcObject !== e.stream) {
        remoteVideo.srcObject = e.stream;
        trace('pc received remote stream');
    }
}

    function onSetRemoteSuccess(pc) {
        trace(pc + ' setRemoteDescription complete');
        applyRemoteCandidates();
    }

    function applyRemoteCandidates(){
        var candidates = Cookies.getJSON('candidate');
        for(var candidate in candidates){
            addRemoteCandidate(candidates[candidate]);
        }
        Cookies.remove('candidate');
    }

    function addRemoteCandidate(candidate){
        pc.addIceCandidate(candidate).then(
            function() {
                onAddIceCandidateSuccess(pc);
            },
            function(err) {
                onAddIceCandidateError(pc, err);
            });
    }
</script>

<style scoped>
input[type="text"]:disabled, button:disabled {
    cursor: not-allowed! important; 
}

.videoRID {
    width: 100%;
}

.video {
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
}

.videoUID {
    position: relative;
    right: 0;
    top: 0;
    bottom: 0;
    padding: 0 !important;
}
</style>