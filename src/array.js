export const clearArray = (arr) => {
	if (arr instanceof Array) {
		arr.splice(0, arr.length)
	}
}

export const arrayUnique = (arr) => {//Array<String|Number>去重
  let result = [];
  let str = [];
  let num = []
  arr.forEach(item => {
    if (isNaN(item)) {
      str.push(item)
    } else {
      num.push(item)
    }
  })
  arr = num.sort((a, b) => a - b).concat(str.sort());
  arr.forEach((a, i) => {
    if (result.includes(a)) return;
    result.push(a)
  })
  return result;
}
export const uniqueArrayByField = (arr, field = 'id') => {// Array<Object>根据某个字段去重
  const result = []
  arr.forEach(item => {
    const ids = result.map(i => i[field])
    if (!ids.includes(item[field])) {
      result.push(item)
    }
  })
  return result
}
