import camelCase from './camelCase';
/**
 * 获取节点的CSS属性的值
 * @param element {Object} 节点
 * @param styleName {String} 属性名字
 * @returns {*}
 * @author: nocoolyoyo
 * @date: 2018-03-11
 */
var getStyle = function (element, styleName) {
    if (!element || !styleName)
        return '';
    styleName = camelCase(styleName);
    if (styleName === 'float') {
        styleName = 'cssFloat';
    }
    try {
        var computed = document['defaultView'].getComputedStyle(element, '');
        return element.style[styleName] || computed ? computed[styleName] : '';
    }
    catch (e) {
        return element.style[styleName];
    }
};
export default getStyle;
