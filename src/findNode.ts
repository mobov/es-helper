/**
 *
 * @param data 数据源
 * @param field
 * @param key 目标id
 * @param childField 子项所在字段
 */
const findNode = ({
     data = [],
     field = 'id',
     key = '',
     childField = 'children'
 } = {} as {
    data: any,
    field: string,
    key: string,
    childField: string
}): any => {//树形结构根据id查找节点数据
    let target: any
    let childrenList: any = {}
    if (data instanceof Array) {
        childrenList = data;
    } else {
        childrenList = data[childField]
    }
    for (let i = 0; i <= childrenList.length; i++) {
        let children = childrenList[i]
        if (children) {
            if (children[field] === key) {
                return target = children
            } else if (children[childField] && children[childField].length) {
                target = findNode({ data: children, key, childField, field })
                if (target && target[field] === key) {
                    return target
                }
            }
        }
    }
    return target
}

export default findNode
