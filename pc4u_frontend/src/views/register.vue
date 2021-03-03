<template>
  <div class="register">
    <!-- login model -->
    <div class="register-model-wrapper">
      <div class="register-input" @keyup.enter="register()">
        <input v-model="email" type="text" name="email" placeholder="example@example.com">
        <input v-model="pass" type="password" name="pass" placeholder="password">
        <input v-model="pass2" type="password" name="pass2" placeholder="repeat-password">
        <a @click="register()" href="http://192.168.1.29:8080">Register</a>
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
  name: 'register',
  data() {
    return {
      email: '',
      pass: '',
      pass2: '',
      error: ''
    }
  },
  methods: {
    register() {
      if (this.pass == this.pass2) {
        axios.post(sep+'/user/register', { email: this.email, pass: this.pass })
        .then(res => {
          if(res.data.succes) {
            this.$router.push({ name: 'login' })
          } else this.error = res.data.err
        })
        .catch(err => console.log(err))

      } else this.error = 'passwords are not the same'
    }
  }
}
</script>

<style scoped>

  .register-model-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background: red;
}

</style>