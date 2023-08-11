/*
 * @Date: 2023-07-11 15:12:53
 * @LastEditors: AaronHuang
 * @LastEditTime: 2023-08-09 11:09:29
 * @FilePath: \vite2-vue3-ts-electron-project\src\main.ts
 */
import Vue from 'vue'

import '@/style/style.scss'

import App from './App.vue'
import store from './store'
import router from './router'
import SvgIcon from '@/components/SvgIcon'// svg component

// register globally
Vue.component('svg-icon', SvgIcon)
// createApp(App).mount('#app')
export default new Vue({
  el:'#app',
  router,
  store,
  render:(h:any)=>h(App)
})
