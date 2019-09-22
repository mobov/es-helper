export var REGEX_UA_OS_WINDOWS = /window/gi;
var isWindows = function (useragent) {
    if (useragent === void 0) { useragent = navigator.userAgent; }
    REGEX_UA_OS_WINDOWS.lastIndex = 0;
    return REGEX_UA_OS_WINDOWS.test(useragent);
};
export default isWindows;
