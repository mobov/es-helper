/**
 * 校验方法合集
 */
import RegexMap from './regexMap'

/**
 * url校验
 *
 * @param    {string}  val   被校验参数
 * @returns   {boolean}
 *
 * @date       2018/2/19
 * @author   nocoolyoyo
 */
export function isURL(val) {
  return RegexMap.url.test(val)
}

/**
 * 小写校验
 *
 * @param    {string}  val   被校验参数
 * @returns   {boolean}
 *
 * @date       2018/2/19
 * @author   nocoolyoyo
 */
export function isLowerCase(val) {
  return RegexMap.lowerCase.test(val)
}

/**
 * 大写校验
 *
 * @param    {string}  val   被校验参数
 * @returns   {boolean}
 */
export function isUpperCase(val) {
  return RegexMap.upperCase.test(val)
}

/**
 * 邮箱校验
 *
 * @param    {string}  val   被校验参数
 * @returns   {boolean}
 */
export function isEmail(val) {
  return RegexMap.email.test(val)
}

/**
 * 空字符串校验
 * @param val
 * @returns {boolean}
 */
export function isTrimEmpty(val) {
  if (typeof val !== 'string') { return false }
  return val.trim() === ''
}

/**
 * 空对象校验
 * @param val
 * @return {boolean}
 */
export function isEmptyObject(val) {
  if (typeof val !== 'object') { return false }
  return Object.keys(val).length === 0
}

/**
 * 十六进制颜色
 * @param val
 * @return {boolean}
 */
export function isHexColor(val) {
  if (typeof val !== 'string') { return false }
  return RegexMap.hexColor.test(val)
}

/**
 * 样式表单位
 * @param val
 * @return {boolean}
 */
export function isStyleUnit(val) {
  if (typeof val !== 'string') { return false }
  return RegexMap.styleUnit.test(val)
}
