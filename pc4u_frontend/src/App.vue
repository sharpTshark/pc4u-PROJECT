<template>
  <div id="nav">
    <!-- router links -->
    <router-link to="/">Home</router-link> | 

    <router-link to="/about">About</router-link> | 

    <div @click="openLogin()" class="nav-login-wrapper">
      <a>Login <i class="fas fa-user"></i></a>
    </div>

    <login v-if="loginPageVis" />

  </div>
  <router-view />
</template>

<script>
import login from '@/components/login.vue'

export default {
  name: 'app',
  components: {
    login
  },
  data() {
    return {
      loginPageVis: false,
    }
  },
  methods: {
    // * function for opening a login model 
    // ------------------------------------------------------------
    openLogin() {
      const body = document.getElementById('body')

      if (this.loginPageVis) {
        this.loginPageVis = false
        body.style.backgroundColor = 'white'

      } else {
        this.loginPageVis = true

        body.style.backgroundColor = 'rgba(0, 0, 0, 0.700)(0, 0, 0)'
      }

    }
  }
}
</script>

<style>

  #nav {
    display: flex;
  }

  .nav-login-wrapper {
    cursor: pointer;
  }

  .nav-login-wrapper a {
    margin: 0;
  }

</style>
