/**
 * css样式相关
 */
import camelCase from './camelCase'

/**
 * css样式构造
 * @param styleObj 文件后缀名
 * @returns {String}
 *
 * @author: nocoolyoyo
 * @date: 2018-03-11
 */
export function strStyle(styleObj) {
  let cssStr = ''
  Object.keys(styleObj).forEach(key => {
    if (styleObj.hasOwnProperty(key)) cssStr += `${key}:${styleObj[key]};`
  })
  // for (const key in styleObj) {
  //   if (styleObj.hasOwnProperty(key)) cssStr += `${key}:${styleObj[key]};`
  // }
  return cssStr
}

/**
 *获取节点的某个属性的值
 * @param element {Object} 节点
 * @param styleName {String} 属性名字
 * @returns {*}
 * @author: nocoolyoyo
 * @date: 2018-03-11
 */
export function getStyle(element, styleName) {
  if (!element || !styleName) return null
  styleName = camelCase(styleName)
  if (styleName === 'float') {
    styleName = 'cssFloat'
  }
  try {
    const computed = document.defaultView.getComputedStyle(element, '')
    return element.style[styleName] || computed ? computed[styleName] : null
  } catch (e) {
    return element.style[styleName]
  }
}
