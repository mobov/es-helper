interface urlKV {
    [filed: string]: any;
}
/**
 * 获取URL全部参数值
 * @param url
 */
declare const getUrlParams: (url?: string) => urlKV;
export default getUrlParams;
