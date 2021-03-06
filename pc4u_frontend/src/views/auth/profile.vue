<template>
    <div class="profile">
        <div v-if="auth">
            <h1>profile</h1>
            {{userData}}
        </div>
        <div class="please-login" v-else>
            <h4>Please <button @click="goLogin()">login</button> to view this content</h4>
        </div>
    </div>
</template>

<script>

import sep from '@/SEP.js'
import axios from 'axios'

export default {
    name: 'profile',
    data() {
        return {
            userData: {},
            auth: false
        }
    },
    methods: {
        goLogin() {
            this.$router.push({ name: 'login', params: { redirect: 'profile' } })
        }
    },
    mounted() {
        axios.get(sep+'/user/profile/'+localStorage.getItem('jwt'))
        .then(res => {
            console.log(res);
            this.userData = res.data
            this.auth = res.data.valid
        })
        .catch(err => console.log(err))
    }
}
</script>

<style>

</style>




// ! server error