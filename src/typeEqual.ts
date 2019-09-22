export const typeEqual = (v1: any, v2: any): boolean => {
    const allIsNotNull = [v1, v2].every(v => v !== null)
    if (allIsNotNull) {
        return typeof v1 === typeof v2
    }
    return [v1, v2].every(v => v === null)
}

export default typeEqual
