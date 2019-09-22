var absArray = function (val) {
    if (!(val && val instanceof Array)) {
        return [];
    }
    return val;
};
export default absArray;
