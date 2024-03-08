import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Imagenes from '../views/Imagenes.vue'
import Clientes from '../views/Clientes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/imagenes/',
    name: 'imagenes',
    component: Imagenes
  },
  {
    path: '/clientes',
    name: 'clientes',
    component: Clientes
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
