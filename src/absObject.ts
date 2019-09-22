const absObject = (val: any): any => {
    if (!(val && val instanceof Object)) {
        return {}
    }
    return val
}

export default absObject
