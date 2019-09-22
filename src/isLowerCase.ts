const REGEX_LOWER_CASE = /^[a-z]+$/

const isLowerCase = (val: string): boolean => {
    if (typeof val !== 'string') {
        return false
    }
    REGEX_LOWER_CASE.lastIndex = 0
    return REGEX_LOWER_CASE.test(val)
}

export default isLowerCase
