export default  function deepCopy(source) {//对象深拷贝
 let target;
 if (source instanceof Array) {
   target = [];
   source.forEach(item => {
     if (typeof item === 'object') {
       target.push(deepCopy(item));
     } else {
       target.push(item);
     }
   });
 } else if (source instanceof Object) {
   target = {};
   for (let prop in source) {
     if (typeof source[prop] === 'object') {
       target[prop] = deepCopy(source[prop]);
     } else {
       target[prop] = source[prop];
     }
   }
 } else {
   return source
 }
 return target
}