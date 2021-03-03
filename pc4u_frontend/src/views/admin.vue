<template>
    <div class="admin">
        <div class="add-product">
            <input v-model="productInput.price" placeholder="Product Price" type="number" name="productPrice" id="productPrice">
            <input v-model="productInput.name" placeholder="Product Name" type="text" name="productName" id="productName">
            <textarea v-model="productInput.desc" placeholder="Product description" name="productDesc" id="productDesc"></textarea>
            <input type="file" name="productImg" id="productImg">
            <select name="productCat" id="productCat">
                <option value="none">category</option>
                <option value="laptop">laptop</option>
                <option value="computer">computer</option>
            </select>
            <button>add</button>
        </div>
        <ul>
            <li v-for="user in users" :key="user">
                {{user}}
            </li>
        </ul>
    </div>
</template>

<script>

import sep from '@/SEP.js'
import axios from 'axios'

export default {
    name: 'admin',
    data() {
        return {
            users: [],
            productInput: {
                price: '',
                name: '',
                desc: '',
                image: '',
                cat: ''
            }
        }
    },
    mounted() {
        axios.get(sep+'/user/admin/'+localStorage.getItem('jwt'))
        .then(res => {
            this.users = res.data
        })
        .catch(err => console.log(err))
    }
}
</script>

<style>

</style>