<template>
    <div class="admin">
        <div class="auth" v-if="auth">
            <div class="add-product" @keyup.enter="addProduct()">
                <input v-model="productInput.price" placeholder="Product Price" type="number" name="productPrice" id="productPrice">
                <input v-model="productInput.name" placeholder="Product Name" type="text" name="productName" id="productName">
                <textarea v-model="productInput.desc" placeholder="Product description" name="productDesc" id="productDesc"></textarea>
                <input type="file" name="productImg" id="productImg">
                <select v-model="productInput.desc" name="productCat" id="productCat">
                    <option value="none">category</option>
                    <option value="laptop">laptop</option>
                    <option value="computer">computer</option>
                </select>
                <button @click="addProduct()">add</button>
            </div>
            <ul class="users-wrapper">
                <li v-for="user in users" :key="user">
                    {{user}}
                </li>
            </ul>
            <ul class="products-wrapper">
                <li v-for="prod in prods" :key="prod">
                    {{prod}}
                </li>
            </ul>
        </div>
        <div class="please-login" v-else>
            <h4>Please <button @click="goLogin()">login</button> to view this content</h4>
        </div>
        <div class="err">
            {{err}}
        </div>
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
            prods: [],
            productInput: {
                price: '',
                name: '',
                desc: '',
                image: '',
                cat: ''
            },
            auth: false,
            err: ''
        }
    },
    methods: {
        addProduct() {
            let image = document.getElementById('productImg')
            let cat = document.getElementById('productCat')

            console.log(this.price, this.name, this.desc, image, cat);
        },
        goLogin() {
            this.$router.push({ name: 'login', params: { redirect: 'admin' } })
        }
    },
    mounted() {
        axios.get(sep+'/user/admin/'+localStorage.getItem('jwt'))
        .then(res => {
            console.log(res);
            
            // if token is valid
            if (res.data.valid) {
                // if there is not an error and user is admin
                if (res.data.admin) {
                    this.auth = true
                    this.users = res.data.users
                    this.prods = res.data.products
                } else this.err = 'you are not a admin'
            }
        })
        .catch(err => console.log(err))
    }
}
</script>

<style>

</style>