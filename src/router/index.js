import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '工作空间',
      component: () => import('../views/work-space/index.vue')
    }
  ]
})

export default router
