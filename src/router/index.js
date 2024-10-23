import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomePage.vue')
    },
    {
      path: '/budget',
      name: 'budget',
      component: () => import('@/views/BudgetCalculation.vue'),
      props: true
    }
  ]
})

export default router
