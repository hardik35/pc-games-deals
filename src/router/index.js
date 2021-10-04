import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/deals',
    component: () => import(/* webpackChunkName: "dealsPage" */ '@/views/Deals.vue')
  },
  {
    path: '/',
    component: () => import(/* webpackChunkName: "dealsPage" */ '@/views/Deals.vue')
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "dealsPage" */ '@/views/Deals.vue')
  },
  {
    path: '/dealDetails/:gameId/:dealId',
    name: 'dealDetails',
    component: () => import(/* webpackChunkName: "dealsPage" */ '@/views/DealDetails.vue')
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
