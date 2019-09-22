import { sineaseIn, linear, strongEaseIn, strongEaseOut, easeIn, sineaseOut } from './tween'

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

export interface ScrollToOpts {
    target: HTMLElement | number |  'start' | 'end'
    justify?: number
    duration?: number
    transition?: 'linear' | 'easeIn' | 'strongEaseIn' | 'strongEaseOut' | 'sineaseIn' | 'sineaseOut'
    position?: 'center' |  'start' | 'end'
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
export default function (
	axis: 'x' | 'y' = 'x',
	$scroller: HTMLElement,
	{
        justify = 0,
		target = 0,
		duration = 500,
		transition = 'sineaseOut',
		position = 'center',
	} = {} as ScrollToOpts
): Promise<void> {
	return new Promise((resolve) => {
		if ( !$scroller || !TRANS_FUNCS.includes(transition)) {
			resolve()
		}
		const META = META_CODE[axis]
		const isDomTarget = (typeof target !== 'number' && target !== 'start' && target !== 'end')
		let scroll = 0

		// 滚动值计算
		if (isDomTarget) {
			const rect = (target as HTMLElement).getBoundingClientRect()
			const posScroll = position === 'start'
				? 0
				: position === 'end'
					// @ts-ignore
					? ($scroller[META.clientSize] - rect[META.size])
                    // @ts-ignore
					: (($scroller[META.clientSize] - rect[META.size]) / 2)
            // @ts-ignore
			scroll = rect[META.start] - posScroll  + justify
		} else {
            // @ts-ignore
			scroll = (
				target === 'start'
                    // @ts-ignore
					? - $scroller[META.scrollStart]
					: target === 'end'
                    // @ts-ignore
					? $scroller[META.scrollSize] - $scroller[META.scrollStart] - $scroller[META.clientSize]
					: target
			) + justify
		}

		if (scroll === 0) { resolve() }
        // @ts-ignore
		const scrollValue = $scroller[META.scrollSize] - $scroller[META.clientSize]
        // @ts-ignore
		const scrollStart = $scroller[META.scrollStart]

		let start: number
		let step: number
		//eval(transition): number

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
            // @ts-ignore
			step = (timestamp) => {
				if (!start) { start = timestamp }
                // @ts-ignore
				let stepScroll = transFunc(timestamp - start, 0, scroll, duration)
				stepScroll = stepScroll > scroll ? scroll : stepScroll
                // @ts-ignore
				$scroller[META.scrollStart] = scrollStart + stepScroll

				if (scroll > stepScroll) {
                    // @ts-ignore
					requestAnimationFrame(step)
				}  else {
					resolve()
				}
			}
		} else {
            // @ts-ignore
			const maxScroll = - $scroller[META.scrollStart]
			scroll = scroll < maxScroll ? maxScroll : scroll
            // @ts-ignore
			step = (timestamp) => {
				if (!start) { start = timestamp }
                // @ts-ignore
				let stepScroll = transFunc(timestamp - start, 0, scroll, duration)
				stepScroll = stepScroll < scroll ? scroll : stepScroll
                // @ts-ignore
				$scroller[META.scrollStart] = scrollStart + stepScroll

				if (scroll < stepScroll) {
                    // @ts-ignore
					requestAnimationFrame(step)
				} else {
					resolve()
				}
			}
		}
        // @ts-ignore
		requestAnimationFrame(step)
	})
}
