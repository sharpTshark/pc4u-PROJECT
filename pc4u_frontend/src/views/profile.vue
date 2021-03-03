<template>
    <div class="profile">
        <h1>profile</h1>
        {{userData}}
    </div>
</template>

<script>

import sep from '@/SEP.js'
import axios from 'axios'

export default {
    name: 'profile',
    data() {
        return {
            userData: {}
        }
    },
    mounted() {
        axios.get(sep+'/user/check/'+localStorage.getItem('jwt'))
        .then(res => {
            console.log(res);
            this.userData = res.data[0]
        })
        .catch(err => console.log(err))
    }

}
</script>

<style>

</style>