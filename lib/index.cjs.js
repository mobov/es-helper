'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var ClipboardJS = _interopDefault(require('clipboard'));

/**
 * @module  封装clipboard的复制功能
 *
 * @param text
 * @return {Promise<any>}
 *
 * @date      2018-03-01
 * @author   nocoolyoyo
 */

function clip2Board() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var domId = "clipDom".concat(new Date().getTime());
  var $dom = document.createElement('button');
  var $container = document.body;
  $dom.style.display = 'hidden';
  $dom.style.position = 'fixed';
  $dom.setAttribute('id', domId);
  $dom.setAttribute('data-clipboard-text', text);
  $container.appendChild($dom);
  var Clipboard = new ClipboardJS("#".concat(domId));
  return new Promise(function (resolve, reject) {
    Clipboard.on('success', function (e) {
      e.clearSelection();
      $container.removeChild($dom);
      resolve(e.text);
    });
    Clipboard.on('error', function (e) {
      $container.removeChild($dom);
      reject(e.text);
    });
    $dom.click();
  });
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof2(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof2 = function _typeof2(obj) {
      return typeof obj;
    };
  } else {
    _typeof2 = function _typeof2(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof2(obj);
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
});

/**
 * 正则MAP大全
 * @var EMAIL 邮箱
 * @var URL url
 * @var UPPER_CASE 小写
 * @var LOWER_CASE 大写
 * @var HEX_COLOR 十六进制颜色
 * @var STYLE_UNIT 样式表单位
 * @var UA_CLIENT_MOBILE 是否是手机
 * @var UA_OS_IOS IOS
 * @var UA_OS_ANDROID ANDROID
 * @var UA_OS_WINDOWS WINDOWS
 *
 * @author: nocoolyoyo
 * @date: 2018-03-11
 */
var RegexMap = {
  EMAIL: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  URL: /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/,
  UPPER_CASE: /^[A-Z]+$/,
  LOWER_CASE: /^[a-z]+$/,
  HEX_COLOR: /^#[0-9a-fA-F]{6}$/,
  STYLE_UNIT: /px|vw|rem|em|%$/,
  UA_CLIENT_MOBILE: /mobile/gi,
  UA_OS_IOS: /ipad|iphone|mac/gi,
  UA_OS_ANDROID: /android/gi,
  UA_OS_WINDOWS: /window/gi
};

/**
 * url校验
 *
 * @param    {string}  val   被校验参数
 * @returns   {boolean}
 *
 * @date       2018/2/19
 * @author   nocoolyoyo
 */

function isURL(val) {
  return RegexMap.url.test(val);
}
/**
 * 小写校验
 *
 * @param    {string}  val   被校验参数
 * @returns   {boolean}
 *
 * @date       2018/2/19
 * @author   nocoolyoyo
 */

function isLowerCase(val) {
  return RegexMap.lowerCase.test(val);
}
/**
 * 大写校验
 *
 * @param    {string}  val   被校验参数
 * @returns   {boolean}
 */

function isUpperCase(val) {
  return RegexMap.upperCase.test(val);
}
/**
 * 邮箱校验
 *
 * @param    {string}  val   被校验参数
 * @returns   {boolean}
 */

function isEmail(val) {
  return RegexMap.email.test(val);
}
/**
 * 空字符串校验
 * @param val
 * @returns {boolean}
 */

function isTrimEmpty(val) {
  if (typeof val !== 'string') {
    return false;
  }

  return val.trim() === '';
}
/**
 * 空对象校验
 * @param val
 * @return {boolean}
 */

function isEmptyObject(val) {
  if (_typeof_1(val) !== 'object') {
    return false;
  }

  return Object.keys(val).length === 0;
}
/**
 * 十六进制颜色
 * @param val
 * @return {boolean}
 */

function isHexColor(val) {
  if (typeof val !== 'string') {
    return false;
  }

  return RegexMap.hexColor.test(val);
}
/**
 * 样式表单位
 * @param val
 * @return {boolean}
 */

function isStyleUnit(val) {
  if (typeof val !== 'string') {
    return false;
  }

  return RegexMap.styleUnit.test(val);
}
/**
 * 是否是手机
 * @return {boolean}
 */

function isMobile() {
  return RegexMap.UA_CLIENT_MOBILE.test(navigator.userAgent);
}
/**
 * 是否是IOS系统
 * @return {boolean}
 */

function isOSIos() {
  return RegexMap.UA_OS_IOS.test(navigator.userAgent);
}
/**
 * 是否是ANDROID系统
 * @return {boolean}
 */

function isOSAndroid() {
  return RegexMap.UA_OS_ANDROID.test(navigator.userAgent);
}
/**
 * 是否是WINDOWS系统
 * @return {boolean}
 */

function isOSWindows() {
  return RegexMap.UA_OS_WINDOWS.test(navigator.userAgent);
}

/**
 * 设备信息，同时提供初始化方法在页面初始化挂载
 * Created by nocoolyoyo on 2018/3/11.
 */
var Client = {};
/**
 * @function 初始化硬件信息
 * @param lang
 * @param isMount
 */

function initClient(lang) {
  var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (isMobile()) {
    Client.type = 'mobile';
  } else {
    Client.type = 'pc';
  }

  if (isOSIos()) {
    Client.OS = 'IOS';
  } else if (isOSAndroid()) {
    Client.OS = 'Android';
  } else if (isOSWindows()) {
    Client.OS = 'Windows';
  }

  if (!!lang) {
    lang = lang.split('-');

    if (lang.length > 1) {
      lang = "".concat(lang[0], "-").concat(lang[1].toUpperCase());
    } else {
      lang = lang[0];
    }

    Client.lang = lang;
  } else {
    Client.lang = navigator.language;
  } // 挂载硬件信息到节点属性


  if (isMount) {
    var $root = document.documentElement;
    $root.setAttribute('data-client-os', Client.OS);
    $root.setAttribute('data-client-type', Client.type);
    $root.setAttribute('lang', Client.lang);

    if (Client.lang === 'ar') {
      $root.setAttribute('dir', 'rtl');
    }
  }
}
/**
 * @function 获取硬件信息
 * @returns {object}
 */

function getClient() {
  if (isEmptyObject(Client)) {
    initClient(null, false);
  }

  return Client;
}

/**
 * @function 将传入的属性名转为驼峰
 *
 * @param name 名字
 * @return {*}
 *
 * @author: nocoolyoyo
 * @date: 2018-03-11
 */
function camelCase(name) {
  var SPECIAL_CHARS_REGEXP = /([:\-_]+(.))/g;
  var MOZ_HACK_REGEXP = /^moz([A-Z])/;
  return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
}

/**
 * css样式相关
 */
/**
 * css样式构造
 * @param styleObj 文件后缀名
 * @returns {String}
 *
 * @author: nocoolyoyo
 * @date: 2018-03-11
 */

function strStyle(styleObj) {
  var cssStr = '';
  Object.keys(styleObj).forEach(function (key) {
    if (styleObj.hasOwnProperty(key)) cssStr += "".concat(key, ":").concat(styleObj[key], ";");
  }); // for (const key in styleObj) {
  //   if (styleObj.hasOwnProperty(key)) cssStr += `${key}:${styleObj[key]};`
  // }

  return cssStr;
}
/**
 *获取节点的某个属性的值
 * @param element {Object} 节点
 * @param styleName {String} 属性名字
 * @returns {*}
 * @author: nocoolyoyo
 * @date: 2018-03-11
 */

function getStyle(element, styleName) {
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);

  if (styleName === 'float') {
    styleName = 'cssFloat';
  }

  try {
    var computed = document.defaultView.getComputedStyle(element, '');
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch (e) {
    return element.style[styleName];
  }
}

/**
 * @function 获取指定的URL参数值
 * @param name
 * @return {string}
 *
 * @author: nocoolyoyo
 * @date: 2018-03-11
 */
function getUrlParam(name) {
  var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.href;
  if (typeof name !== 'string') console.error('要获取的参数名必须为字符串');

  var _url = decodeURI(url.replace(/\+/g, '%20'));

  var search = _url.substring(_url.lastIndexOf('?') + 1);

  var reg = new RegExp("(^|&)".concat(name, "=([^&]*)(&|$)"), 'i');
  var r = search.match(reg);
  if (r !== null) return decodeURI(r[2]);
  return '';
}
/**
 * @function 追加指定的URL参数值
 * @param params
 * @param url
 * @return {string}
 *
 * @author: nocoolyoyo
 * @date: 2018-09-04
 */

function appendUrlParam() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  // url已存在参数
  var tempStr = '';
  Object.keys(params).forEach(function (key) {
    tempStr += "&".concat(key, "=").concat(params[key]);
  });

  if (url.indexOf('?')) {
    tempStr = tempStr.replace(/\?/, '&');
  }

  url += tempStr;
  return url;
}

/**
 * @module 图片预加载完返回图片的信息
 * @param url  图片的url
 * @returns {Promise<any>}包含图片属性的promise的对象
 * @returns {Promise} {number} width  图片宽度
 * @returns {Promise} {number} height 图片高度
 *
 * @author: nocoolyoyo
 * @date: 2018-03-11
 */
function imageLoaded(url) {
  return new Promise(function (resolve, reject) {
    var img = new Image();

    img.onload = function () {
      resolve({
        width: this.width,
        height: this.height // todo:添加大小，图片类型等信息

      }); // real_width,real_height

      img = null;
    };

    img.onerror = function () {
      reject('load image fail');
    };

    img.src = url;
  });
}

/**
 * Created by nocoolyoyo on 2018/7/17.
 * 过渡动画函数
 */

/**
 * @param t 动画已消耗时间
 * @param b 原始值
 * @param c 目标值
 * @param d 持续时间
 */
function sineaseOut(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}
function easeIn(t, b, c, d) {
  return c * (t /= d) * t + b;
}
function strongEaseIn(t, b, c, d) {
  return c * (t /= d) * t * t * t * t + b;
}
function strongEaseOut(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
}
function sineaseIn(t, b, c, d) {
  return c * (t /= d) * t * t + b;
}

/**
 * Created by nocoolyoyo on 2018/7/17.
 */
/**
 * Y向将元素滚动到可见位置
 * @param scroller 要滚动的元素
 * @param viewer 需要可见的元素
 * @param justify 滚动偏差值
 * @param duration 过渡时间
 */

function scrollToYView(scroller, viewer) {
  var justify = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 500;

  if (!scroller || !viewer) {
    return;
  }

  var rect = viewer.getBoundingClientRect();
  var scroll = rect.top - scroller.clientHeight + rect.height + justify;
  var scrollStart = scroller.scrollTop;
  var direction = scroll > 0 ? '↓' : '↑';
  var start = null;

  var step = function step(timestamp) {
    if (!start) {
      start = timestamp;
    }

    var stepScroll = sineaseOut(timestamp - start, 0, scroll, duration);
    var total = scroller.scrollTop = scrollStart + stepScroll;

    if (direction === '↓' && total < scrollStart + scroll || direction === '↑' && total > scrollStart + scroll) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
}
/**
 * X向将元素滚动到可见位置
 * @param scroller 要滚动的容器元素
 * @param viewer 需要可见的元素
 * @param justify
 */

function scrollToXView(scroller, viewer) {
  var justify = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 500;

  if (!scroller || !viewer) {
    return;
  }

  var rect = viewer.getBoundingClientRect();
  var scroll = rect.left - scroller.clientWidth + rect.width * 2 + justify;
  var scrollStart = scroller.scrollLeft;
  var start = null;

  var step = function step(timestamp) {
    if (!start) {
      start = timestamp;
    }

    var stepScroll = sineaseOut(timestamp - start, 0, scroll, duration);
    var total = scroller.scrollLeft = scrollStart + stepScroll;

    if (total < scrollStart + scroll) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
}
/**
 * X向将元素滚动一段距离
 * @param scroller 要滚动的容器元素
 * @param justify 滚动偏差值： number或者string, top:表示滚动到头部， bottom表示底部
 * @param duration 滚动持续时间
 */

function scrollToX(scroller) {
  var justify = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;

  if (!scroller || justify === 0) {
    return;
  }

  var scrollStart = scroller.scrollLeft;
  var start = null;

  var step = function step(timestamp) {
    if (!start) {
      start = timestamp;
    }

    var stepScroll = sineaseOut(timestamp - start, 0, Math.abs(justify), duration);
    var total = scroller.scrollLeft = justify > 0 ? scrollStart + stepScroll : scrollStart - stepScroll;

    if (justify > 0 && total < scrollStart + justify || justify < 0 && total > scrollStart + justify) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
}
/**
 * Y向滚动到头部
 * @param scroller
 * @param justify 滚动偏差值： number或者string, top:表示滚动到头部， bottom表示底部
 * @param duration
 */

function scrollToY(scroller) {
  var justify = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;

  if (!scroller) {
    return;
  }

  var scroll = justify === 'top' ? -scroller.scrollTop : justify === 'bottom' ? scroller.scrollHeight - scroller.scrollTop : justify;
  var scrollStart = scroller.scrollTop;
  var direction = justify === 'top' || justify > 0 ? '↑' : '↓';
  var start = null;

  var step = function step(timestamp) {
    if (!start) {
      start = timestamp;
    }

    var stepScroll = sineaseOut(timestamp - start, 0, scroll, duration);
    var total = scroller.scrollTop = scrollStart + stepScroll;

    if (direction === '↓' && total < scrollStart + scroll || direction === '↑' && total > scrollStart + scroll) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
}

/**
 * Created by nocoolyoyo on 2018/6/11.
 */

exports.copy2Board = clip2Board;
exports.initClient = initClient;
exports.getClient = getClient;
exports.getStyle = getStyle;
exports.strStyle = strStyle;
exports.getUrlParam = getUrlParam;
exports.appendUrlParam = appendUrlParam;
exports.imageLoaded = imageLoaded;
exports.RegexMap = RegexMap;
exports.isTrimEmpty = isTrimEmpty;
exports.isEmail = isEmail;
exports.isLowerCase = isLowerCase;
exports.isUpperCase = isUpperCase;
exports.isURL = isURL;
exports.isEmptyObject = isEmptyObject;
exports.isHexColor = isHexColor;
exports.isStyleUnit = isStyleUnit;
exports.isOSWindows = isOSWindows;
exports.isOSIos = isOSIos;
exports.isOSAndroid = isOSAndroid;
exports.isMobile = isMobile;
exports.scrollToY = scrollToY;
exports.scrollToX = scrollToX;
exports.scrollToXView = scrollToXView;
exports.scrollToYView = scrollToYView;
exports.sineaseIn = sineaseIn;
exports.sineaseOut = sineaseOut;
exports.strongEaseIn = strongEaseIn;
exports.strongEaseOut = strongEaseOut;
exports.easeIn = easeIn;
