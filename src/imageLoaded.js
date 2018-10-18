/**
 * @module 图片预加载完返回图片的信息
 * @param url  图片的url
 * @returns {Promise<any>}包含图片属性的promise的对象
 * @returns {Promise} {number} width  图片宽度
 * @returns {Promise} {number} height 图片高度
 *
 * @author: nocoolyoyo
 * @date: 2018-03-11
 */
export default function imageLoaded(url) {
  return new Promise((resolve, reject) => {
    let img = new Image()
    img.onload = function () {
      resolve({
        width: this.width,
        height: this.height,
        // todo:添加大小，图片类型等信息
      }) // real_width,real_height
      img = null
    }
    img.onerror = function () {
      reject('load image fail')
    }
    img.src = url
  })
}
