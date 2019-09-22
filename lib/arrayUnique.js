var arrayUnique = function (arr, field) {
    if (field === void 0) { field = 'id'; }
    if (typeof arr[0] === 'string' || typeof arr[0] === 'number') {
        var result_1 = [];
        var str_1 = [];
        var num_1 = [];
        arr.forEach(function (item) {
            if (isNaN(item)) {
                str_1.push(item);
            }
            else {
                num_1.push(item);
            }
        });
        arr = num_1.sort(function (a, b) { return a - b; }).concat(str_1.sort());
        arr.forEach(function (a) {
            if (result_1.includes(a)) {
                return;
            }
            result_1.push(a);
        });
        return result_1;
    }
    else {
        var result_2 = [];
        arr.forEach(function (item) {
            var ids = result_2.map(function (i) { return i[field]; });
            if (!ids.includes(item[field])) {
                result_2.push(item);
            }
        });
        return result_2;
    }
};
export default arrayUnique;
