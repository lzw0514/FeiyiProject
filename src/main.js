
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import LottieVuePlayer from '@lottiefiles/vue-lottie-player'

// 1. 引入 Element UI

import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
// 2. 使用 Element UI
Vue.use(ElementUI)

Vue.use(LottieVuePlayer)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')