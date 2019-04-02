export type langType =
    'zh-CN' |
    'zh-TW' |
    'ar' |
    'de' |
    'en' |
    'es' |
    'fr' |
    'id' |
    'it' |
    'ja' |
    'ko' |
    'nl' |
    'po' |
    'pt' |
    'ro' |
    'ru' |
    'sv' |
    'th' |
    'tr' |
    'vi'
export const langMap = {
    'zh-CN': '简体中文',
    'zh-TW': '繁体中文',
    'ar': 'العربية',
    'de': 'Deutsch',
    'en': 'English',
    'es': 'Español',
    'fr': 'Français',
    'id': 'Indonesia',
    'it': 'Italiano',
    'ja': '日本語',
    'ko': '한국어韩语',
    'nl': 'Nederlands',
    'po': 'Polski',
    'pt': 'Português',
    'ro': 'română',
    'ru': 'Русский',
    'sv': 'Svenska',
    'th': 'ไทย泰语',
    'tr': 'Türkçe',
    'vi': 'Tiếng Việt'
}

/**
 * 业务多语言适配器
 *
 * @param {string} lang 需要被适配的语言字符串 ,为空则返回英语
 * @returns 适配结果，没有适配结果则返回输入的字符串
 *
 * @author nocoolyoyo
 * @since 2018-05-23
 */
export function langAdapt (lang: string): langType {
    if (typeof lang !== 'string') {
        throw new Error('lang is not a string')
    }
    lang = lang.toLowerCase().trim()
    //中文
    if (lang.indexOf('zh-') !== -1) {
        //某些安卓设备语言返回的是zh-rCN，zh-rTW
        if (lang.indexOf('cn') !== -1) {
            lang = 'zh-CN'
        } else {
            lang = 'zh-TW'
        }
    } else if (lang.indexOf('ja') !== -1 || lang.indexOf('jp') !== -1) {
        //日语
        lang = 'ja'
    } else {
        //其他语言
        //中线处理
        if (lang.indexOf('-') !== -1) {
            lang = lang.split('-')[0]
        }
    }

    return lang as langType
}
