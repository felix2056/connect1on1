<template>
<div class="notifications">
    <span class="nk-cart-toggle" style="position: relative;font-size: 18px;top: 5px;">
        <!-- <i class="fas fa-bell" style="font-size: 14px"></i> -->
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="far" data-icon="bell" class="svg-inline--fa fa-bell fa-w-14" role="img" viewBox="0 0 448 512"><path fill="currentColor" d="M439.39 362.29c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71zM67.53 368c21.22-27.97 44.42-74.33 44.53-159.42 0-.2-.06-.38-.06-.58 0-61.86 50.14-112 112-112s112 50.14 112 112c0 .2-.06.38-.06.58.11 85.1 23.31 131.46 44.53 159.42H67.53zM224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64z"/></svg>
                  
        <span v-if="unreadNotifications != null && unreadNotifications.length != 0" style="position: absolute; top: -7px; right: -12px; font-size: 10px; padding: 2px 5px; background: rgb(221, 75, 57) none repeat scroll 0% 0% !important; color: rgb(255, 255, 255);border-radius: 50%;" class="label label-danger" id="msgcount">{{ unreadNotifications.length > 10 ? '9+' : unreadNotifications.length }}</span>
    </span>

    <div class="nk-cart-dropdown" style="width: 300px; height: 250px; overflow: auto;">
        <div class="text-center">
            <h5 class="nk-username">Notifications</h5>
            
            <hr style="background: white" />
            
            <ul class="nk-widget-categories">
                <h5 class="mt-80 text-center" v-if="notifications" v-show="!notifications.length">No New Notifications!</h5>

                <li v-if="notifications && notifications.length != 0" v-for="notification in notifications" :key="notification.id" class="text-left">
                    <span style="float: left; margin-top: 14px">
                        <!--<i :class="notification.read_at != null ?  notification.data.icon + ' read' : notification.data.icon + ' unread'" style="font-size: 15px;"></i>-->
                        {{ notification.data.icon }}
                    </span>

                    <a @click.prevent="markAsRead(notification)" :href="notification.data.link" :class="notification.read_at != null ? 'read' : 'unread'">{{ notification.data.message }}</a>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['user'],

    data() {
        return{
            notifications: []
        }
    },
    
    computed: {
        unreadNotifications() {
            if (!this.notifications && !this.notifications.length) {
                return null;
            }
            return this.notifications.filter(notification => {
                return notification.read_at == null;
            })
        }
    },

    created() {
        // this.getNotifications().then(() => {
        //     this.setNotificationInteval();
        // })
    },

    methods: {
        async setNotificationInteval({ commit, dispatch }) {
            setInterval(function() {
                this.getNotifications()
            }, 300000);
        },
        
        async getNotifications() {
            let url = `/notifications`;
            
            await axios.get(url)
            .then((response) => {
                this.notifications = response.data.notifications
            })
            .catch(err => {
                console.log(err.response)
            });
        },

        async markAsRead(notification) {
            const id = notification.id
            const url = `/markAsRead`;

            notification.read_at = 'now';
            axios.post(url, {id})
            .then(() =>{
                window.location.href = notification.data.link;
            })
        },
    }
}
</script>