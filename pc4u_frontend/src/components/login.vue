<template>
  <div class="login">
    <!-- login model -->
    <div v-if="loginPageVis" class="login-model-wrapper">
      <input type="text" name="email" placeholder="example@example.com">
      <input type="password" name="pass" placeholder="password">
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>