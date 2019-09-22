import scrollTo, { ScrollToOpts } from './core/scrollTo'

const scrollToY = ($scroller: HTMLElement, scrollOpts: ScrollToOpts) => {
    return scrollTo('y', $scroller, scrollOpts)
}

export default scrollToY

