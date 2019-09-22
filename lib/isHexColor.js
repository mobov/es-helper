var REGEX_HEX_COLOR = /^#[0-9a-fA-F]{6}$/;
var isHexColor = function (val) {
    if (typeof val !== 'string') {
        return false;
    }
    REGEX_HEX_COLOR.lastIndex = 0;
    return REGEX_HEX_COLOR.test(val);
};
export default isHexColor;
