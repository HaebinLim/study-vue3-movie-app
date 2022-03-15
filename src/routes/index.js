import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About'
import NotFound from './NotFound'

export default createRouter({
  // Hash 
  // https://google.com/#/search
  history: createWebHashHistory(),
  // 페이지 이동시 스크롤 최상단
  scrollBehavior() {
    return { top: 0 }
  },
  // Pages
  routes: [
    // https://google.com/
    {
      path: '/',
      component: Home,
    },
    {
      path: '/movie/:id',
      component: Movie,
    },
    // https://google.com/about
    {
      path: '/about',
      component: About,
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    }
  ]
})