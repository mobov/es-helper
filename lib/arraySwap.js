var arraySwap = function (arr, index1, index2) {
    arr.splice(index2, 0, arr.splice(index1, 1)[0]);
};
export default arraySwap;
