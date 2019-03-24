/**
 * 校验方法合集
 */
export declare const REGEX_EMAIL: RegExp;
export declare const REGEX_URL: RegExp;
export declare const REGEX_UPPER_CASE: RegExp;
export declare const REGEX_LOWER_CASE: RegExp;
export declare const REGEX_HEX_COLOR: RegExp;
export declare const REGEX_STYLE_UNIT: RegExp;
export declare const REGEX_UA_CLIENT_MOBILE: RegExp;
export declare const REGEX_UA_OS_IOS: RegExp;
export declare const REGEX_UA_OS_ANDROID: RegExp;
export declare const REGEX_UA_OS_WINDOWS: RegExp;
export declare const REGEX_BASE64: RegExp;
/**
 * url校验
 *
 * @param    {string}  val   被校验参数
 * @returns   {boolean}
 *
 * @date       2018/2/19
 * @author   nocoolyoyo
 */
export declare function isURL(val: string): boolean;
/**
 * BASE64
 * @param val
 * @return {boolean}
 */
export declare function isBase64(val: string): boolean;
/**
 * 小写校验
 * @param val
 */
export declare function isLowerCase(val: string): boolean;
/**
 * 大写校验
 *
 * @param    {string}  val   被校验参数
 * @returns   {boolean}
 */
export declare function isUpperCase(val: string): boolean;
/**
 * 邮箱校验
 *
 * @param    {string}  val   被校验参数
 * @returns   {boolean}
 */
export declare function isEmail(val: string): boolean;
/**
 * 空字符串校验
 * @param val
 * @returns {boolean}
 */
export declare function isTrimEmpty(val: string): boolean;
/**
 * 空对象校验
 * @param val
 * @return {boolean}
 */
export declare function isEmptyObject(val: any): boolean;
/**
 * 十六进制颜色
 * @param val
 * @return {boolean}
 */
export declare function isHexColor(val: string): boolean;
/**
 * 样式表单位
 * @param val
 * @return {boolean}
 */
export declare function isStyleUnit(val: string | number): boolean;
/**
 * 是否是手机
 * @return {boolean}
 */
export declare function isMobile(): boolean;
/**
 * 是否是IOS系统
 * @return {boolean}
 */
export declare function isOSIos(): boolean;
/**
 * 是否是ANDROID系统
 * @return {boolean}
 */
export declare function isOSAndroid(): boolean;
/**
 * 是否是WINDOWS系统
 * @return {boolean}
 */
export declare function isOSWindows(): boolean;
