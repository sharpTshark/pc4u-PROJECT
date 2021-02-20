import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import contact from '../views/contact.vue'
import productsPage from '../views/productPage.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		component: About,
	},
	{
		path: '/contact',
		name: 'contact',
		component: contact,
	},
	{
		path: '/products',
		name: 'pruducts',
		component: productsPage,
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
