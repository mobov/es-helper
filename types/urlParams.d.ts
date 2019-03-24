interface urlKV {
    [filed: string]: any;
}
/**
 * 获取URL全部参数值
 * @param url
 */
export declare function getUrlParams(url?: string): urlKV;
/**
 * 获取指定的URL参数值
 * @param name
 * @param url
 */
export declare function getUrlParam(name: string, url?: string): any;
/**
 * 追加指定的URL参数值,存在会覆盖
 * @param params
 * @param url
 * @param sort
 */
export declare function appendUrlParams(params?: urlKV, url?: string, sort?: boolean): string;
export {};
