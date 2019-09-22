const REGEX_UA_OS_MAC = /mac/gi

const isMac = (useragent: string = navigator.userAgent): boolean => {
    REGEX_UA_OS_MAC.lastIndex = 0
    return REGEX_UA_OS_MAC.test(useragent)
}

export default isMac
