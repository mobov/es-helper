var isEmptyObject = function (val) {
    if (typeof val !== 'object') {
        return false;
    }
    return Object.keys(val).length === 0;
};
export default isEmptyObject;
