<template>
<div class="video-call">
    <div id="videos">
        <video id="mini-video" autoplay="" playsinline="" muted=""></video>
        <video id="remote-video" autoplay="" playsinline=""></video>
        <video id="local-video" autoplay="" playsinline="" muted="" class="active"></video>
    </div>

    <div id="room-selection" class="hidden">
        <h1>AppRTC</h1>
        <p id="instructions">Please enter a room name.</p>
        <div>
            <div id="room-id-input-div">
            <input type="text" id="room-id-input" autofocus="">
            <label class="error-label hidden" for="room-id-input" id="room-id-input-label">Room name must be 5 or more characters and include only letters, numbers, underscore and hyphen.</label>
            </div>
            <div id="room-id-input-buttons">
            <button id="join-button">JOIN</button>
            <button id="random-button">RANDOM</button>
            </div>
        </div>
        
        <div id="recent-rooms">
            <p>Recently used rooms:</p>
            <ul id="recent-rooms-list"><li><a href="https://appr.tc/r/877017877">877017877</a></li><li><a href="https://appr.tc/r/759464763">759464763</a></li><li><a href="https://appr.tc/r/676431743">676431743</a></li></ul>
        </div>
    </div>
    
    <div id="confirm-join-div" class="hidden">
        <div>Ready to join<span id="confirm-join-room-span"></span>?</div>
        <button id="confirm-join-button">JOIN</button>
    </div>
    
    
    <footer>
        <div id="sharing-div" class="active">
            <div id="room-link">Waiting for someone to join this room: <a id="room-link-href" href="https://appr.tc/r/288627274" target="_blank">https://appr.tc/r/288627274</a></div>
        </div>

        <div id="status-div"></div>
        
        <div id="rejoin-div" class="hidden"><span>You have left the call.</span> <button id="rejoin-button">REJOIN</button><button id="new-room-button">NEW ROOM</button></div>
    </footer>
    
    <div id="icons" class="">
        <svg id="mute-audio" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="-10 -10 68 68">
            <title>title</title>
            <circle cx="24" cy="24" r="34">
                <title>Mute audio</title>
            </circle>
            <path class="on" transform="scale(0.6), translate(17,18)" d="M38 22h-3.4c0 1.49-.31 2.87-.87 4.1l2.46 2.46C37.33 26.61 38 24.38 38 22zm-8.03.33c0-.11.03-.22.03-.33V10c0-3.32-2.69-6-6-6s-6 2.68-6 6v.37l11.97 11.96zM8.55 6L6 8.55l12.02 12.02v1.44c0 3.31 2.67 6 5.98 6 .45 0 .88-.06 1.3-.15l3.32 3.32c-1.43.66-3 1.03-4.62 1.03-5.52 0-10.6-4.2-10.6-10.2H10c0 6.83 5.44 12.47 12 13.44V42h4v-6.56c1.81-.27 3.53-.9 5.08-1.81L39.45 42 42 39.46 8.55 6z" fill="white"></path>
            <path class="off" transform="scale(0.6), translate(17,18)" d="M24 28c3.31 0 5.98-2.69 5.98-6L30 10c0-3.32-2.68-6-6-6-3.31 0-6 2.68-6 6v12c0 3.31 2.69 6 6 6zm10.6-6c0 6-5.07 10.2-10.6 10.2-5.52 0-10.6-4.2-10.6-10.2H10c0 6.83 5.44 12.47 12 13.44V42h4v-6.56c6.56-.97 12-6.61 12-13.44h-3.4z" fill="white"></path>
        </svg>
    
        <svg id="mute-video" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="-10 -10 68 68" class="hidden">
            <circle cx="24" cy="24" r="34">
                <title>Mute video</title>
            </circle>
            <path class="on" transform="scale(0.6), translate(17,16)" d="M40 8H15.64l8 8H28v4.36l1.13 1.13L36 16v12.36l7.97 7.97L44 36V12c0-2.21-1.79-4-4-4zM4.55 2L2 4.55l4.01 4.01C4.81 9.24 4 10.52 4 12v24c0 2.21 1.79 4 4 4h29.45l4 4L44 41.46 4.55 2zM12 16h1.45L28 30.55V32H12V16z" fill="white"></path>
            <path class="off" transform="scale(0.6), translate(17,16)" d="M40 8H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm-4 24l-8-6.4V32H12V16h16v6.4l8-6.4v16z" fill="white"></path>
        </svg>
    
        <svg id="fullscreen" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="-10 -10 68 68">
            <circle cx="24" cy="24" r="34">
                <title>Enter fullscreen</title>
            </circle>
            <path class="on" transform="scale(0.8), translate(7,6)" d="M10 32h6v6h4V28H10v4zm6-16h-6v4h10V10h-4v6zm12 22h4v-6h6v-4H28v10zm4-22v-6h-4v10h10v-4h-6z" fill="white"></path>
            <path class="off" transform="scale(0.8), translate(7,6)" d="M14 28h-4v10h10v-4h-6v-6zm-4-8h4v-6h6v-4H10v10zm24 14h-6v4h10V28h-4v6zm-6-24v4h6v6h4V10H28z" fill="white"></path>
        </svg>
    
        <svg id="hangup" class="hidden" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="-10 -10 68 68">
            <circle cx="24" cy="24" r="34">
                <title>Hangup</title>
            </circle>
            <path transform="scale(0.7), translate(11,10)" d="M24 18c-3.21 0-6.3.5-9.2 1.44v6.21c0 .79-.46 1.47-1.12 1.8-1.95.98-3.74 2.23-5.33 3.7-.36.35-.85.57-1.4.57-.55 0-1.05-.22-1.41-.59L.59 26.18c-.37-.37-.59-.87-.59-1.42 0-.55.22-1.05.59-1.42C6.68 17.55 14.93 14 24 14s17.32 3.55 23.41 9.34c.37.36.59.87.59 1.42 0 .55-.22 1.05-.59 1.41l-4.95 4.95c-.36.36-.86.59-1.41.59-.54 0-1.04-.22-1.4-.57-1.59-1.47-3.38-2.72-5.33-3.7-.66-.33-1.12-1.01-1.12-1.8v-6.21C30.3 18.5 27.21 18 24 18z" fill="white"></path>
        </svg>
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
            configuration: {iceServers: [{urls: 'stun:stun.l.google.com:19302'}]},

            // Peer connection
            pc: undefined,

            location: null,
            room: null,
            drone: null,

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

    async mounted() {
        this.initializeVideo(this.conversation);
    },
    
    methods: {
        async initializeVideo() {
            if (this.location == null) {
                this.location = Math.floor(Math.random() * 0xFFFFFF).toString(16);
            }
            
            const roomHash = this.location.hash.substring(1);
            // Room name needs to be prefixed with 'observable-'
            const roomName = 'observable-' + roomHash;
                
            // TODO: Replace with your own channel ID
            this.drone = new ScaleDrone('2xmbUiTsqTzukyf7');
            
            this.drone.on('open', error => {
                if (error) {
                    return log(error);
                }

                this.room = this.drone.subscribe(roomName);
                room.on('open', error => {
                    if (error) {
                        log(error);
                    }
                });
                
                // We're connected to the room and received an array of 'members'
                // connected to the room (including us). Signaling server is ready.
                room.on('members', members => {
                    log('MEMBERS', members);
                    // If we are the second user to connect to the room we will be creating the offer
                    this.isOfferer = members.length === 2;
                    startWebRTC(isOfferer);
                });
            });
        },
        
        onSuccess() {},
        
        onError(error) {
            log(error);
        },
        
        // Send signaling data via Scaledrone
        sendMessage(message) {
            this.drone.publish({
                room: roomName,
                message
            });
        }
    }
};
</script>

<style>

</style>