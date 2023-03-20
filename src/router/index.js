import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Landing from '../views/Landing.vue'
import Quotes from '../views/Quotes.vue'
import DetailLink from '../views/DetailLink.vue'

const routes = [
  {
    path: '/',
    name: 'Nglink',
    component: Home
  },
  {
    path: '/quotes',
    name: 'quotes',
    component: Quotes
  },
  {
    path: '/nglink/:uuid',
    name: 'detaillink',
    component: DetailLink
  },
]

const router = createRouter({
  history:createWebHistory(),
  routes
})

export default router
