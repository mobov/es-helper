const arrayUnique = <T = number | string>(arr: T[], field: string = 'id'): T[] => {//Array<String|Number>去重
    if (
        typeof arr[0] === 'string' || typeof arr[0] === 'number'
    ) {
        const result: T[] = []
        const str: T[] = []
        const num: T[] = []
        arr.forEach((item: any) => {
            if (isNaN(item)) {
                str.push(item)
            } else {
                num.push(item)
            }
        })
        arr = num.sort((a: any, b: any) => a - b).concat(str.sort())
        arr.forEach((a) => {
            if (result.includes(a)) { return }
            result.push(a)
        })
        return result
    } else {
        const result: T[] = []
        arr.forEach((item: any) => {
            const ids = result.map((i: any) => i[field])
            if (!ids.includes(item[field])) {
                result.push(item)
            }
        })
        return result
    }

}

export default arrayUnique
