/**
 * Created by nocoolyoyo on 2018/7/17.
 */
import { sineaseOut } from './tween'

/**
 * Y向将元素滚动到可见位置
 * @param scroller 要滚动的元素
 * @param viewer 需要可见的元素
 * @param justify 滚动偏差值
 * @param duration 过渡时间
 */
export function scrollToYView(scroller, viewer, justify = 0, duration = 500) {
  if (!scroller || !viewer) { return }

  const rect = viewer.getBoundingClientRect()
  const scroll = rect.top - scroller.clientHeight + rect.height + justify
  const scrollStart = scroller.scrollTop
  const direction = (scroll > 0) ? '↓' : '↑'

  let start = null
  const step = (timestamp) => {
    if (!start) { start = timestamp }
    const stepScroll = sineaseOut(timestamp - start, 0, scroll, duration)
    const total = scroller.scrollTop = scrollStart + stepScroll
    if (
      (direction === '↓' && (total < scrollStart + scroll)) ||
      (direction === '↑' && (total > scrollStart + scroll))
    ) {
      requestAnimationFrame(step)
    }
  }
  requestAnimationFrame(step)
}

/**
 * X向将元素滚动到可见位置
 * @param scroller 要滚动的容器元素
 * @param viewer 需要可见的元素
 * @param justify
 */
export function scrollToXView(scroller, viewer, justify = 0, duration = 500) {
  if (!scroller || !viewer) { return }

  const rect = viewer.getBoundingClientRect()
  const scroll = rect.left - scroller.clientWidth + rect.width * 2 + justify
  const scrollStart = scroller.scrollLeft
  const direction = (scroll > 0) ? '←' : '→'

  let start = null
  const step = (timestamp) => {
    if (!start) { start = timestamp }
    const stepScroll = sineaseOut(timestamp - start, 0, scroll, duration)
    const total = scroller.scrollLeft = scrollStart + stepScroll
    if (total < scrollStart + scroll) {
      requestAnimationFrame(step)
    }
  }
  requestAnimationFrame(step)
}
/**
 * X向将元素滚动一段距离
 * @param scroller 要滚动的容器元素
 * @param justify 滚动偏差值： number或者string, top:表示滚动到头部， bottom表示底部
 * @param duration 滚动持续时间
 */
export function scrollToX(scroller, justify = 0, duration = 500) {
  if (!scroller || justify === 0) { return }
  const scrollStart = scroller.scrollLeft
  let start = null

  const step = (timestamp) => {
    if (!start) { start = timestamp }
    const stepScroll = sineaseOut(timestamp - start, 0, Math.abs(justify), duration)
    const total = scroller.scrollLeft = justify > 0 ? scrollStart + stepScroll : scrollStart - stepScroll
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
 * @param scroller
 * @param justify 滚动偏差值： number或者string, top:表示滚动到头部， bottom表示底部
 * @param duration
 */
export function scrollToY(scroller, justify = 0, duration = 500) {
  if (!scroller) { return }

  const scroll = justify === 'top' ? -scroller.scrollTop
      : justify === 'bottom' ? scroller.scrollHeight - scroller.scrollTop
      : justify
  const scrollStart = scroller.scrollTop
  const direction = (justify === 'top' || justify > 0) ? '↑' : '↓'

  let start = null
  const step = (timestamp) => {
    if (!start) { start = timestamp }
    const stepScroll = sineaseOut(timestamp - start, 0, scroll, duration)
    const total = scroller.scrollTop = scrollStart + stepScroll
    if (
      (direction === '↓' && (total < scrollStart + scroll)) ||
      (direction === '↑' && (total > scrollStart + scroll))
    ) {
      requestAnimationFrame(step)
    }
  }
  requestAnimationFrame(step)
}
