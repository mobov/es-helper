/**
 * 校验方法合集
 */
export const REGEX_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const REGEX_URL = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
export const REGEX_UPPER_CASE = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
export const REGEX_LOWER_CASE = /^[a-z]+$/;
export const REGEX_HEX_COLOR = /^#[0-9a-fA-F]{6}$/;
export const REGEX_STYLE_UNIT = /px|vw|rem|em|%|auto|unset$/;
export const REGEX_UA_CLIENT_MOBILE = /mobile/gi;
export const REGEX_UA_OS_IOS = /ipad|iphone/gi;
export const REGEX_UA_OS_ANDROID = /android/gi;
export const REGEX_UA_OS_WINDOWS = /window|mac|linux/gi;
export const REGEX_BASE64 = /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*?)\s*$/i;
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
    if (typeof val !== 'string') {
        return false;
    }
    REGEX_URL.lastIndex = 0;
    return REGEX_URL.test(val);
}
/**
 * BASE64
 * @param val
 * @return {boolean}
 */
export function isBase64(val) {
    if (typeof val !== 'string') {
        return false;
    }
    REGEX_BASE64.lastIndex = 0;
    return REGEX_BASE64.test(val);
}
/**
 * 小写校验
 * @param val
 */
export function isLowerCase(val) {
    if (typeof val !== 'string') {
        return false;
    }
    REGEX_LOWER_CASE.lastIndex = 0;
    return REGEX_LOWER_CASE.test(val);
}
/**
 * 大写校验
 *
 * @param    {string}  val   被校验参数
 * @returns   {boolean}
 */
export function isUpperCase(val) {
    if (typeof val !== 'string') {
        return false;
    }
    return REGEX_UPPER_CASE.test(val);
}
/**
 * 邮箱校验
 *
 * @param    {string}  val   被校验参数
 * @returns   {boolean}
 */
export function isEmail(val) {
    if (typeof val !== 'string') {
        return false;
    }
    return REGEX_EMAIL.test(val);
}
/**
 * 空字符串校验
 * @param val
 * @returns {boolean}
 */
export function isTrimEmpty(val) {
    if (typeof val !== 'string') {
        return false;
    }
    return val.trim() === '';
}
/**
 * 空对象校验
 * @param val
 * @return {boolean}
 */
export function isEmptyObject(val) {
    if (typeof val !== 'object') {
        return false;
    }
    return Object.keys(val).length === 0;
}
/**
 * 十六进制颜色
 * @param val
 * @return {boolean}
 */
export function isHexColor(val) {
    if (typeof val !== 'string') {
        return false;
    }
    REGEX_HEX_COLOR.lastIndex = 0;
    return REGEX_HEX_COLOR.test(val);
}
/**
 * 样式表单位
 * @param val
 * @return {boolean}
 */
export function isStyleUnit(val) {
    if (typeof val !== 'string') {
        return false;
    }
    REGEX_STYLE_UNIT.lastIndex = 0;
    return REGEX_STYLE_UNIT.test(val);
}
/**
 * 是否是手机
 * @return {boolean}
 */
export function isMobile() {
    REGEX_UA_CLIENT_MOBILE.lastIndex = 0;
    return REGEX_UA_CLIENT_MOBILE.test(navigator.userAgent);
}
/**
 * 是否是IOS系统
 * @return {boolean}
 */
export function isOSIos() {
    REGEX_UA_OS_IOS.lastIndex = 0;
    return REGEX_UA_OS_IOS.test(navigator.userAgent);
}
/**
 * 是否是ANDROID系统
 * @return {boolean}
 */
export function isOSAndroid() {
    REGEX_UA_OS_ANDROID.lastIndex = 0;
    return REGEX_UA_OS_ANDROID.test(navigator.userAgent);
}
/**
 * 是否是WINDOWS系统
 * @return {boolean}
 */
export function isOSWindows() {
    REGEX_UA_OS_WINDOWS.lastIndex = 0;
    return REGEX_UA_OS_WINDOWS.test(navigator.userAgent);
}
//# sourceMappingURL=validate.js.map