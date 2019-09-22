export interface ScrollToOpts {
    target: HTMLElement | number | 'start' | 'end';
    justify?: number;
    duration?: number;
    transition?: 'linear' | 'easeIn' | 'strongEaseIn' | 'strongEaseOut' | 'sineaseIn' | 'sineaseOut';
    position?: 'center' | 'start' | 'end';
}
/**
 * 滚动基础方法
 * @param axis 滚动轴线
 * @param $scroller
 * @param justify 滚动偏差值： number, 复数向下滚动， 正数向上滚动
 * @param target 滚动目标, HTMLElement或者string, start:表示滚动到头部， end表示底部,
 * @param duration,
 * @param transition
 * @param onFinish
 */
export default function (axis: "x" | "y" | undefined, $scroller: HTMLElement, { justify, target, duration, transition, position, }?: ScrollToOpts): Promise<void>;
