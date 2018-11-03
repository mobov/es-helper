/**
 * Created by nocoolyoyo on 2018/11/3.
 */

export function scrollToX(
    $scroller: HTMLElement,
    options: {
        target: HTMLElement | number |  'start' | 'end' ;
        justify ?: number;
        duration ?: number;
        transition ?: 'linear' | 'easeIn' | 'strongEaseIn' | 'strongEaseOut' | 'sineaseIn' | 'sineaseOut';
    }
): Promise

export function scrollToY(
    $scroller: HTMLElement,
    options: {
        target: HTMLElement | number |  'start' | 'end' ;
        justify ?: number;
        duration ?: number;
        transition ?: 'linear' | 'easeIn' | 'strongEaseIn' | 'strongEaseOut' | 'sineaseIn' | 'sineaseOut';
    }
): Promise
