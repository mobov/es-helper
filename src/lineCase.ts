const UPPER_CHARS_REGEXP = /[A-Z]/g


const lineCase = (name: string): string => {
    return name.replace(UPPER_CHARS_REGEXP, (_, separator, letter, offset) => separator === 0 ? _.toLowerCase() : `-${_.toLowerCase()}`)
}

export default lineCase
