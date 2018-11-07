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
	return c * t / d + b
}
export function easeIn(t, b, c, d) {
	return c * (t /= d) * t + b
}
export function strongEaseIn(t, b, c, d) {
	return c * (t /= d) * t * t * t * t + b
}
export function strongEaseOut(t, b, c, d) {
	return c * ((t = t / d - 1) * t * t * t * t + 1) + b
}
export function sineaseIn(t, b, c, d) {
	return c * (t /= d) * t * t + b
}
export function sineaseOut(t, b, c, d) {
	return c * ((t = t / d - 1) * t * t + 1) + b
}

const TRANS_FUNCS = ['linear', 'easeIn', 'strongEaseIn', 'strongEaseOut', 'sineaseIn', 'sineaseOut']

const META_CODE = {
	x: {
		start: 'left',
		size: 'width',
		clientSize: 'clientWidth',
		scrollStart: 'scrollLeft',
		scrollSize: 'scrollWidth',
	},
	y: {
		start: 'top',
		size: 'height',
		clientSize: 'clientHeight',
		scrollStart: 'scrollTop',
		scrollSize: 'scrollHeight',
	}
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
function scrollFunc (
	axis = 'x',
	$scroller,
	{
		justify = 0,
		target = 0,
		duration = 500,
		transition = 'sineaseOut',
	}
) {
	return new Promise((resolve) => {
		if ( !$scroller || !TRANS_FUNCS.includes(transition)) {
			resolve()
		}
		const META = META_CODE[axis]
		let scroll = 0

		// 滚动值计算
		if (
			typeof target !== 'number' && target !== 'start' && target !== 'end'
		) {
			const rect = target.getBoundingClientRect()
			scroll = rect[META.start] - ($scroller[META.clientSize] - rect[META.size]) / 2 + justify
		} else {
			scroll = (
				target === 'start'
					? $scroller[META.scrollStart]
					: target === 'end'
					? $scroller[META.scrollSize] - $scroller[META.scrollStart] - $scroller[META.clientSize]
					: target
			) + justify
		}

		if (scroll === 0) { resolve() }

		const scrollValue = $scroller[META.scrollSize] - $scroller[META.clientSize]

		const scrollStart = $scroller[META.scrollStart]

		let start = null
		let step = null
		const transFunc = eval(transition)
		// 滚动值矫正
		if (scroll > 0) {
			const maxScroll = scrollValue - scrollStart
			scroll = scroll > maxScroll ? maxScroll : scroll

			step = (timestamp) => {
				if (!start) { start = timestamp }
				let stepScroll = transFunc(timestamp - start, 0, scroll, duration)
				stepScroll = stepScroll > scroll ? scroll : stepScroll
				$scroller[META.scrollStart] = scrollStart + stepScroll

				if (scroll > stepScroll) {
					requestAnimationFrame(step)
				}  else {
					resolve()
				}
			}
		} else {
			const maxScroll = - $scroller[META.scrollStart]
			scroll = scroll < maxScroll ? maxScroll : scroll

			step = (timestamp) => {
				if (!start) { start = timestamp }
				let stepScroll = transFunc(timestamp - start, 0, scroll, duration)
				stepScroll = stepScroll < scroll ? scroll : stepScroll
				$scroller[META.scrollStart] = scrollStart + stepScroll

				if (scroll < stepScroll) {
					requestAnimationFrame(step)
				} else {
					resolve()
				}
			}
		}
		requestAnimationFrame(step)
	})
}

export function scrollToX() {
	return scrollFunc('x', ...arguments)
}

export function scrollToY() {
	return scrollFunc('y', ...arguments)
}

