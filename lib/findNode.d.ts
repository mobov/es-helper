/**
 *
 * @param data 数据源
 * @param field
 * @param key 目标id
 * @param childField 子项所在字段
 */
declare const findNode: ({ data, field, key, childField }?: {
    data: any;
    field: string;
    key: string;
    childField: string;
}) => any;
export default findNode;
