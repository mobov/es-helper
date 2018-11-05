/**
 * Created by nocoolyoyo on 2018/11/3.
 */
declare namespace EsHelper {

    export function scrollToX(
        $scroller: HTMLElement,
        options: {
            target: HTMLElement | number |  'start' | 'end' ;
            justify ?: number;
            duration ?: number;
            transition ?: 'linear' | 'easeIn' | 'strongEaseIn' | 'strongEaseOut' | 'sineaseIn' | 'sineaseOut';
        }
    ): any

    export function scrollToY(
        $scroller: HTMLElement,
        options: {
            target: HTMLElement | number |  'start' | 'end' ;
            justify ?: number;
            duration ?: number;
            transition ?: 'linear' | 'easeIn' | 'strongEaseIn' | 'strongEaseOut' | 'sineaseIn' | 'sineaseOut';
        }
    ): any

    export function strStyle(val: any): string
    export function getStyle(dom: HTMLElement, attr: string): string

    export function isStyleUnit(val: string): boolean
    export function isHexColor(val: string): boolean
    export function isStyleUnit(val: string): boolean
}