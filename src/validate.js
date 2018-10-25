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
  RegexMap.url.lastIndex = 0
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
  RegexMap.lowerCase.lastIndex = 0
  return RegexMap.lowerCase.test(val)
}

/**
 * 大写校验
 *
 * @param    {string}  val   被校验参数
 * @returns   {boolean}
 */
export function isUpperCase(val) {
  RegexMap.upperCase.lastIndex = 0
  return RegexMap.upperCase.test(val)
}

/**
 * 邮箱校验
 *
 * @param    {string}  val   被校验参数
 * @returns   {boolean}
 */
export function isEmail(val) {
  RegexMap.email.lastIndex = 0
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
  RegexMap.hexColor.lastIndex = 0
  if (typeof val !== 'string') { return false }
  return RegexMap.hexColor.test(val)
}

/**
 * 样式表单位
 * @param val
 * @return {boolean}
 */
export function isStyleUnit(val) {
  RegexMap.styleUnit.lastIndex = 0
  if (typeof val !== 'string') { return false }
  return RegexMap.styleUnit.test(val)
}

/**
 * 是否是手机
 * @return {boolean}
 */
export function isMobile() {
  RegexMap.UA_CLIENT_MOBILE.lastIndex = 0
  return RegexMap.UA_CLIENT_MOBILE.test(navigator.userAgent)
}

/**
 * 是否是IOS系统
 * @return {boolean}
 */
export function isOSIos() {
  RegexMap.UA_OS_IOS.lastIndex = 0
  return RegexMap.UA_OS_IOS.test(navigator.userAgent)
}

/**
 * 是否是ANDROID系统
 * @return {boolean}
 */
export function isOSAndroid() {
  RegexMap.UA_OS_ANDROID.lastIndex = 0
  return RegexMap.UA_OS_ANDROID.test(navigator.userAgent)
}

/**
 * 是否是WINDOWS系统
 * @return {boolean}
 */
export function isOSWindows() {
  RegexMap.UA_OS_WINDOWS.lastIndex = 0
  return RegexMap.UA_OS_WINDOWS.test(navigator.userAgent)
}