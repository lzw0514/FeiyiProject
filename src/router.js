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
// Vue.use(Meta)

const router = new Router({
  mode: 'history',
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home,
      meta: { title: '非遗网 - 首页' }
    },
    {
      name: 'Page',
      path: '/encyclopedia',
      component: Page,
      meta: { title: '非遗百科 - 非遗网' }
    },
    {
      name: 'Page1',
      path: '/page1',
      component: Page1,
      meta: { title: '登录 - 非遗网' }
    },
    {
      name: 'Register',
      path: '/register',
      component: Register,
      meta: { title: '注册 - 非遗网' }
    },
    {
      name: 'Knowledge',
      path: '/knowledge',
      component: Knowledge,
      meta: { title: '非遗知识 - 非遗网' }
    },
    {
      name: 'AIPage',
      path: '/ai-explore',
      component: AIPage,
      meta: { title: 'AI探索 - 非遗网' }
    },
    {
      name: 'HeritageDetail',
      path: '/heritage/:id',
      component: HeritageDetail,
      meta: { title: '非遗详情 - 非遗网' }
    },
    {
      name: 'Profile',
      path: '/profile',
      component: MyProfile,
      meta: { title: '我的主页 - 非遗网' }
    },
    {
      name: 'Ranking',
      path: '/rank',
      component: Rank,
      meta: { title: '排行榜 - 非遗网' }
    },
    {
      name: '404 - Not Found',
      path: '**',
      component: NotFound,
      meta: { title: '页面未找到 - 非遗网' }
    }
  ]
})

// ✅ 全局前置守卫：根据路由元信息动态设置标题
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '非遗网'
  next()
})

export default router