/**
 * @function 获取URL全部参数值
 * @param name
 * @return {string}
 *
 * @author: nocoolyoyo
 * @date: 2018-03-11
 */
export function getUrlParams(url = window.location.href) {
	const _url = decodeURI(url.replace(/\+/g, '%20'))
  console.log(_url)
  const result = {}
  let queryArray = url.split('?')
  if (queryArray.length <= 1) {
    return result
  }
	queryArray = queryArray[1].split('&')
	queryArray.forEach(query =>  {
	  const queryKVArray= query.split('=')
    console.log(queryKVArray)
		result[queryKVArray[0]] = queryKVArray[1]
  })
	return result
}
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
 * @function 追加指定的URL参数值,存在会覆盖
 * @param params
 * @param url
 * @return {string}
 *
 * @author: nocoolyoyo
 * @date: 2018-09-04
 */
export function appendUrlParams(params = {}, url = window.location.href) {
  const oriParams = getUrlParams(url)
	const newParams = Object.assign(oriParams, params)
  // url已存在参数
  let tempStr = ''
  Object.keys(newParams).forEach(key => {
    tempStr += `&${key}=${params[key]}`
  })
	tempStr = tempStr.replace(/&/, '?')
  url += tempStr
  return url
}
