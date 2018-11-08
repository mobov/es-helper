import {ScrollFunc} from "@megmore/es-helper";

/**
 * Created by nocoolyoyo on 2018/11/3.
 */
declare module "@megmore/es-helper" {
    // device
    export function initClient(lang: string, isMount?: boolean): string

    export function getClient(): any

    // imageLoaded

    export function imageLoaded(url: string): Promise<any>

    // urlParams

    export function getUrlParam(name: string, url: string): string

    export function appendUrlParams(params: any, url: string): string

    // easeScroll
    interface ScrollFunc {
        ($scroller: HTMLElement,
         options: {
             target: HTMLElement | number |  'start' | 'end'
             justify ?: number
             duration ?: number
             transition ?: 'linear' | 'easeIn' | 'strongEaseIn' | 'strongEaseOut' | 'sineaseIn' | 'sineaseOut'
         }): Promise<any>,
    }

    export const scrollToX: ScrollFunc

    export const scrollToY: ScrollFunc

    // styleUtils
    export function strStyle(val: any): string
    export function getStyle(dom: HTMLElement, attr: string): string
    export function camelCase(name: string): string

    // validate
    export function isStyleUnit(val: string): boolean
    export function isHexColor(val: string): boolean

}