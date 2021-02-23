<template>
  <div id="nav">
    <!-- router links -->
    <router-link to="/">Home</router-link> | 

    <router-link to="/about">About</router-link> | 
  
    <router-link to="/login">Login</router-link> | 
    
    <router-link to="/register">Register</router-link>
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

    }
  },
  methods: {
    // * function 
    // ------------------------------------------------------------

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
