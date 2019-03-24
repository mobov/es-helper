export const arrayClear = (arr: any[]) => {
    if (arr instanceof Array) {
        arr.splice(0, arr.length)
    }
}

export const arrayUnique = <T = number | string>(arr: T[]): T[] => {//Array<String|Number>去重
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
}


export const arrayUniqueByField = <T = any>(arr: T[], field: string = 'id'): T[] => {// Array<Object>根据某个字段去重
    const result: T[] = []
    arr.forEach((item: any) => {
        const ids = result.map((i: any) => i[field])
        if (!ids.includes(item[field])) {
            result.push(item)
        }
    })
    return result
}

export function deepCopy<T = any>(source: T): T {//对象深拷贝
    let target: any
    if (source instanceof Array) {
        target = []
        source.forEach(item => {
            if (typeof item === 'object') {
                target.push(deepCopy(item))
            } else {
                target.push(item)
            }
        })
    } else if (source instanceof Object) {
        target = {}
        for (let prop in source) {
            if (typeof source[prop] === 'object') {
                target[prop] = deepCopy(source[prop])
            } else {
                target[prop] = source[prop]
            }
        }
    } else {
        return source
    }
    return target
}

export function deepEqual(obj1: any, obj2: any): boolean {//JSON对象深度对比
    let result = true
    if (obj1 === obj2) {
        return true
    }
    if ((typeof obj1) !== (typeof obj2)) {
        return false
    }
    if (Array.isArray(obj1) && Array.isArray(obj2) && obj1.length !== obj2.length) {//数组长度不同
        return result = false
    }
    for (let prop in obj1) {
        let val1 = obj1[prop]
        let val2 = obj2[prop]
        if ((typeof val1) !== (typeof val2)) {//数据类型不同
            return result = false
        } else if (typeof val1 === 'object') {
            result = deepEqual(val1, val2)
        } else {
            result = (val1 === val2)
        }
        if (result === false) {
            return false
        }
    }
    return result
}


/**
 *
 * @param data 数据源
 * @param field
 * @param key 目标id
 * @param childField 子项所在字段
 */
export function findNode({
    data = [],
    field = 'id',
    key = '',
    childField ='children'
} = {} as {
    data: any,
    field: string,
    key: string,
    childField: string
}): any{//树形结构根据id查找节点数据
    let target: any
    let childrenList: any = {}
    if (data instanceof Array) {
        childrenList = data;
    } else {
        childrenList = data[childField]
    }
    for (let i = 0; i <= childrenList.length; i++) {
        let children = childrenList[i]
        if (children) {
            if (children[field] === key) {
                return target = children
            } else if (children[childField] && children[childField].length) {
                target = findNode({data:children, key,childField,field})
                if (target&&target[field] === key){
                    return target
                }
            }
        }
    }
    return target
}
