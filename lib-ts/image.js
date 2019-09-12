/**
 * 图片预加载完返回图片的信息
 * @param url
 */
export function imageLoaded(url) {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.onload = function () {
            resolve({
                width: img.width,
                height: img.height,
            }); // real_width,real_height
            img = null;
        };
        img.onerror = function () {
            reject('load image fail');
        };
        img.src = url;
    });
}
//# sourceMappingURL=image.js.map