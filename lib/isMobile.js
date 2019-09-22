var REGEX_UA_CLIENT_MOBILE = /mobile/gi;
var isMobile = function (useragent) {
    if (useragent === void 0) { useragent = navigator.userAgent; }
    REGEX_UA_CLIENT_MOBILE.lastIndex = 0;
    return REGEX_UA_CLIENT_MOBILE.test(useragent);
};
export default isMobile;
