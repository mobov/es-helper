/**
 * 设备信息，同时提供初始化方法在页面初始化挂载
 * Created by nocoolyoyo on 2018/3/11.
 */
import isMobile from './isMobile'
import isIphone from './isIphone'
import isAndroid from './isAndroid'
import isWindows from './isWindows'
import isLinux from './isLinux'
import isMac from './isMac'

class ClientConstructor {
    lang: string = navigator.language
    type: 'mobile' | 'pc' = 'pc'
    version: string = ''
    OS: 'IOS' | 'Android' | 'Windows'  | 'Linux' | 'Mac'= 'Windows'

    constructor() { }

    init(lang: string = '', isMount: boolean = true) {

        if (isMobile(navigator.userAgent)) {
            this.type = 'mobile'
        } else {
            this.type = 'pc'
        }
        console.log(this.type)
        if (isIphone(navigator.userAgent)) {
            this.OS = 'IOS'
        } else if (isAndroid(navigator.userAgent)) {
            this.OS = 'Android'
        } else if (isWindows(navigator.userAgent)) {
            this.OS = 'Windows'
        } else if (isLinux(navigator.userAgent)) {
            this.OS = 'Linux'
        } else if (isMac(navigator.userAgent)) {
            this.OS = 'Mac'
        }
        if (this.OS === 'Android') {
            // @ts-ignore
            const match = navigator.userAgent.match(/Android (\d+(\.\d+)+)/)
            if (match) {
                this.version = match[1]
            }
        } else if (this.OS === 'IOS') {
            // @ts-ignore
            const match = navigator.userAgent.match(/OS (\d+(_\d+)+)/)
            if (match) {
                this.version = match[1].replace(/_/g, '.')
            }
        } else {
            this.version = ''
        }


        if (!!lang) {
            const langMap = lang.split('-')
            if (langMap.length > 1) {
                lang = `${langMap[0]}-${langMap[1].toUpperCase()}`
            } else {
                lang = langMap[0]
            }
            this.lang = lang
        } else {
            this.lang = navigator.language
        }
        // 挂载硬件信息到节点属性
        if (isMount) {
            const $root = document.documentElement
            $root.setAttribute('data-client-os', this.OS)
            $root.setAttribute('data-client-type', this.type)
            $root.setAttribute('lang', this.lang)

            if (this.lang === 'ar') {
                $root.setAttribute('dir', 'rtl')
            } else if ($root.hasAttribute('dir')) {
                $root.removeAttribute('dir')
            }
        }
    }
}
const Client = new ClientConstructor()

export default Client

