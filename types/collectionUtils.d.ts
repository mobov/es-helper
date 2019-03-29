export declare const arrayClear: (arr: any[]) => void;
export declare const arrayUnique: <T = string | number>(arr: T[]) => T[];
export declare const arrayUniqueByField: <T = any>(arr: T[], field?: string) => T[];
export declare function deepCopy<T = any>(source: T): T;
export declare const typeEqual: (v1: any, v2: any) => boolean;
export declare const isObject: (v: any) => boolean;
export declare const deepEqual: (obj1: any, obj2: any) => boolean;
/**
 *
 * @param data 数据源
 * @param field
 * @param key 目标id
 * @param childField 子项所在字段
 */
export declare function findNode({ data, field, key, childField }?: {
    data: any;
    field: string;
    key: string;
    childField: string;
}): any;
