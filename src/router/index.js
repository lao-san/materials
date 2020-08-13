import Vue from 'vue'
import VueRouter from 'vue-router'
import Details from "../views/details"
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: () => import('../views/home')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/details/:id',
    name: 'box',
    component: Details
  }
]

const router = new VueRouter({
  routes
})

export default router