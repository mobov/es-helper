import { sineaseIn, linear, strongEaseIn, strongEaseOut, easeIn, sineaseOut } from "./tween";

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
		position = 'center',
	}
) {
	return new Promise((resolve) => {
		if ( !$scroller || !TRANS_FUNCS.includes(transition)) {
			resolve()
		}
		const META = META_CODE[axis]
		const isDomTarget = (typeof target !== 'number' && target !== 'start' && target !== 'end')
		let scroll = 0

		// 滚动值计算
		if (isDomTarget) {
			const rect = target.getBoundingClientRect()
			// scroll = rect[META.start] - ($scroller[META.clientSize] - rect[META.size]) / 2 + justify
			const posScroll = position === 'start'
				? 0
				: position === 'end'
					? ($scroller[META.clientSize] - rect[META.size])
					: (($scroller[META.clientSize] - rect[META.size]) / 2)
			scroll = rect[META.start] - posScroll  + justify
		} else {
			scroll = (
				target === 'start'
					? - $scroller[META.scrollStart]
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
		//eval(transition)

		const transFunc = (()=>{
			if (transition === 'linear') {
				return sineaseIn
			} else if(transition === 'easeIn') {
				return easeIn
			} else if(transition === 'strongEaseIn') {
				return strongEaseIn
			} else if(transition === 'strongEaseOut') {
				return strongEaseOut
			} else if(transition === 'sineaseIn') {
				return sineaseIn
			} else if(transition === 'sineaseOut') {
				return sineaseOut
			}
		})()

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

