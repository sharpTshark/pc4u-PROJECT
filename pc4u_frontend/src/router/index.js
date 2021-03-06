import { createRouter, createWebHistory } from 'vue-router'

// normall routes
import Home from '../views/Home.vue'
import login from '../views/login.vue'
import register from '../views/register.vue'
import About from '../views/About.vue'
import contact from '../views/contact.vue'
import productsPage from '../views/productPage.vue'

// auth routes
import profile from '../views/auth/profile.vue'
import admin from '../views/auth/admin.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/login',
		name: 'login',
		component: login,
	},
	{
		path: '/login/:redirect?',
		name: 'login',
		component: login,
	},
	{
		path: '/register',
		name: 'register',
		component: register,
	},
	{
		path: '/profile',
		name: 'profile',
		component: profile,
	},
	{
		path: '/admin',
		name: 'admin',
		component: admin,
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
