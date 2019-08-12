/**
 * @function 将传入的属性名转为驼峰
 *
 * @param name 名字
 * @return {*}
 *
 * @author: nocoolyoyo
 * @date: 2018-03-11
 */


export function camelCase(name: string): string {
    const SPECIAL_CHARS_REGEXP = /([:\-_]+(.))/g
    const MOZ_HACK_REGEXP = /^moz([A-Z])/
    return name.replace(SPECIAL_CHARS_REGEXP, (_, separator, letter, offset) => (offset ? letter.toUpperCase() : letter)).replace(MOZ_HACK_REGEXP, 'Moz$1')
}

export function lineCase(name: string): string {
    const UPPER_CHARS_REGEXP = /[A-Z]/g
    return name.replace(UPPER_CHARS_REGEXP, (_, separator, letter, offset) => separator === 0 ? _.toLowerCase() : `-${_.toLowerCase()}`)
}
