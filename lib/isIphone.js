var REGEX_UA_OS_IOS = /ipad|iphone/gi;
var isIphone = function (useragent) {
    if (useragent === void 0) { useragent = navigator.userAgent; }
    REGEX_UA_OS_IOS.lastIndex = 0;
    return REGEX_UA_OS_IOS.test(useragent);
};
export default isIphone;
