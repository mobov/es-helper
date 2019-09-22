import camelCase from './camelCase'
/**
 * 获取节点的CSS属性的值
 * @param element {Object} 节点
 * @param styleName {String} 属性名字
 * @returns {*}
 * @author: nocoolyoyo
 * @date: 2018-03-11
 */
const getStyle = (element: HTMLElement, styleName: keyof CSSStyleDeclaration): string => {
    if (!element || !styleName) return ''
    styleName = camelCase(styleName as string) as keyof CSSStyleDeclaration
    if (styleName === 'float') {
        styleName = 'cssFloat'
    }
    try {
        const computed = document['defaultView']!.getComputedStyle(element, '')
        return element.style[styleName] || computed ? computed[styleName] : ''
    } catch (e) {
        return element.style[styleName]
    }
}


export default getStyle
