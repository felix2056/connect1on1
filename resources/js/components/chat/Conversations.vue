<template>
<span>
    <div class="online-side-nav" :class="{ 'hide-user': hide }">
        <span v-if="conversations.length !== 0" class="nav-btn r-design" @click="hide = !hide">
            <i class="fa fa-arrow-left" style="background: #ffbc05;"></i>
        </span>
        <div v-if="conversations.length !== 0" id="chat-sidebar" style="padding-top: 80px;">
            <div v-for="conversation in conversations" :key="conversation.id" class="sidebar-user-box" id="100" @click.prevent="addConversation(conversation.person)">
                <img :src="conversation.person.photo_url" :alt="conversation.person.name">
                <i class="flaticon-circular-shape-silhouette"></i>
                <span class="slider-username">{{ conversation.person.name }}</span>
            </div> 	 
        </div>

        <!-- <button type="button" class="opener-header btn btn-success" @click="hide = !hide" style="border: 0">
            <span class="fa fa-users"></span>
            <span class="label">Chat</span>
            <span class="count contactsCount">( 10 )</span>
        </button> -->
    </div>

</span>
</template>

<script>
import Popup from './Popup';

export default {
    props: ['user'],

    components: { Popup },

    data() {
        return {
            loading: false,
            hide: true,
            conversations: []
        }
    },

    created() {
       this.getConversations()
    },

    methods: {
        async getConversations() {
            if (this.user == null) {
                return window.location.href = '/login';
            }

            this.loading = true;

            let url = `/get-conversations`

            axios.get(url)
            .then((response) => {
                this.conversations = response.data.conversations
                this.loading = false;
            })
        },

        async addConversation(user) {
            if (this.user == null) {
                return window.location.href = '/login';
            }

            user.chatwidth = 'right: 270px';

            this.$store.dispatch('addSelectedUser', {user: user});
        }
    }

}
</script>

<style>
@import './style.css';
@import './responsive.css';

.opener-header {
    position: absolute;
    width: 25vh;
    height: 60px;
    line-height: 54px;
    transform: translateX(-100%);
    left: -12px;
    bottom: 20px;
    text-align: center;
    background-color: #2b2b2b;
    box-shadow: 0 0 4px rgba(0,0,0,0.14), 0 4px 8px rgba(0,0,0,0.28);
    color: white;
    font-weight: bold;
    text-decoration: none;
    transition: 200ms;
}

.opener-header .label {
    display: inline;
    color: #fff !important;
    font-size: 16px !important;
}

.main-chat {
    position: fixed;
    /* z-index: 69;
    width: 100%; */
    top: auto;
    bottom: 0;
    right: 0;
    left: auto;
    -webkit-backface-visibility: hidden;
    transform: translateZ(0);
    pointer-events: auto;
}
</style>