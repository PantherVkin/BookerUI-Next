import { createRouter, createWebHistory } from 'vue-router'
import Guide from './views/Guide.vue'
import Component from './views/Component.vue'

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/guide',
      name: 'guide',
      component: Guide
    },
    {
      path: '/component',
      name: 'component',
      component: Component
    }
  ]
})

export default router