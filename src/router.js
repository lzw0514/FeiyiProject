import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Page from './views/baike'
import Page1 from './views/denglu'
import Home from './views/home'
import Register from './views/register.vue'
import NotFound from './views/not-found'
import './style.css'
import MapPage from './views/MapPage.vue'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Page',
      path: '/1',
      component: Page,
    },
    {
      name: 'Page1',
      path: '/page1',
      component: Page1,
    },
    {
      name: 'Register',
      path: '/register',
      component: Register,
    },
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name:'MapPage',
      path:'/map',
      component:MapPage
    },
    {
      name: '404 - Not Found',
      path: '**',
      component: NotFound,
      fallback: true,
    },
  ],
})
