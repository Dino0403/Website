import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Root',
    redirect: Home,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/businessitem/print',
    name: 'Print',
    component: () => import('../views/Print.vue')
  },
  {
    path: '/businessitem/system',
    name: 'SystemIntegration',
    component: () => import('../views/SystemIntegration.vue')
  },
  {
    path: '/businessitem/sunix',
    name: 'Sunix',
    component: () => import('../views/Sunix.vue')
  },
  {
    path: '/businessitem/jia',
    name: 'Jia',
    component: () => import('../views/Jia.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
]

const router = new VueRouter({
  routes
})

export default router
