/**
 * 图片预加载完返回图片的信息
 * @param url
 */
var imageLoaded = function (url) {
    return new Promise(function (resolve, reject) {
        var img = new Image();
        img.onload = function () {
            resolve({
                width: img.width,
                height: img.height
            }); // real_width,real_height
            img = null;
        };
        img.onerror = function () {
            reject('load image fail');
        };
        img.src = url;
    });
};
export default imageLoaded;
