const REGEX_UA_OS_ANDROID = /android/gi

const isAndroid = (useragent: string = navigator.userAgent): boolean => {
    REGEX_UA_OS_ANDROID.lastIndex = 0
    return REGEX_UA_OS_ANDROID.test(useragent)
}

export default isAndroid
