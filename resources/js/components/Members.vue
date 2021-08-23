<template>
  <div class="row mb-5 sm-mb-3">
    <member v-for="user in users" :key="user.id" :user="user" :authuser="authuser" @select-user="selectUser" @select-user-video="selectUserVideo"></member>
  </div>
</template>

<script>
import member from './Member';

export default {
  components: {
    member
  },

  data() {
    return {
      authuser: null,
      users: [{},{},{},{},{},{},{},{}],
    };
  },

  async created() {
    const { data } = await this.getUsers(); 
    
    this.users = data.users;
    this.authuser = data.authuser;

  },


  methods: {
    //get users
    async getUsers() {
      let url = `/get-members`;

      return axios.get(url)
      
      // return axios.get(url)
      // .then(response => {
      //   this.authuser = response.data.authuser;
      //   this.users = response.data.users;

      //   this.loading = false;
      // });
    },

    async selectUser(user) {
      if (this.authuser == null) {
        return window.location.href = '/login';
      }

      this.$store.dispatch('addSelectedUser', {user: user});
    },

    selectUserVideo(user) {
      if (this.authuser == null) {
        return window.location.href = '/login';
      }

      user.video = true;
      this.$store.dispatch('addSelectedUser', {user: user});
    }
  }
};
</script>

<style scoped>
@import url('./css/modal.css');

dl dt {
    font-family: 'Montserrat', sans-serif;
}
</style>