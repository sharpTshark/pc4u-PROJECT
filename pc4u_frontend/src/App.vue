<template>
  <div id="nav">
    <!-- router links -->
    <!-- normall routes -->
    <div>
      <a>
        <router-link to="/">Home</router-link>
      </a>

      <a>
        <router-link to="/about">About</router-link>
      </a>
      
      <a>
        <router-link to="/contact">contact</router-link>
      </a>
    </div>

    <!-- logged in routes -->
    <div v-if="loggedIn">
      <a>
        {{email}}
      </a>
      <a>
        <router-link to="/profile">profile</router-link>
      </a>
      <a @click="logout()" href="http://192.168.1.29:8080">
        logout
      </a>
    </div>

    <!-- not logged in routes -->
    <div v-else>
      <a>
        <router-link to="/login">Login</router-link>
      </a>
      
      <a>
        <router-link to="/register">Register</router-link>
      </a>
    </div>
  

  </div>
  <router-view />
</template>

<script>

// import sep from '@/SEP.js'
// import axios from 'axios'

export default {
  name: 'app',
  data() {
    return {
      loggedIn: false,
      email: ''
    }
  },
  mounted() {

  },
  methods: {
    // * function 
    // ------------------------------------------------------------
    logout() {
      localStorage.clear('jwt')
      this.$router.push({ name: 'Home' })
    }
  },
  watch: {
    $route() {
      const jwt = localStorage.getItem('jwt')
      const email = localStorage.getItem('email')
      if (jwt && email) this.loggedIn = true, this.email = email
      else this.loggedIn = false, this.email = ''
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
