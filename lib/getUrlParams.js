/**
 * 获取URL全部参数值
 * @param url
 */
var getUrlParams = function (url) {
    if (url === void 0) { url = window.location.href; }
    var _url = decodeURI(url.replace(/\+/g, '%20'));
    // console.log(_url)
    var result = {};
    var queryArray = _url.split('?');
    if (queryArray.length <= 1) {
        return result;
    }
    queryArray = queryArray[1].split('&');
    queryArray.forEach(function (query) {
        var queryKVArray = query.split('=');
        // console.log(queryKVArray)
        result[queryKVArray[0]] = queryKVArray[1];
    });
    return result;
};
export default getUrlParams;
