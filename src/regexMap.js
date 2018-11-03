
/**
 * 正则MAP大全
 * @var EMAIL 邮箱
 * @var URL url
 * @var UPPER_CASE 小写
 * @var LOWER_CASE 大写
 * @var HEX_COLOR 十六进制颜色
 * @var STYLE_UNIT 样式表单位
 * @var UA_CLIENT_MOBILE 是否是手机
 * @var UA_OS_IOS IOS
 * @var UA_OS_ANDROID ANDROID
 * @var UA_OS_WINDOWS WINDOWS
 *
 * @author: nocoolyoyo
 * @date: 2018-03-11
 */
export default {
  EMAIL: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  URL: /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/,
  UPPER_CASE: /^[A-Z]+$/,
  LOWER_CASE: /^[a-z]+$/,
  HEX_COLOR: /^#[0-9a-fA-F]{6}$/,
  STYLE_UNIT: /px|vw|rem|em|%|auto|unset$/,
  UA_CLIENT_MOBILE: /mobile/gi,
  UA_OS_IOS: /ipad|iphone/gi,
  UA_OS_ANDROID: /android/gi,
  UA_OS_WINDOWS: /window|mac|linux/gi,
}
