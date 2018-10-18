
/**
 * 正则MAP大全
 * @var email 邮箱
 * @var url url
 * @var upperCase 小写
 * @var lowerCase 大写
 * @var hexColor 十六进制颜色
 * @var styleUtil 样式表单位
 *
 * @author: nocoolyoyo
 * @date: 2018-03-11
 */
export default {
  email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  url: /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/,
  upperCase: /^[A-Z]+$/,
  lowerCase: /^[a-z]+$/,
  hexColor: /^#[0-9a-fA-F]{6}$/,
  styleUnit: /px|vw|rem|em|%$/,
}
