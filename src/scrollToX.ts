import scrollTo, { ScrollToOpts } from './core/scrollTo'

const scrollToX = ($scroller: HTMLElement, scrollOpts: ScrollToOpts) => {
    return scrollTo('x', $scroller, scrollOpts)
}

export default scrollToX
