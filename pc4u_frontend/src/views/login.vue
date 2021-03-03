<template>
  <div class="login">
    <!-- login model -->
    <div class="login-model-wrapper">
      <div class="login-input" @keyup.enter="login()">
        <input v-model="email" type="text" name="email" placeholder="example@example.com">
        <input v-model="pass" type="password" name="pass" placeholder="password">
        <button @click="login()">Login</button>
      </div>
      <div class="err-message">
        {{error}}
      </div>
    </div>

  </div>
</template>

<script>

import sep from '@/SEP.js'
import axios from 'axios'

export default {
  name: 'login',
  data() {
    return {
      email: '',
      pass: '',
      error: ''
    }
  },
  methods: {
    login() {
      axios.post(sep+'/user/login', { email: this.email, pass: this.pass })
      .then(res => {
        console.log(res);
        if(res.data.jwt) {
          localStorage.setItem('jwt', res.data.jwt)
          localStorage.setItem('email', res.data.email)
          this.$router.push({ name: 'Home' })
        } else this.error = res.data.err
      })
      .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>

  .login-model-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background: red;
}

</style>