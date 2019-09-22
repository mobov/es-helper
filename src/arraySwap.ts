const arraySwap = <T = any>(arr: T[], index1: number, index2: number): void => {
    arr.splice(index2, 0, arr.splice(index1, 1)[0])
}

export default arraySwap
