/**
 * css样式构造
 * @param styleObj 文件后缀名
 * @returns {String}
 *CSSStyleDeclaration
 * @author: nocoolyoyo
 * @date: 2018-03-11
 */
const strStyle = (styleObj: any): string => {
    let cssStr = ''
    Object.keys(styleObj).forEach(key => {
        if (styleObj.hasOwnProperty(key)) cssStr += `${key}:${styleObj[key]};`
    })
    return cssStr
}

export default strStyle
