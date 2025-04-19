import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Page from './views/baike'
import Page1 from './views/denglu'
import Home from './views/home'
import Register from './views/register.vue'
import NotFound from './views/not-found'
import './style.css'
import HeritageDetail from './views/detail.vue'
import AIPage from './views/ai-explore.vue'

import Knowledge from './views/knowledge.vue'
import MyProfile from './views/myhome.vue'
import Rank from './views/rank.vue'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Page',
      path: '/encyclopedia',
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
      name:'Knowledge',
      path:'/knowledge',
      component:Knowledge
    },
    {
      name:'AIPage',
      path:'/ai-explore',
      component:AIPage
    },
    {
    name: 'HeritageDetail', // ✅ 新增非遗详情页面路由
    path: '/heritage/:id',
    component: HeritageDetail,
    },

    {
      name:'Profile',
      path:'/profile',
      component:MyProfile,
    },
    {
      name: 'Ranking',
      path: '/rank',
      component: Rank,
    },
    {
      name: '404 - Not Found',
      path: '**',
      component: NotFound,
      fallback: true,
    },

  ],
})
