/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import { setup } from "axios-cache-adapter";
import VueAxios from "vue-axios";
import axios from "axios";

Vue.use(VueAxios, axios);
axios.defaults.baseURL = "/api";
axios.defaults.headers.common = {
    "X-Requested-With": "XMLHttpRequest",
    "Accept": "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
    "X-CSRF-TOKEN": document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content")
};

// Create `axios` instance with pre-configured `axios-cache-adapter` attached to it
const api = setup({
    // `axios-cache-adapter` options
    cache: {
        maxAge: 15 * 60 * 1000
    }
});

window.api = api;

import Swal from "sweetalert2";
window.Swal = Swal;

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000
});

window.Toast = Toast;

import VueChatScroll from 'vue-chat-scroll';
import VueTimeago from 'vue-timeago';

Vue.use(VueChatScroll);

Vue.use(VueTimeago, {
    name: 'timeago', // component name, `timeago` by default
    locale: 'en-US',
    /*locales: {
        'en-US': require('vue-timeago/locales/en-US.json')
    }*/
    
})

//date formats
import moment from "moment";
Vue.filter("myDate", function(created) {
    return moment(created).format("MMMM Do Y");
});

Vue.filter("momentsAgoDate", function(created) {
    return moment(created).fromNow();
});

Vue.filter("momentsToNowDate", function(created) {
    return moment(created).toNow();
});

Vue.filter("dateToSeconds", function(created) {
    return moment(created).format('X');
});

//countdown
Vue.filter('two_digits', function (value) {
    if(value.toString().length <= 1)
    {
        return "0"+value.toString();
    }
    return value.toString();
});

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

//Vue.component('chat', () => import('./components/Chat'));

Vue.component('dashboard', () => import('./components/dashboard/Dashboard.vue'));


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
*/

import members from './components/Members';

import conversations from './components/chat/Conversations';
import popup from './components/chat/Popup';

import chat from './components/Chat';
import videocall from './components/VideoCall';

import { store } from "./store.js";

const app = new Vue({
    el: '#app',
    store,

    components: {
        members,
        conversations,
        popup,
        chat,
        videocall
    },

    computed: {
        selectedUsers () {
          return this.$store.getters.getSelectedUsers
        }
    },

    mounted() {
        Echo.private('chat')
        .listen('MessageSent', (e) => {
            Toast.fire({
                type: "success",
                title: "You got a new message from " + e.message.user.name
            });

            this.$store.dispatch('addSelectedUser', {user: e.message.user});
        });
    },

    methods: {
        removeSelectedUser(e) {
            this.$store.commit('REMOVE_USER', e);
        }
    }
});

import notifications from './components/Notifications';

const notification = new Vue({
    components:{
        notifications
    },

    data() {
        return {
            editing: false,
            updating: false
        }
    },

    el: '#notifications'
});
