const arrayClear = (arr: any[]) => {
    if (arr instanceof Array) {
        arr.splice(0, arr.length)
    }
}

export default arrayClear
