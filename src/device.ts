/**
 * 设备信息，同时提供初始化方法在页面初始化挂载
 * Created by nocoolyoyo on 2018/3/11.
 */
import { isMobile, isOSAndroid, isOSIos, isOSWindows, isEmptyObject } from './validate'

class Client {
    lang: string = navigator.language
    type: 'mobile' | 'pc' = 'pc'
    version: string = ''
    OS: 'IOS' | 'Android' | 'Windows' = 'Windows'

    constructor () {
        this.init()
    }

    init (lang: string = '', isMount: boolean = true) {
        if (/Android (\d+(\.\d+)+)/.test(navigator.userAgent)) {
            // @ts-ignore
            this.version = navigator.userAgent.match(/Android (\d+(\.\d+)+)/)[1]
        } else if (/iPhone OS (\d+(_\d+)+)/.test(navigator.userAgent)) {
            // @ts-ignore
            this.version = navigator.userAgent.match(/iPhone OS (\d+(_\d+)+)/)[1].replace(/_/g, '.')
        } else {
            this.version = ''
        }

        if (isMobile()) {
            this.type = 'mobile'

        } else {
            this.type = 'pc'
        }

        if (isOSIos()) {
            this.OS = 'IOS'
        } else if (isOSAndroid()) {
            this.OS = 'Android'
        } else if (isOSWindows()) {
            this.OS = 'Windows'
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

export default new Client()

