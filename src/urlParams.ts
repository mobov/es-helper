
interface urlKV {
    [filed: string]: any
}

/**
 * 获取URL全部参数值
 * @param url
 */
export function getUrlParams (url: string = window.location.href): urlKV {
    const _url = decodeURI(url.replace(/\+/g, '%20'))
    // console.log(_url)
    const result: urlKV = {}

    let queryArray = _url.split('?')

    if (queryArray.length <= 1) {
        return result
    }
    queryArray = queryArray[1].split('&')
    queryArray.forEach(query => {
        const queryKVArray = query.split('=')
        // console.log(queryKVArray)
        result[queryKVArray[0]] = queryKVArray[1]
    })
    return result
}

/**
 * 获取指定的URL参数值
 * @param name
 * @param url
 */
export function getUrlParam (name: string, url: string = window.location.href): any {
    if (typeof name !== 'string') console.error('要获取的参数名必须为字符串')
    const _url = decodeURI(url.replace(/\+/g, '%20'))
    const search = _url.substring(_url.lastIndexOf('?') + 1)
    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i')
    const r = search.match(reg)
    if (r !== null) return decodeURI(r[2])
    return ''
}

/**
 * 追加指定的URL参数值,存在会覆盖
 * @param params
 * @param url
 * @param sort
 */
export function appendUrlParams (params: urlKV = {}, url: string = window.location.href, sort: boolean = false): string {
    let cleanUrl = url.split('?')[0]

    const oriParams = getUrlParams(url)
    const newParams = Object.assign(oriParams, params)

    // url已存在参数
    let Keys = Object.keys(newParams)
    if (sort) {
        Keys = Keys.sort()
    }
    Keys.forEach(key => {
        cleanUrl += `&${key}=${newParams[key]}`
    })

    cleanUrl = cleanUrl.replace(/&/, '?')
    return cleanUrl
}
