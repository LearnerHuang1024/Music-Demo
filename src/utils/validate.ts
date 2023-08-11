/*
 * @Date: 2023-08-09 11:31:24
 * @LastEditors: AaronHuang
 * @LastEditTime: 2023-08-09 14:37:35
 * @FilePath: \vite2-vue3-ts-electron-project\src\utils\validate.ts
 */
/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path: string) {
  return /^(https?:|mailto:|tel:)/.test(path)
}


/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str:string) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}
