<template>
	<div class="home">
		<h1>This is an home page</h1>
	</div>
</template>

<script>

import sep from '@/SEP.js'
import axios from 'axios'

export default {
	name: 'Home',
	data() {
		return {
			products: []
		}
	},
	mounted() {
		axios.get(sep+'/shop/products')
		.then(res => {
			console.log(res);
		})
		.catch(err => console.log(err))
	}
}
</script>

<style scoped></style>
