import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import FirstPage from '../views/FirstPage.vue'
import useVerify from '../hooks/useVerify'
import useVerifyExistToken from '../hooks/useVerifyExistToken'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'FirstPage',
      component: FirstPage,
      beforeEnter: (to, from, next) => {
        useVerifyExistToken()
          .then(result => {
            if (result) {
              next();
            } else {
              next('/user');
            }
          })
          .catch(()=> {
            localStorage.clear();
            next('/');
          });
      }
    },
    {
      path: '/user',
      name: 'HomePage',
      component: HomePage,
      beforeEnter: (to, from, next) => {
        useVerify(localStorage.getItem('token'))
          .then(result => {
            if (result) {
              next();
            } else {
              next('/');
            }
          })
          .catch(()=> {
            next('/');
          });
      }
    },
  ]
})

export default router
