import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'vue-flipper/dist/vue-flipper.css'
import Flipper from "vue-flipper";
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
// import echarts from 'echarts'

import App from './App'
// import store from './store'
// import router from './router'

Vue.use(ElementUI, { locale })
Vue.component('flipper', Flipper)

// Vue.prototype.$echarts = echarts

new Vue({
  el: '#app',
  // router,
  // store,
  render: h => h(App)
})
