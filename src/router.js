import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Page from './views/page'
import Page1 from './views/page1'
import Home from './views/home'
import NotFound from './views/not-found'
import './style.css'

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
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name: '404 - Not Found',
      path: '**',
      component: NotFound,
      fallback: true,
    },
  ],
})
