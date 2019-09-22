var REGEX_UA_OS_LINUX = /linux/gi;
var isLinux = function (useragent) {
    if (useragent === void 0) { useragent = navigator.userAgent; }
    REGEX_UA_OS_LINUX.lastIndex = 0;
    return REGEX_UA_OS_LINUX.test(useragent);
};
export default isLinux;
