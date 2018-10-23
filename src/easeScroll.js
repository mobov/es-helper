/**
 * Created by nocoolyoyo on 2018/7/17.
 */
/**
 * @param t 动画已消耗时间
 * @param b 原始值
 * @param c 目标值
 * @param d 持续时间
 */
function linear(t, b, c, d) {
	return c * t / d + b
}
function easeIn(t, b, c, d) {
	return c * (t /= d) * t + b
}
function strongEaseIn(t, b, c, d) {
	return c * (t /= d) * t * t * t * t + b
}
function strongEaseOut(t, b, c, d) {
	return c * ((t = t / d - 1) * t * t * t * t + 1) + b
}
function sineaseIn(t, b, c, d) {
	return c * (t /= d) * t * t + b
}
function sineaseOut(t, b, c, d) {
	return c * ((t = t / d - 1) * t * t + 1) + b
}
const TRANS_FUNCS = ['linear', 'easeIn', 'strongEaseIn', 'strongEaseOut', 'sineaseIn', 'sineaseOut']
//
// /**
//  * X向将元素滚动到可见位置
//  * @param $scroller 要滚动的容器元素
//  * @param $viewer 需要可见的元素
//  * @param justify 滚动偏差值
//  * @param duration 过渡时间
//  * @param transition
//  */
// export function scrollToXView($scroller, { $viewer, justify = 0, duration = 500, transition = 'sineaseOut' }) {
//   if (!$scroller || !$viewer) { return }
// 	if (!TRANS_FUNCS.includes(transition)) { return }
//   const rect = $viewer.getBoundingClientRect()
//   const scroll = rect.left - $scroller.clientWidth + rect.width * 2 + justify
//   const scrollStart = $scroller.scrollLeft
// 	const transFunc = eval(transition)
//   let start = null
//   const step = (timestamp) => {
//     if (!start) { start = timestamp }
//     const stepScroll = transFunc(timestamp - start, 0, scroll, duration)
//     const total = $scroller.scrollLeft = scrollStart + stepScroll
//     if (total < scrollStart + scroll) {
//       requestAnimationFrame(step)
//     }
//   }
//   requestAnimationFrame(step)
// }
/**
 * X向将元素滚动一段距离
 * @param $scroller 要滚动的容器元素
 * @param justify 滚动偏差值： number或者string, top:表示滚动到头部， bottom表示底部
 * @param duration 滚动持续时间
 * @param transition
 */
export function scrollToX($scroller, { justify = 0, duration = 500, transition = 'sineaseOut' }) {
  if (!$scroller || justify === 0) { return }
	if (!TRANS_FUNCS.includes(transition)) { return }
  const scrollStart = $scroller.scrollLeft
	const transFunc = eval(transition)
	let start = null
  const step = (timestamp) => {
    if (!start) { start = timestamp }
    const stepScroll = transFunc(timestamp - start, 0, Math.abs(justify), duration)
    const total = $scroller.scrollLeft = justify > 0 ? scrollStart + stepScroll : scrollStart - stepScroll
    if (
      (justify > 0) && (total < scrollStart + justify) ||
      (justify < 0) && (total > scrollStart + justify)
    ) {
      requestAnimationFrame(step)
    }
  }
  requestAnimationFrame(step)
}
/**
 * Y向滚动到头部
 * @param $scroller
 * @param justify 滚动偏差值： number或者string, start:表示滚动到头部， end表示底部, 复数向下滚动， 正数向上滚动
 * @param $viewer,
 * @param duration,
 * @param transition
 */
export function scrollToY($scroller, { justify = 0, $viewer = null, duration = 500, transition = 'sineaseOut' }) {
  if (!$scroller || justify === 0) { return }
	if (!TRANS_FUNCS.includes(transition)) { return }

  const scroll = (() => {
    if ($viewer) {
	    const rect = $viewer.getBoundingClientRect()
	    return rect.top - $scroller.clientHeight + rect.height + justify
    } else {
	    return justify === 'start' ? - $scroller.scrollTop
		    : justify === 'end' ? $scroller.scrollHeight - $scroller.clientHeight - $scroller.scrollTop
			    : -justify
    }
  })()
  const scrollStart = $scroller.scrollTop
  const direction = (justify === 'start' || justify > 0) ? '↑' : '↓'

  if (
    (direction === '↓' && scrollStart === $scroller.scrollHeight - $scroller.clientHeight) ||
    (direction === '↑' && scrollStart === 0)
  ) { return }

  const transFunc = eval(transition)

  let start = null
  const step = (timestamp) => {
    if (!start) { start = timestamp }
    const stepScroll = transFunc(timestamp - start, 0, scroll, duration)
    const total = $scroller.scrollTop = scrollStart + stepScroll

    if (
      (direction === '↓' && (total < scrollStart + scroll)) ||
      (direction === '↑' && (total > scrollStart + scroll))
    ) {
      requestAnimationFrame(step)
    }
  }
  requestAnimationFrame(step)
}
