/**
 *
 * @param {Object|Array} data 数据源
 * @param {String} id 目标id
 * @param {String} childStr 子项所在字段
 */
export default function findNode({data=[],field='id', key, childField='children'}={}){//树形结构根据id查找节点数据
 let index = [];
 let target;
 let childrenList;
 if (data instanceof Array) {
   childrenList = data;
 } else {
   childrenList = data[childField];
 }
 for (let i = 0; i <= childrenList.length; i++) {
   let children = childrenList[i];
   if (children) {
     if (children[field] === key) {
       return target = children;
     } else if (children[childField] && children[childField].length) {
       target = findNode({data:children, key,childField,field});
       if (target&&target[field] === key){
         return target
       }
     }
   }
 }
 return target
};
