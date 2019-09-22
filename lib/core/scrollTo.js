import { sineaseIn, strongEaseIn, strongEaseOut, easeIn, sineaseOut } from './tween';
var TRANS_FUNCS = ['linear', 'easeIn', 'strongEaseIn', 'strongEaseOut', 'sineaseIn', 'sineaseOut'];
var META_CODE = {
    x: {
        start: 'left',
        size: 'width',
        clientSize: 'clientWidth',
        scrollStart: 'scrollLeft',
        scrollSize: 'scrollWidth'
    },
    y: {
        start: 'top',
        size: 'height',
        clientSize: 'clientHeight',
        scrollStart: 'scrollTop',
        scrollSize: 'scrollHeight'
    }
};
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
export default function (axis, $scroller, _a) {
    if (axis === void 0) { axis = 'x'; }
    var _b = _a === void 0 ? {} : _a, _c = _b.justify, justify = _c === void 0 ? 0 : _c, _d = _b.target, target = _d === void 0 ? 0 : _d, _e = _b.duration, duration = _e === void 0 ? 500 : _e, _f = _b.transition, transition = _f === void 0 ? 'sineaseOut' : _f, _g = _b.position, position = _g === void 0 ? 'center' : _g;
    return new Promise(function (resolve) {
        if (!$scroller || !TRANS_FUNCS.includes(transition)) {
            resolve();
        }
        var META = META_CODE[axis];
        var isDomTarget = (typeof target !== 'number' && target !== 'start' && target !== 'end');
        var scroll = 0;
        // 滚动值计算
        if (isDomTarget) {
            var rect = target.getBoundingClientRect();
            var posScroll = position === 'start'
                ? 0
                : position === 'end'
                    // @ts-ignore
                    ? ($scroller[META.clientSize] - rect[META.size])
                    // @ts-ignore
                    : (($scroller[META.clientSize] - rect[META.size]) / 2);
            // @ts-ignore
            scroll = rect[META.start] - posScroll + justify;
        }
        else {
            // @ts-ignore
            scroll = (target === 'start'
                // @ts-ignore
                ? -$scroller[META.scrollStart]
                : target === 'end'
                    // @ts-ignore
                    ? $scroller[META.scrollSize] - $scroller[META.scrollStart] - $scroller[META.clientSize]
                    : target) + justify;
        }
        if (scroll === 0) {
            resolve();
        }
        // @ts-ignore
        var scrollValue = $scroller[META.scrollSize] - $scroller[META.clientSize];
        // @ts-ignore
        var scrollStart = $scroller[META.scrollStart];
        var start;
        var step;
        //eval(transition): number
        var transFunc = (function () {
            if (transition === 'linear') {
                return sineaseIn;
            }
            else if (transition === 'easeIn') {
                return easeIn;
            }
            else if (transition === 'strongEaseIn') {
                return strongEaseIn;
            }
            else if (transition === 'strongEaseOut') {
                return strongEaseOut;
            }
            else if (transition === 'sineaseIn') {
                return sineaseIn;
            }
            else if (transition === 'sineaseOut') {
                return sineaseOut;
            }
        })();
        // 滚动值矫正
        if (scroll > 0) {
            var maxScroll = scrollValue - scrollStart;
            scroll = scroll > maxScroll ? maxScroll : scroll;
            // @ts-ignore
            step = function (timestamp) {
                if (!start) {
                    start = timestamp;
                }
                // @ts-ignore
                var stepScroll = transFunc(timestamp - start, 0, scroll, duration);
                stepScroll = stepScroll > scroll ? scroll : stepScroll;
                // @ts-ignore
                $scroller[META.scrollStart] = scrollStart + stepScroll;
                if (scroll > stepScroll) {
                    // @ts-ignore
                    requestAnimationFrame(step);
                }
                else {
                    resolve();
                }
            };
        }
        else {
            // @ts-ignore
            var maxScroll = -$scroller[META.scrollStart];
            scroll = scroll < maxScroll ? maxScroll : scroll;
            // @ts-ignore
            step = function (timestamp) {
                if (!start) {
                    start = timestamp;
                }
                // @ts-ignore
                var stepScroll = transFunc(timestamp - start, 0, scroll, duration);
                stepScroll = stepScroll < scroll ? scroll : stepScroll;
                // @ts-ignore
                $scroller[META.scrollStart] = scrollStart + stepScroll;
                if (scroll < stepScroll) {
                    // @ts-ignore
                    requestAnimationFrame(step);
                }
                else {
                    resolve();
                }
            };
        }
        // @ts-ignore
        requestAnimationFrame(step);
    });
}
