/**
 * Created by nocoolyoyo on 2018/11/3.
 */
declare module "@megmore/es-helper" {
    // deepCopy
    export function deepCopy(source: any): any
    // device
    export function initClient(lang: string, isMount?: boolean): string

    export function getClient(): any

    // imageLoaded

    export function imageLoaded(url: string): Promise<any>

    // urlParams

    export function getUrlParam(name: string, url?: string): string

    export function getUrlParams(url?: string): string

    export function appendUrlParams(params: any, url?: string, sort?: boolean): string

    // easeScroll
    interface ScrollFunc {
        ($scroller: HTMLElement,
         options: {
             target: HTMLElement | number |  'start' | 'end'
             position: 'center' |  'start' | 'end'
             justify ?: number
             duration ?: number
             transition ?: 'linear' | 'easeIn' | 'strongEaseIn' | 'strongEaseOut' | 'sineaseIn' | 'sineaseOut'
         }): Promise<void>,
    }

    export const scrollToX: ScrollFunc

    export const scrollToY: ScrollFunc

    // styleUtils
    export function strStyle(val: any): string
    export function getStyle(dom: HTMLElement, attr: string): string
    export function camelCase(name: string): string

    // validate
    export function isTrimEmpty(val: string): boolean
    export function isEmail(val: string): boolean
    export function isLowerCase(val: string): boolean
    export function isUpperCase(val: string): boolean
    export function isHexColor(val: string): boolean
    export function isStyleUnit(val: string): boolean
    export function isURL(val: string): boolean
    export function isEmptyObject(val: string): boolean
    export function isOSWindows(): boolean
    export function isOSIos(): boolean
    export function isOSAndroid(): boolean
    export function isMobile(): boolean
}
