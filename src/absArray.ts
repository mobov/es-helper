const absArray = (val: any): any[] => {
    if (!(val && val instanceof Array)) {
        return []
    }
    return val
}

export default absArray
