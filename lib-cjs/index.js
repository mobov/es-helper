'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var ClipboardJS = _interopDefault(require('clipboard'));

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

var arrayClear = function arrayClear(arr) {
  if (arr instanceof Array) {
    arr.splice(0, arr.length);
  }
};
var arrayUnique = function arrayUnique(arr) {
  var result = [];
  var str = [];
  var num = [];
  arr.forEach(function (item) {
    if (isNaN(item)) {
      str.push(item);
    } else {
      num.push(item);
    }
  });
  arr = num.sort(function (a, b) {
    return a - b;
  }).concat(str.sort());
  arr.forEach(function (a) {
    if (result.includes(a)) {
      return;
    }

    result.push(a);
  });
  return result;
};
var arrayUniqueByField = function arrayUniqueByField(arr) {
  var field = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'id';
  var result = [];
  arr.forEach(function (item) {
    var ids = result.map(function (i) {
      return i[field];
    });

    if (!ids.includes(item[field])) {
      result.push(item);
    }
  });
  return result;
};
function deepCopy(source) {
  var target;

  if (source instanceof Array) {
    target = [];
    source.forEach(function (item) {
      if (_typeof_1(item) === 'object') {
        target.push(deepCopy(item));
      } else {
        target.push(item);
      }
    });
  } else if (source instanceof Object) {
    target = {};

    for (var prop in source) {
      if (_typeof_1(source[prop]) === 'object') {
        target[prop] = deepCopy(source[prop]);
      } else {
        target[prop] = source[prop];
      }
    }
  } else {
    return source;
  }

  return target;
}
var typeEqual = function typeEqual(v1, v2) {
  var allIsNotNull = [v1, v2].every(function (v) {
    return v !== null;
  });

  if (allIsNotNull) {
    return _typeof_1(v1) === _typeof_1(v2);
  }

  return [v1, v2].every(function (v) {
    return v === null;
  });
};
var deepEqual = function deepEqual(obj1, obj2) {
  var result = true;

  if (obj1 === obj2) {
    return true;
  }

  if (!typeEqual(obj1, obj2)) {
    return false;
  }

  if (Array.isArray(obj1) && Array.isArray(obj2) && obj1.length !== obj2.length) {
    // 数组长度不同
    return result = false;
  }

  for (var prop in obj1) {
    var val1 = obj1[prop];
    var val2 = obj2[prop];

    if (_typeof_1(val1) !== _typeof_1(val2)) {
      // 数据类型不同
      return result = false;
    } else if (_typeof_1(val1) === 'object') {
      result = deepEqual(val1, val2);
    } else {
      result = val1 === val2;
    }

    if (result === false) {
      return false;
    }
  }

  return result;
};
/**
 *
 * @param data 数据源
 * @param field
 * @param key 目标id
 * @param childField 子项所在字段
 */

function findNode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? [] : _ref$data,
      _ref$field = _ref.field,
      field = _ref$field === void 0 ? 'id' : _ref$field,
      _ref$key = _ref.key,
      key = _ref$key === void 0 ? '' : _ref$key,
      _ref$childField = _ref.childField,
      childField = _ref$childField === void 0 ? 'children' : _ref$childField;

  var target;
  var childrenList = {};

  if (data instanceof Array) {
    childrenList = data;
  } else {
    childrenList = data[childField];
  }

  for (var i = 0; i <= childrenList.length; i++) {
    var children = childrenList[i];

    if (children) {
      if (children[field] === key) {
        return target = children;
      } else if (children[childField] && children[childField].length) {
        target = findNode({
          data: children,
          key: key,
          childField: childField,
          field: field
        });

        if (target && target[field] === key) {
          return target;
        }
      }
    }
  }

  return target;
}

/**
 * 封装clipboard的复制功能
 * @param text
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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass;

/**
 * 校验方法合集
 */
var REGEX_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var REGEX_URL = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
var REGEX_UPPER_CASE = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
var REGEX_LOWER_CASE = /^[a-z]+$/;
var REGEX_HEX_COLOR = /^#[0-9a-fA-F]{6}$/;
var REGEX_STYLE_UNIT = /px|vw|rem|em|%|auto|unset$/;
var REGEX_UA_CLIENT_MOBILE = /mobile/gi;
var REGEX_UA_OS_IOS = /ipad|iphone/gi;
var REGEX_UA_OS_ANDROID = /android/gi;
var REGEX_UA_OS_WINDOWS = /window|mac|linux/gi;
var REGEX_BASE64 = /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*?)\s*$/i;
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
  if (typeof val !== 'string') {
    return false;
  }

  return REGEX_URL.test(val);
}
/**
 * BASE64
 * @param val
 * @return {boolean}
 */

function isBase64(val) {
  if (typeof val !== 'string') {
    return false;
  }

  return REGEX_BASE64.test(val);
}
/**
 * 小写校验
 * @param val
 */

function isLowerCase(val) {
  if (typeof val !== 'string') {
    return false;
  }

  return REGEX_LOWER_CASE.test(val);
}
/**
 * 大写校验
 *
 * @param    {string}  val   被校验参数
 * @returns   {boolean}
 */

function isUpperCase(val) {
  if (typeof val !== 'string') {
    return false;
  }

  return REGEX_UPPER_CASE.test(val);
}
/**
 * 邮箱校验
 *
 * @param    {string}  val   被校验参数
 * @returns   {boolean}
 */

function isEmail(val) {
  if (typeof val !== 'string') {
    return false;
  }

  return REGEX_EMAIL.test(val);
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

  return REGEX_HEX_COLOR.test(val);
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

  return REGEX_STYLE_UNIT.test(val);
}
/**
 * 是否是手机
 * @return {boolean}
 */

function isMobile() {
  return REGEX_UA_CLIENT_MOBILE.test(navigator.userAgent);
}
/**
 * 是否是IOS系统
 * @return {boolean}
 */

function isOSIos() {
  return REGEX_UA_OS_IOS.test(navigator.userAgent);
}
/**
 * 是否是ANDROID系统
 * @return {boolean}
 */

function isOSAndroid() {
  return REGEX_UA_OS_ANDROID.test(navigator.userAgent);
}
/**
 * 是否是WINDOWS系统
 * @return {boolean}
 */

function isOSWindows() {
  return REGEX_UA_OS_WINDOWS.test(navigator.userAgent);
}

var Client =
/*#__PURE__*/
function () {
  function Client() {
    classCallCheck(this, Client);

    this.lang = navigator.language;
    this.type = 'pc';
    this.version = '';
    this.OS = 'Windows';
    this.init();
  }

  createClass(Client, [{
    key: "init",
    value: function init() {
      var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (/Android (\d+(\.\d+)+)/.test(navigator.userAgent)) {
        // @ts-ignore
        this.version = navigator.userAgent.match(/Android (\d+(\.\d+)+)/)[1];
      } else if (/iPhone OS (\d+(_\d+)+)/.test(navigator.userAgent)) {
        // @ts-ignore
        this.version = navigator.userAgent.match(/iPhone OS (\d+(_\d+)+)/)[1].replace(/_/g, '.');
      } else {
        this.version = '';
      }

      if (isMobile()) {
        this.type = 'mobile';
      } else {
        this.type = 'pc';
      }

      if (isOSIos()) {
        this.OS = 'IOS';
      } else if (isOSAndroid()) {
        this.OS = 'Android';
      } else if (isOSWindows()) {
        this.OS = 'Windows';
      }

      if (!!lang) {
        var langMap = lang.split('-');

        if (langMap.length > 1) {
          lang = "".concat(langMap[0], "-").concat(langMap[1].toUpperCase());
        } else {
          lang = langMap[0];
        }

        this.lang = lang;
      } else {
        this.lang = navigator.language;
      } // 挂载硬件信息到节点属性


      if (isMount) {
        var $root = document.documentElement;
        $root.setAttribute('data-client-os', this.OS);
        $root.setAttribute('data-client-type', this.type);
        $root.setAttribute('lang', this.lang);

        if (this.lang === 'ar') {
          $root.setAttribute('dir', 'rtl');
        } else if ($root.hasAttribute('dir')) {
          $root.removeAttribute('dir');
        }
      }
    }
  }]);

  return Client;
}();

var device = new Client();

/**
 * Created by nocoolyoyo on 2018/7/17.
 */
//过渡算法

/**
 * @param t 动画已消耗时间
 * @param b 原始值
 * @param c 目标值
 * @param d 持续时间
 */
function linear(t, b, c, d) {
  return c * t / d + b;
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
function sineaseOut(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}

var TRANS_FUNCS = ['linear', 'easeIn', 'strongEaseIn', 'strongEaseOut', 'sineaseIn', 'sineaseOut'];
var META_CODE = {
  x: {
    start: 'left',
    size: 'width',
    clientSize: 'clientWidth',
    scrollStart: 'scrollLeft',
    scrollSize: 'scrollWidth'
  },
  y: {
    start: 'top',
    size: 'height',
    clientSize: 'clientHeight',
    scrollStart: 'scrollTop',
    scrollSize: 'scrollHeight'
  }
};
/**
 * 滚动基础方法
 * @param axis 滚动轴线
 * @param $scroller
 * @param justify 滚动偏差值： number, 复数向下滚动， 正数向上滚动
 * @param target 滚动目标, HTMLElement或者string, start:表示滚动到头部， end表示底部,
 * @param duration,
 * @param transition
 * @param onFinish
 */

function scrollFunc() {
  var axis = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'x';
  var $scroller = arguments.length > 1 ? arguments[1] : undefined;

  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$justify = _ref.justify,
      justify = _ref$justify === void 0 ? 0 : _ref$justify,
      _ref$target = _ref.target,
      target = _ref$target === void 0 ? 0 : _ref$target,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 500 : _ref$duration,
      _ref$transition = _ref.transition,
      transition = _ref$transition === void 0 ? 'sineaseOut' : _ref$transition,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'center' : _ref$position;

  return new Promise(function (resolve) {
    if (!$scroller || !TRANS_FUNCS.includes(transition)) {
      resolve();
    }

    var META = META_CODE[axis];
    var isDomTarget = typeof target !== 'number' && target !== 'start' && target !== 'end';
    var scroll = 0; // 滚动值计算

    if (isDomTarget) {
      var rect = target.getBoundingClientRect();
      var posScroll = position === 'start' ? 0 : position === 'end' // @ts-ignore
      ? $scroller[META.clientSize] - rect[META.size] : // @ts-ignore
      ($scroller[META.clientSize] - rect[META.size]) / 2; // @ts-ignore

      scroll = rect[META.start] - posScroll + justify;
    } else {
      // @ts-ignore
      scroll = (target === 'start' // @ts-ignore
      ? -$scroller[META.scrollStart] : target === 'end' // @ts-ignore
      ? $scroller[META.scrollSize] - $scroller[META.scrollStart] - $scroller[META.clientSize] : target) + justify;
    }

    if (scroll === 0) {
      resolve();
    } // @ts-ignore


    var scrollValue = $scroller[META.scrollSize] - $scroller[META.clientSize]; // @ts-ignore

    var scrollStart = $scroller[META.scrollStart];
    var start;

    var _step2; //eval(transition): number


    var transFunc = function () {
      if (transition === 'linear') {
        return sineaseIn;
      } else if (transition === 'easeIn') {
        return easeIn;
      } else if (transition === 'strongEaseIn') {
        return strongEaseIn;
      } else if (transition === 'strongEaseOut') {
        return strongEaseOut;
      } else if (transition === 'sineaseIn') {
        return sineaseIn;
      } else if (transition === 'sineaseOut') {
        return sineaseOut;
      }
    }(); // 滚动值矫正


    if (scroll > 0) {
      var maxScroll = scrollValue - scrollStart;
      scroll = scroll > maxScroll ? maxScroll : scroll; // @ts-ignore

      _step2 = function step(timestamp) {
        if (!start) {
          start = timestamp;
        } // @ts-ignore


        var stepScroll = transFunc(timestamp - start, 0, scroll, duration);
        stepScroll = stepScroll > scroll ? scroll : stepScroll; // @ts-ignore

        $scroller[META.scrollStart] = scrollStart + stepScroll;

        if (scroll > stepScroll) {
          // @ts-ignore
          requestAnimationFrame(_step2);
        } else {
          resolve();
        }
      };
    } else {
      // @ts-ignore
      var _maxScroll = -$scroller[META.scrollStart];

      scroll = scroll < _maxScroll ? _maxScroll : scroll; // @ts-ignore

      _step2 = function _step(timestamp) {
        if (!start) {
          start = timestamp;
        } // @ts-ignore


        var stepScroll = transFunc(timestamp - start, 0, scroll, duration);
        stepScroll = stepScroll < scroll ? scroll : stepScroll; // @ts-ignore

        $scroller[META.scrollStart] = scrollStart + stepScroll;

        if (scroll < stepScroll) {
          // @ts-ignore
          requestAnimationFrame(_step2);
        } else {
          resolve();
        }
      };
    } // @ts-ignore


    requestAnimationFrame(_step2);
  });
}

function scrollToX($scroller, scrollOpts) {
  return scrollFunc('x', $scroller, scrollOpts);
}
function scrollToY($scroller, scrollOpts) {
  return scrollFunc('y', $scroller, scrollOpts);
}

/**
 * 图片预加载完返回图片的信息
 * @param url
 */
function imageLoaded(url) {
  return new Promise(function (resolve, reject) {
    var img = new Image();

    img.onload = function () {
      resolve({
        width: img.width,
        height: img.height
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
 * @function 将传入的属性名转为驼峰
 *
 * @param name 名字
 * @return {*}
 *
 * @author: nocoolyoyo
 * @date: 2018-03-11
 */
var SPECIAL_CHARS_REGEXP = /([:\-_]+(.))/g;
var MOZ_HACK_REGEXP = /^moz([A-Z])/;
function camelCase(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
}

//     [field: TElements]: string | number
// }

/**
 * css样式构造
 * @param styleObj 文件后缀名
 * @returns {String}
 *CSSStyleDeclaration
 * @author: nocoolyoyo
 * @date: 2018-03-11
 */

function strStyle(styleObj) {
  var cssStr = '';
  Object.keys(styleObj).forEach(function (key) {
    if (styleObj.hasOwnProperty(key)) cssStr += "".concat(key, ":").concat(styleObj[key], ";");
  });
  return cssStr;
}
/**
 * 获取节点的CSS属性的值
 * @param element {Object} 节点
 * @param styleName {String} 属性名字
 * @returns {*}
 * @author: nocoolyoyo
 * @date: 2018-03-11
 */

function getStyle(element, styleName) {
  if (!element || !styleName) return '';
  styleName = camelCase(styleName);

  if (styleName === 'float') {
    styleName = 'cssFloat';
  }

  try {
    var computed = document['defaultView'].getComputedStyle(element, '');
    return element.style[styleName] || computed ? computed[styleName] : '';
  } catch (e) {
    return element.style[styleName];
  }
}

/**
 * 获取URL全部参数值
 * @param url
 */
function getUrlParams() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.href;

  var _url = decodeURI(url.replace(/\+/g, '%20')); // console.log(_url)


  var result = {};

  var queryArray = _url.split('?');

  if (queryArray.length <= 1) {
    return result;
  }

  queryArray = queryArray[1].split('&');
  queryArray.forEach(function (query) {
    var queryKVArray = query.split('='); // console.log(queryKVArray)

    result[queryKVArray[0]] = queryKVArray[1];
  });
  return result;
}
/**
 * 获取指定的URL参数值
 * @param name
 * @param url
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
 * 追加指定的URL参数值,存在会覆盖
 * @param params
 * @param url
 * @param sort
 */

function appendUrlParams() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.href;
  var sort = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var cleanUrl = url.split('?')[0];
  var oriParams = getUrlParams(url);
  var newParams = Object.assign(oriParams, params); // url已存在参数

  var Keys = Object.keys(newParams);

  if (sort) {
    Keys = Keys.sort();
  }

  Keys.forEach(function (key) {
    cleanUrl += "&".concat(key, "=").concat(newParams[key]);
  });
  cleanUrl = cleanUrl.replace(/&/, '?');
  return cleanUrl;
}

/**
 * Created by nocoolyoyo on 2018/6/11.
 */

exports.arrayClear = arrayClear;
exports.arrayUnique = arrayUnique;
exports.arrayUniqueByField = arrayUniqueByField;
exports.deepCopy = deepCopy;
exports.deepEqual = deepEqual;
exports.findNode = findNode;
exports.clip2Board = clip2Board;
exports.Client = device;
exports.scrollToX = scrollToX;
exports.scrollToY = scrollToY;
exports.imageLoaded = imageLoaded;
exports.camelCase = camelCase;
exports.strStyle = strStyle;
exports.getStyle = getStyle;
exports.easeIn = easeIn;
exports.linear = linear;
exports.sineaseIn = sineaseIn;
exports.sineaseOut = sineaseOut;
exports.strongEaseIn = strongEaseIn;
exports.strongEaseOut = strongEaseOut;
exports.getUrlParam = getUrlParam;
exports.getUrlParams = getUrlParams;
exports.appendUrlParams = appendUrlParams;
exports.REGEX_UA_OS_WINDOWS = REGEX_UA_OS_WINDOWS;
exports.REGEX_UA_OS_ANDROID = REGEX_UA_OS_ANDROID;
exports.REGEX_UA_OS_IOS = REGEX_UA_OS_IOS;
exports.REGEX_UA_CLIENT_MOBILE = REGEX_UA_CLIENT_MOBILE;
exports.REGEX_STYLE_UNIT = REGEX_STYLE_UNIT;
exports.REGEX_LOWER_CASE = REGEX_LOWER_CASE;
exports.REGEX_BASE64 = REGEX_BASE64;
exports.REGEX_EMAIL = REGEX_EMAIL;
exports.REGEX_HEX_COLOR = REGEX_HEX_COLOR;
exports.REGEX_UPPER_CASE = REGEX_UPPER_CASE;
exports.REGEX_URL = REGEX_URL;
exports.isOSAndroid = isOSAndroid;
exports.isOSIos = isOSIos;
exports.isBase64 = isBase64;
exports.isEmail = isEmail;
exports.isEmptyObject = isEmptyObject;
exports.isHexColor = isHexColor;
exports.isLowerCase = isLowerCase;
exports.isMobile = isMobile;
exports.isOSWindows = isOSWindows;
exports.isStyleUnit = isStyleUnit;
exports.isTrimEmpty = isTrimEmpty;
exports.isUpperCase = isUpperCase;
exports.isURL = isURL;