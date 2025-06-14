import { createRouter, createWebHistory } from 'vue-router'
import Main from '../components/Main/Main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
  ],
})

export default router
