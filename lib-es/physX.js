// 物理引擎算法
/**
 * dom元素是否相交（碰撞）
 * @param r1
 * @param r2
 */
export function haveDomRectIntersection(r1, r2) {
    return !(r2.x > r1.x + r1.width ||
        r2.x + r2.width < r1.x ||
        r2.y > r1.y + r1.height ||
        r2.y + r2.height < r1.y);
}
//# sourceMappingURL=physX.js.map