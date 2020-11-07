import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import piano from '../views/piano.vue'
import drums from '../views/drums.vue'
import violin from '../views/violin.vue'
import contact from '../views/contact.vue'
import login from '../views/login.vue'
import list from '../views/studentList.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
	{
		path: '/piano',
		name: 'piano',
		component: piano
	},
	{
		path: '/drums',
		name: 'drums',
		component: drums
	},
	{
		path: '/violin',
		name: 'violin',
		component: violin
	},
	{
		path: '/contact',
		name: 'contact',
		component: contact

	},
	{
		path: '/login',
		name: 'login',
		component:login
	},
	{
		path: '/studentList',
		name: 'list',
		component: list
	},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
