import typeEqual from './typeEqual';
import isObject from './isObject';
var deepEqual = function (obj1, obj2) {
    var result = true;
    if (obj1 === obj2) {
        return true;
    }
    if (!typeEqual(obj1, obj2)) {
        return false;
    }
    if (!isObject(obj1)) {
        return obj1 === obj2;
    }
    if (Array.isArray(obj1) && Array.isArray(obj2) && obj1.length !== obj2.length) { // 数组长度不同
        return result = false;
    }
    for (var prop in obj1) {
        var val1 = obj1[prop];
        var val2 = obj2[prop];
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
export default deepEqual;
