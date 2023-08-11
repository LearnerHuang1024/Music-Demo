/*
 * @Date: 2023-08-08 17:14:47
 * @LastEditors: AaronHuang
 * @LastEditTime: 2023-08-09 11:07:46
 * @FilePath: \vite2-vue3-ts-electron-project\src\icons\index.ts
 */
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

// register globally
Vue.component('svg-icon', SvgIcon)

const req = (require as any).context('./svg', false, /\.svg$/)
const requireAll = (requireContext:any)  => requireContext.keys().map(requireContext)
requireAll(req)
