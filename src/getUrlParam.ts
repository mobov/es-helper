/**
 * 获取URL参数值
 * @param url
 */
const getUrlParam = (name: string, url: string = window.location.href): any => {
    if (typeof name !== 'string') console.error('要获取的参数名必须为字符串')
    const _url = decodeURI(url.replace(/\+/g, '%20'))
    const search = _url.substring(_url.lastIndexOf('?') + 1)
    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i')
    const r = search.match(reg)
    if (r !== null) return decodeURI(r[2])
    return ''
}

export default getUrlParam
