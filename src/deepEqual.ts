import typeEqual from './typeEqual'
import isObject from './isObject'

const deepEqual = (obj1: any, obj2: any): boolean => { // JSON对象深度对比
    let result = true
    if (obj1 === obj2) {
        return true
    }
    if (!typeEqual(obj1, obj2)) {
        return false
    }
    if (!isObject(obj1)) {
        return obj1 === obj2
    }
    if (Array.isArray(obj1) && Array.isArray(obj2) && obj1.length !== obj2.length) { // 数组长度不同
        return result = false
    }
    for (let prop in obj1) {
        let val1 = obj1[prop]
        let val2 = obj2[prop]
        if ((typeof val1) !== (typeof val2)) { // 数据类型不同
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

export default deepEqual
