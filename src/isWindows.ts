export const REGEX_UA_OS_WINDOWS = /window/gi

const isWindows = (useragent: string = navigator.userAgent): boolean => {
    REGEX_UA_OS_WINDOWS.lastIndex = 0
    return REGEX_UA_OS_WINDOWS.test(useragent)
}

export default isWindows
