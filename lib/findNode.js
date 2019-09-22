/**
 *
 * @param data 数据源
 * @param field
 * @param key 目标id
 * @param childField 子项所在字段
 */
var findNode = function (_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.data, data = _c === void 0 ? [] : _c, _d = _b.field, field = _d === void 0 ? 'id' : _d, _e = _b.key, key = _e === void 0 ? '' : _e, _f = _b.childField, childField = _f === void 0 ? 'children' : _f;
    var target;
    var childrenList = {};
    if (data instanceof Array) {
        childrenList = data;
    }
    else {
        childrenList = data[childField];
    }
    for (var i = 0; i <= childrenList.length; i++) {
        var children = childrenList[i];
        if (children) {
            if (children[field] === key) {
                return target = children;
            }
            else if (children[childField] && children[childField].length) {
                target = findNode({ data: children, key: key, childField: childField, field: field });
                if (target && target[field] === key) {
                    return target;
                }
            }
        }
    }
    return target;
};
export default findNode;
