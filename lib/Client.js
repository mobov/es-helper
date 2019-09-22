/**
 * 设备信息，同时提供初始化方法在页面初始化挂载
 * Created by nocoolyoyo on 2018/3/11.
 */
import isMobile from './isMobile';
import isIphone from './isIphone';
import isAndroid from './isAndroid';
import isWindows from './isWindows';
import isLinux from './isLinux';
import isMac from './isMac';
var ClientConstructor = /** @class */ (function () {
    function ClientConstructor() {
        this.lang = navigator.language;
        this.type = 'pc';
        this.version = '';
        this.OS = 'Windows';
    }
    ClientConstructor.prototype.init = function (lang, isMount) {
        if (lang === void 0) { lang = ''; }
        if (isMount === void 0) { isMount = true; }
        if (isMobile(navigator.userAgent)) {
            this.type = 'mobile';
        }
        else {
            this.type = 'pc';
        }
        console.log(this.type);
        if (isIphone(navigator.userAgent)) {
            this.OS = 'IOS';
        }
        else if (isAndroid(navigator.userAgent)) {
            this.OS = 'Android';
        }
        else if (isWindows(navigator.userAgent)) {
            this.OS = 'Windows';
        }
        else if (isLinux(navigator.userAgent)) {
            this.OS = 'Linux';
        }
        else if (isMac(navigator.userAgent)) {
            this.OS = 'Mac';
        }
        if (this.OS === 'Android') {
            // @ts-ignore
            var match = navigator.userAgent.match(/Android (\d+(\.\d+)+)/);
            if (match) {
                this.version = match[1];
            }
        }
        else if (this.OS === 'IOS') {
            // @ts-ignore
            var match = navigator.userAgent.match(/OS (\d+(_\d+)+)/);
            if (match) {
                this.version = match[1].replace(/_/g, '.');
            }
        }
        else {
            this.version = '';
        }
        if (!!lang) {
            var langMap = lang.split('-');
            if (langMap.length > 1) {
                lang = langMap[0] + "-" + langMap[1].toUpperCase();
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
            var $root = document.documentElement;
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
    };
    return ClientConstructor;
}());
var Client = new ClientConstructor();
export default Client;
