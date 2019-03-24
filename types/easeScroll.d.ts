interface ScrollFuncOpts {
    target: HTMLElement | number | 'start' | 'end';
    justify: number;
    duration: number;
    transition: 'linear' | 'easeIn' | 'strongEaseIn' | 'strongEaseOut' | 'sineaseIn' | 'sineaseOut';
    position: 'center' | 'start' | 'end';
}
export declare function scrollToX($scroller: HTMLElement, scrollOpts: ScrollFuncOpts): Promise<void>;
export declare function scrollToY($scroller: HTMLElement, scrollOpts: ScrollFuncOpts): Promise<void>;
export {};
