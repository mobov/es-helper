var REGEX_UA_OS_ANDROID = /android/gi;
var isAndroid = function (useragent) {
    if (useragent === void 0) { useragent = navigator.userAgent; }
    REGEX_UA_OS_ANDROID.lastIndex = 0;
    return REGEX_UA_OS_ANDROID.test(useragent);
};
export default isAndroid;
