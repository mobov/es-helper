var REGEX_BASE64 = /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*?)\s*$/i;
var isBase64 = function (val) {
    if (typeof val !== 'string') {
        return false;
    }
    REGEX_BASE64.lastIndex = 0;
    return REGEX_BASE64.test(val);
};
export default isBase64;
