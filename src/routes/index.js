import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import About from './about'

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
        // https://google.com/about
        {
            path: '/about',
            component: About,
        }
    ]
})