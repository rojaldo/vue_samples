import { createRouter, createWebHistory } from 'vue-router'
import Calculator from '../components/calculator/Calculator.vue'
// import Apod from '../components/apod/Apod.vue'

const routes = [
  { path: '/', redirect: '/apod' },
  {
    path: '/calculator',
    name: 'Calculator',
    component: Calculator
  },
  {
    path: '/heroes',
    name: 'Heroes',
    component: () => import(/* webpackChunkName: "about" */ '../components/heroes/Heroes.vue')
  },
  {
    path: '/apod',
    name: 'Apod',
    component: () => import(/* webpackChunkName: "about" */ '../components/apod/Apod.vue')
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () =>
      import(
        /* webpackChunkName: "NotPageFound" */ "../components/apod/Apod.vue"
      ),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
