const REGEX_UA_CLIENT_MOBILE = /mobile/gi

const isMobile = (useragent: string = navigator.userAgent): boolean => {
    REGEX_UA_CLIENT_MOBILE.lastIndex = 0
    return REGEX_UA_CLIENT_MOBILE.test(useragent)
}

export default isMobile
