import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import FirstPage from '../views/FirstPage.vue'
import useVerify from '../hooks/useVerify'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'FirstPage',
      component: FirstPage
    },
    {
      path: '/user',
      name: 'HomePage',
      component: HomePage,
      beforeEnter:[useVerify(localStorage.getItem('token'))]
    },
  ]
})

export default router
