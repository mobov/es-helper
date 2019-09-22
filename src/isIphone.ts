
const REGEX_UA_OS_IOS = /ipad|iphone/gi

const isIphone = (useragent: string = navigator.userAgent): boolean => {
    REGEX_UA_OS_IOS.lastIndex = 0
    return REGEX_UA_OS_IOS.test(useragent)
}

export default isIphone
