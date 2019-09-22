const REGEX_STYLE_UNIT = /px|vw|rem|em|%|auto|unset$/i

const isStyleUnit = (val: string | number): boolean => {
    if (typeof val !== 'string') {
        return false
    }
    REGEX_STYLE_UNIT.lastIndex = 0
    return REGEX_STYLE_UNIT.test(val)
}
export default isStyleUnit
