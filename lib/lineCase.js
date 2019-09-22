var UPPER_CHARS_REGEXP = /[A-Z]/g;
var lineCase = function (name) {
    return name.replace(UPPER_CHARS_REGEXP, function (_, separator, letter, offset) { return separator === 0 ? _.toLowerCase() : "-" + _.toLowerCase(); });
};
export default lineCase;
