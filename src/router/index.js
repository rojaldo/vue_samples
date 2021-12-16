import { createRouter, createWebHistory } from 'vue-router'
import Calculator from '../components/calculator/Calculator.vue'
// import Apod from '../components/apod/Apod.vue'

const routes = [
  { path: '/', redirect: '/beers' },
  {
    path: '/calculator',
    name: 'Calculator',
    component: Calculator
  },
  {
    path: '/heroes',
    name: 'Heroes',
    component: () => import(/* webpackChunkName: "about" */ '../components/heroes/HeroesContainer.vue')
  },
  {
    path: '/apod',
    name: 'Apod',
    component: () => import(/* webpackChunkName: "about" */ '../components/apod/Apod.vue')
  },
  {
    path: '/beers',
    name: 'Beers',
    component: () => import(/* webpackChunkName: "about" */ '../components/beers/Beers.vue')
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
