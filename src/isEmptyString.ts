
const isEmptyString = (val: string): boolean => {
    if (typeof val !== 'string') {
        return false
    }
    return val.trim() === ''
}

export default isEmptyString
