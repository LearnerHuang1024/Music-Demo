/*
 * @Date: 2023-08-08 17:20:07
 * @LastEditors: AaronHuang
 * @LastEditTime: 2023-08-10 16:00:26
 * @FilePath: \vite2-vue3-ts-electron-project\src\router\index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import store from '@/store'


const routes:Array<RouteRecordRaw> = []
const routerOptions:any = {
  history: createWebHashHistory(),
  scrollBehavior: async () => {
    return { el: undefined, top: 0, behavior: 'smooth' }; // 包含 el 属性用于指定要滚动到的元素
  },
  routes
}

const router:any = createRouter(routerOptions)


export function resetRouter() {
  const newRouter:any = router
  router.matcher = newRouter.matcher // reset router
}

export default router