var REGEX_UPPER_CASE = /^[A-Z]+$/;
var isUpperCase = function (val) {
    if (typeof val !== 'string') {
        return false;
    }
    REGEX_UPPER_CASE.lastIndex = 0;
    return REGEX_UPPER_CASE.test(val);
};
export default isUpperCase;
