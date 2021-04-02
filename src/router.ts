import { createRouter, createWebHistory } from 'vue-router'
import Guide from './layout/Guide.vue'
import Component from './layout/Component.vue'
import Resource from './layout/Resource.vue'

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/guide',
      name: 'guide',
      component: Guide,
      children: [
        {
          path: '/guide/design',
          name: 'design',
          component: () =>  import('./page/guide/Design.vue'),
        },
        {
          path: '/guide/nav',
          name: 'nav',
          component: () => import('./page/guide/Nav.vue'),
        },
      ]
    },
    {
      path: '/component',
      name: 'component',
      component: Component,
      children: [
        {
          path: '/component/changelog',
          name: 'changelog',
          component: () =>  import('./page/component/Changelog.vue'),
        },
        {
          path: '/component/installation',
          name: 'installation',
          component: () => import('./page/component/Installation.vue'),
        },
        {
          path: '/component/quickstart',
          name: 'quickstart',
          component: () => import('./page/component/Quickstart.vue'),
        },
      ]

    },
    {
      path: '/resource',
      name: 'resource',
      component: Resource
    }
  ]
})

export default router