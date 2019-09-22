/**
 * 获取URL参数值
 * @param url
 */
var getUrlParam = function (name, url) {
    if (url === void 0) { url = window.location.href; }
    if (typeof name !== 'string')
        console.error('要获取的参数名必须为字符串');
    var _url = decodeURI(url.replace(/\+/g, '%20'));
    var search = _url.substring(_url.lastIndexOf('?') + 1);
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", 'i');
    var r = search.match(reg);
    if (r !== null)
        return decodeURI(r[2]);
    return '';
};
export default getUrlParam;
