var isEmptyString = function (val) {
    if (typeof val !== 'string') {
        return false;
    }
    return val.trim() === '';
};
export default isEmptyString;
