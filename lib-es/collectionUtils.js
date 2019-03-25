export const arrayClear = (arr) => {
    if (arr instanceof Array) {
        arr.splice(0, arr.length);
    }
};
export const arrayUnique = (arr) => {
    const result = [];
    const str = [];
    const num = [];
    arr.forEach((item) => {
        if (isNaN(item)) {
            str.push(item);
        }
        else {
            num.push(item);
        }
    });
    arr = num.sort((a, b) => a - b).concat(str.sort());
    arr.forEach((a) => {
        if (result.includes(a)) {
            return;
        }
        result.push(a);
    });
    return result;
};
export const arrayUniqueByField = (arr, field = 'id') => {
    const result = [];
    arr.forEach((item) => {
        const ids = result.map((i) => i[field]);
        if (!ids.includes(item[field])) {
            result.push(item);
        }
    });
    return result;
};
export function deepCopy(source) {
    let target;
    if (source instanceof Array) {
        target = [];
        source.forEach(item => {
            if (typeof item === 'object') {
                target.push(deepCopy(item));
            }
            else {
                target.push(item);
            }
        });
    }
    else if (source instanceof Object) {
        target = {};
        for (let prop in source) {
            if (typeof source[prop] === 'object') {
                target[prop] = deepCopy(source[prop]);
            }
            else {
                target[prop] = source[prop];
            }
        }
    }
    else {
        return source;
    }
    return target;
}
export const typeEqual = (v1, v2) => {
    const allIsNotNull = [v1, v2].every(v => v !== null);
    if (allIsNotNull) {
        return typeof v1 === typeof v2;
    }
    return [v1, v2].every(v => v === null);
};
export const deepEqual = (obj1, obj2) => {
    let result = true;
    if (obj1 === obj2) {
        return true;
    }
    if (!typeEqual(obj1, obj2)) {
        return false;
    }
    if (Array.isArray(obj1) && Array.isArray(obj2) && obj1.length !== obj2.length) { // 数组长度不同
        return result = false;
    }
    for (let prop in obj1) {
        let val1 = obj1[prop];
        let val2 = obj2[prop];
        if ((typeof val1) !== (typeof val2)) { // 数据类型不同
            return result = false;
        }
        else if (typeof val1 === 'object') {
            result = deepEqual(val1, val2);
        }
        else {
            result = (val1 === val2);
        }
        if (result === false) {
            return false;
        }
    }
    return result;
};
/**
 *
 * @param data 数据源
 * @param field
 * @param key 目标id
 * @param childField 子项所在字段
 */
export function findNode({ data = [], field = 'id', key = '', childField = 'children' } = {}) {
    let target;
    let childrenList = {};
    if (data instanceof Array) {
        childrenList = data;
    }
    else {
        childrenList = data[childField];
    }
    for (let i = 0; i <= childrenList.length; i++) {
        let children = childrenList[i];
        if (children) {
            if (children[field] === key) {
                return target = children;
            }
            else if (children[childField] && children[childField].length) {
                target = findNode({ data: children, key, childField, field });
                if (target && target[field] === key) {
                    return target;
                }
            }
        }
    }
    return target;
}
//# sourceMappingURL=collectionUtils.js.map