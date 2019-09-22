export var typeEqual = function (v1, v2) {
    var allIsNotNull = [v1, v2].every(function (v) { return v !== null; });
    if (allIsNotNull) {
        return typeof v1 === typeof v2;
    }
    return [v1, v2].every(function (v) { return v === null; });
};
export default typeEqual;
