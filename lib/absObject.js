var absObject = function (val) {
    if (!(val && val instanceof Object)) {
        return {};
    }
    return val;
};
export default absObject;
