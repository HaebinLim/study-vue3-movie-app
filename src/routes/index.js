import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About'

export default createRouter({
  // Hash 
  // https://google.com/#/search
  history: createWebHashHistory(),
  // Pages
  routes: [
    // https://google.com/
    {
      path: '/',
      component: Home,
    },
    {
      path: '/movie',
      component: Movie,
    },
    // https://google.com/about
    {
      path: '/about',
      component: About,
    }
  ]
})