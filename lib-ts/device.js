/**
 * 设备信息，同时提供初始化方法在页面初始化挂载
 * Created by nocoolyoyo on 2018/3/11.
 */
import { isMobile, isOSAndroid, isOSIos, isOSWindows } from './validate';
class Client {
    constructor() {
        this.lang = navigator.language;
        this.type = 'pc';
        this.version = '';
        this.OS = 'Windows';
    }
    init(lang = '', isMount = true) {
        if (isMobile()) {
            this.type = 'mobile';
        }
        else {
            this.type = 'pc';
        }
        console.log(this.type);
        if (isOSIos()) {
            this.OS = 'IOS';
        }
        else if (isOSAndroid()) {
            this.OS = 'Android';
        }
        else if (isOSWindows()) {
            this.OS = 'Windows';
        }
        if (isOSAndroid()) {
            // @ts-ignore
            const match = navigator.userAgent.match(/Android (\d+(\.\d+)+)/);
            if (match) {
                this.version = match[1];
            }
        }
        else if (isOSIos()) {
            // @ts-ignore
            const match = navigator.userAgent.match(/OS (\d+(_\d+)+)/);
            if (match) {
                this.version = match[1].replace(/_/g, '.');
            }
        }
        else {
            this.version = '';
        }
        console.log(this.OS);
        if (!!lang) {
            const langMap = lang.split('-');
            if (langMap.length > 1) {
                lang = `${langMap[0]}-${langMap[1].toUpperCase()}`;
            }
            else {
                lang = langMap[0];
            }
            this.lang = lang;
        }
        else {
            this.lang = navigator.language;
        }
        // 挂载硬件信息到节点属性
        if (isMount) {
            const $root = document.documentElement;
            $root.setAttribute('data-client-os', this.OS);
            $root.setAttribute('data-client-type', this.type);
            $root.setAttribute('lang', this.lang);
            if (this.lang === 'ar') {
                $root.setAttribute('dir', 'rtl');
            }
            else if ($root.hasAttribute('dir')) {
                $root.removeAttribute('dir');
            }
        }
    }
}
export default new Client();
//# sourceMappingURL=device.js.map