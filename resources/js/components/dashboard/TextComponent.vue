<template>
<span>
  <div v-show="videoCalling == false" id="chatbody" class="chatbody" :class="{ 'no-message': noChatSelected }" style="overflow: auto; outline: currentcolor none medium;" tabindex="1"> <!-- .no-message -->
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
    </span>




</template>

<script>
export default {

}
</script>

<style>

</style>