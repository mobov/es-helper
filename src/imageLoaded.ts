/**
 * 图片预加载完返回图片的信息
 * @param url
 */

const imageLoaded = (url: string): Promise<{width: number, height: number}> => {
  return new Promise((resolve, reject) => {
    let img = new Image()
    img.onload = function () {
      resolve({
        width: img.width,
        height: img.height,
        // todo:添加大小，图片类型等信息
      }) // real_width,real_height

      img = (null as any)
    }
    img.onerror = function ()   {
      reject('load image fail')
    }
    img.src = url
  })
}

export default imageLoaded
