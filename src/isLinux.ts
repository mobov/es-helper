const REGEX_UA_OS_LINUX = /linux/gi

const isLinux = (useragent: string = navigator.userAgent): boolean => {
    REGEX_UA_OS_LINUX.lastIndex = 0
    return REGEX_UA_OS_LINUX.test(useragent)
}

export default isLinux
