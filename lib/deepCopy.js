var deepCopy = function (source) {
    var target;
    if (source instanceof Array) {
        target = [];
        source.forEach(function (item) {
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
        for (var prop in source) {
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
};
export default deepCopy;
