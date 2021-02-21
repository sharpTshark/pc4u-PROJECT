<template>
  <div class="login">
    <!-- login model -->
    <div class="login-model-wrapper">
      <div class="login-input">
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
      error: 'ssss'
    }
  },
  methods: {
    login() {
      axios.post(sep+'/login', { email: this.email, pass: this.pass })
      .then(res => {
        if(!res.data.err) {
          localStorage.setItem('jwt', res.data.jwt)
        } else {
          this.err = res.data.err
        }

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