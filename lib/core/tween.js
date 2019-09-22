/**
 * Created by nocoolyoyo on 2018/7/17.
 */
//过渡算法
/**
 * @param t 动画已消耗时间
 * @param b 原始值
 * @param c 目标值
 * @param d 持续时间
 */
export function linear(t, b, c, d) {
    return c * t / d + b;
}
export function easeIn(t, b, c, d) {
    return c * (t /= d) * t + b;
}
export function strongEaseIn(t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
}
export function strongEaseOut(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
}
export function sineaseIn(t, b, c, d) {
    return c * (t /= d) * t * t + b;
}
export function sineaseOut(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
}
