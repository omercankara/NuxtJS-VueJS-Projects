import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/homePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/newPerson',
    name: 'newBookMark',
    component: () => import('../views/newBookMark.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
