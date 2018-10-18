/**
 * @function 获取指定的URL参数值
 * @param name
 * @return {string}
 *
 * @author: nocoolyoyo
 * @date: 2018-03-11
 */
export function getUrlParam(name, url = window.location.href) {
  if (typeof name !== 'string') console.error('要获取的参数名必须为字符串')
  const _url = decodeURI(url.replace(/\+/g, '%20'))
  const search = _url.substring(_url.lastIndexOf('?') + 1)
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i')
  const r = search.match(reg)
  if (r !== null) return decodeURI(r[2])
  return ''
}

/**
 * @function 追加指定的URL参数值
 * @param params
 * @param url
 * @return {string}
 *
 * @author: nocoolyoyo
 * @date: 2018-09-04
 */
export function appendUrlParam(params = {}, url = '') {
  // url已存在参数
  let tempStr = ''
  Object.keys(params).forEach(key => {
    tempStr += `&${key}=${params[key]}`
  })
  if (url.indexOf('?')) {
    tempStr = tempStr.replace(/\?/, '&')
  }
  url += tempStr
  return url
}
