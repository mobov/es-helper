export declare type langType = 'zh-CN' | 'zh-TW' | 'ar' | 'de' | 'en' | 'es' | 'fr' | 'id' | 'it' | 'ja' | 'ko' | 'nl' | 'po' | 'pt' | 'ro' | 'ru' | 'sv' | 'th' | 'tr' | 'vi';
export declare const langMap: {
    'zh-CN': string;
    'zh-TW': string;
    'ar': string;
    'de': string;
    'en': string;
    'es': string;
    'fr': string;
    'id': string;
    'it': string;
    'ja': string;
    'ko': string;
    'nl': string;
    'po': string;
    'pt': string;
    'ro': string;
    'ru': string;
    'sv': string;
    'th': string;
    'tr': string;
    'vi': string;
};
/**
 * 业务多语言适配器
 *
 * @param {string} lang 需要被适配的语言字符串 ,为空则返回英语
 * @returns 适配结果，没有适配结果则返回输入的字符串
 *
 * @author nocoolyoyo
 * @since 2018-05-23
 */
declare const langAdapt: (lang: string) => langType;
export default langAdapt;
