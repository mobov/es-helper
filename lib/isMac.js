var REGEX_UA_OS_MAC = /mac/gi;
var isMac = function (useragent) {
    if (useragent === void 0) { useragent = navigator.userAgent; }
    REGEX_UA_OS_MAC.lastIndex = 0;
    return REGEX_UA_OS_MAC.test(useragent);
};
export default isMac;
