import Vue from 'vue'
import VueRouter from 'vue-router'
import CinemaRouter from './Cinema'
import MovieRouter from './Movie'
import MineRouter from './Mine'
Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    CinemaRouter,
    MovieRouter,
    MineRouter,
    {
      path:'/*',
      redirect:'/movie'
    }
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    // {
    //   path: '/cinema',
    //   name: 'Cinema',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/Cinema')
    // }
  ]
})
