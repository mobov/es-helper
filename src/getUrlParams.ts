interface urlKV {
    [filed: string]: any
}

/**
 * 获取URL全部参数值
 * @param url
 */
const getUrlParams = (url: string = window.location.href): urlKV => {
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

export default getUrlParams
