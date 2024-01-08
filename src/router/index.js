import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/details/:id',
      name: 'details',
      component: () => import('../views/DetailsView.vue'),
      prosp: true
    }
  ]
})

export default router
