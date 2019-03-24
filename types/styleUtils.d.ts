/**
 * css样式构造
 * @param styleObj 文件后缀名
 * @returns {String}
 *CSSStyleDeclaration
 * @author: nocoolyoyo
 * @date: 2018-03-11
 */
export declare function strStyle(styleObj: any): string;
/**
 * 获取节点的CSS属性的值
 * @param element {Object} 节点
 * @param styleName {String} 属性名字
 * @returns {*}
 * @author: nocoolyoyo
 * @date: 2018-03-11
 */
export declare function getStyle(element: HTMLElement, styleName: keyof CSSStyleDeclaration): string;
