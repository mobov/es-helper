'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var ClipboardJS = _interopDefault(require('clipboard'));

var absArray = function absArray(val) {
  if (!(val && val instanceof Array)) {
    return [];
  }

  return val;
};

var absObject = function absObject(val) {
  if (!(val && val instanceof Object)) {
    return {};
  }

  return val;
};

var arrayClear = function arrayClear(arr) {
  if (arr instanceof Array) {
    arr.splice(0, arr.length);
  }
};

var arraySwap = function arraySwap(arr, index1, index2) {
  arr.splice(index2, 0, arr.splice(index1, 1)[0]);
};

var arrayUnique = function arrayUnique(arr, field) {
  if (field === void 0) {
    field = 'id';
  }

  if (typeof arr[0] === 'string' || typeof arr[0] === 'number') {
    var result_1 = [];
    var str_1 = [];
    var num_1 = [];
    arr.forEach(function (item) {
      if (isNaN(item)) {
        str_1.push(item);
      } else {
        num_1.push(item);
      }
    });
    arr = num_1.sort(function (a, b) {
      return a - b;
    }).concat(str_1.sort());
    arr.forEach(function (a) {
      if (result_1.includes(a)) {
        return;
      }

      result_1.push(a);
    });
    return result_1;
  } else {
    var result_2 = [];
    arr.forEach(function (item) {
      var ids = result_2.map(function (i) {
        return i[field];
      });

      if (!ids.includes(item[field])) {
        result_2.push(item);
      }
    });
    return result_2;
  }
};

var SPECIAL_CHARS_REGEXP = /([:\-_]+(.))/g;
var MOZ_HACK_REGEXP = /^moz([A-Z])/;

var camelCase = function camelCase(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
};

var REGEX_UA_CLIENT_MOBILE = /mobile/gi;

var isMobile = function isMobile(useragent) {
  if (useragent === void 0) {
    useragent = navigator.userAgent;
  }

  REGEX_UA_CLIENT_MOBILE.lastIndex = 0;
  return REGEX_UA_CLIENT_MOBILE.test(useragent);
};

var REGEX_UA_OS_IOS = /ipad|iphone/gi;

var isIphone = function isIphone(useragent) {
  if (useragent === void 0) {
    useragent = navigator.userAgent;
  }

  REGEX_UA_OS_IOS.lastIndex = 0;
  return REGEX_UA_OS_IOS.test(useragent);
};

var REGEX_UA_OS_ANDROID = /android/gi;

var isAndroid = function isAndroid(useragent) {
  if (useragent === void 0) {
    useragent = navigator.userAgent;
  }

  REGEX_UA_OS_ANDROID.lastIndex = 0;
  return REGEX_UA_OS_ANDROID.test(useragent);
};

var REGEX_UA_OS_WINDOWS = /window/gi;

var isWindows = function isWindows(useragent) {
  if (useragent === void 0) {
    useragent = navigator.userAgent;
  }

  REGEX_UA_OS_WINDOWS.lastIndex = 0;
  return REGEX_UA_OS_WINDOWS.test(useragent);
};

var REGEX_UA_OS_LINUX = /linux/gi;

var isLinux = function isLinux(useragent) {
  if (useragent === void 0) {
    useragent = navigator.userAgent;
  }

  REGEX_UA_OS_LINUX.lastIndex = 0;
  return REGEX_UA_OS_LINUX.test(useragent);
};

var REGEX_UA_OS_MAC = /mac/gi;

var isMac = function isMac(useragent) {
  if (useragent === void 0) {
    useragent = navigator.userAgent;
  }

  REGEX_UA_OS_MAC.lastIndex = 0;
  return REGEX_UA_OS_MAC.test(useragent);
};

/**
 * 设备信息，同时提供初始化方法在页面初始化挂载
 * Created by nocoolyoyo on 2018/3/11.
 */

var ClientConstructor =
/** @class */
function () {
  function ClientConstructor() {
    this.lang = navigator.language;
    this.type = 'pc';
    this.version = '';
    this.OS = 'Windows';
  }

  ClientConstructor.prototype.init = function (lang, isMount) {
    if (lang === void 0) {
      lang = '';
    }

    if (isMount === void 0) {
      isMount = true;
    }

    if (isMobile(navigator.userAgent)) {
      this.type = 'mobile';
    } else {
      this.type = 'pc';
    }

    console.log(this.type);

    if (isIphone(navigator.userAgent)) {
      this.OS = 'IOS';
    } else if (isAndroid(navigator.userAgent)) {
      this.OS = 'Android';
    } else if (isWindows(navigator.userAgent)) {
      this.OS = 'Windows';
    } else if (isLinux(navigator.userAgent)) {
      this.OS = 'Linux';
    } else if (isMac(navigator.userAgent)) {
      this.OS = 'Mac';
    }

    if (this.OS === 'Android') {
      // @ts-ignore
      var match = navigator.userAgent.match(/Android (\d+(\.\d+)+)/);

      if (match) {
        this.version = match[1];
      }
    } else if (this.OS === 'IOS') {
      // @ts-ignore
      var match = navigator.userAgent.match(/OS (\d+(_\d+)+)/);

      if (match) {
        this.version = match[1].replace(/_/g, '.');
      }
    } else {
      this.version = '';
    }

    if (!!lang) {
      var langMap = lang.split('-');

      if (langMap.length > 1) {
        lang = langMap[0] + "-" + langMap[1].toUpperCase();
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
  };

  return ClientConstructor;
}();

var Client = new ClientConstructor();

/**
 * 封装clipboard的复制功能
 * @param text
 */

var clip2Board = function clip2Board(text) {
  if (text === void 0) {
    text = '';
  }

  var domId = "clipDom" + new Date().getTime();
  var $dom = document.createElement('button');
  var $container = document.body;
  $dom.style.display = 'hidden';
  $dom.style.position = 'fixed';
  $dom.setAttribute('id', domId);
  $dom.setAttribute('data-clipboard-text', text);
  $container.appendChild($dom);
  var Clipboard = new ClipboardJS("#" + domId);
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
};

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

var deepCopy = function deepCopy(source) {
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
};

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

var isObject = function isObject(v) {
  return v !== null && _typeof_1(v) === 'object';
};

var deepEqual = function deepEqual(obj1, obj2) {
  var result = true;

  if (obj1 === obj2) {
    return true;
  }

  if (!typeEqual(obj1, obj2)) {
    return false;
  }

  if (!isObject(obj1)) {
    return obj1 === obj2;
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
var findNode = function findNode(_a) {
  var _b = _a === void 0 ? {} : _a,
      _c = _b.data,
      data = _c === void 0 ? [] : _c,
      _d = _b.field,
      field = _d === void 0 ? 'id' : _d,
      _e = _b.key,
      key = _e === void 0 ? '' : _e,
      _f = _b.childField,
      childField = _f === void 0 ? 'children' : _f;

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
};

/**
 * 获取节点的CSS属性的值
 * @param element {Object} 节点
 * @param styleName {String} 属性名字
 * @returns {*}
 * @author: nocoolyoyo
 * @date: 2018-03-11
 */

var getStyle = function getStyle(element, styleName) {
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
};

/**
 * 获取URL参数值
 * @param url
 */
var getUrlParam = function getUrlParam(name, url) {
  if (url === void 0) {
    url = window.location.href;
  }

  if (typeof name !== 'string') console.error('要获取的参数名必须为字符串');

  var _url = decodeURI(url.replace(/\+/g, '%20'));

  var search = _url.substring(_url.lastIndexOf('?') + 1);

  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", 'i');
  var r = search.match(reg);
  if (r !== null) return decodeURI(r[2]);
  return '';
};

/**
 * 获取URL全部参数值
 * @param url
 */
var getUrlParams = function getUrlParams(url) {
  if (url === void 0) {
    url = window.location.href;
  }

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
};

/**
 * dom元素是否相交（碰撞）
 * @param r1
 * @param r2
 */
var haveDomRectIntersection = function haveDomRectIntersection(r1, r2) {
  return !(r2.x > r1.x + r1.width || r2.x + r2.width < r1.x || r2.y > r1.y + r1.height || r2.y + r2.height < r1.y);
};

/**
 * 图片预加载完返回图片的信息
 * @param url
 */
var imageLoaded = function imageLoaded(url) {
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
};

var REGEX_BASE64 = /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*?)\s*$/i;

var isBase64 = function isBase64(val) {
  if (typeof val !== 'string') {
    return false;
  }

  REGEX_BASE64.lastIndex = 0;
  return REGEX_BASE64.test(val);
};

var REGEX_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var isEmail = function isEmail(val) {
  if (typeof val !== 'string') {
    return false;
  }

  return REGEX_EMAIL.test(val);
};

var isEmptyObject = function isEmptyObject(val) {
  if (_typeof_1(val) !== 'object') {
    return false;
  }

  return Object.keys(val).length === 0;
};

var isEmptyString = function isEmptyString(val) {
  if (typeof val !== 'string') {
    return false;
  }

  return val.trim() === '';
};

var REGEX_HEX_COLOR = /^#[0-9a-fA-F]{6}$/;

var isHexColor = function isHexColor(val) {
  if (typeof val !== 'string') {
    return false;
  }

  REGEX_HEX_COLOR.lastIndex = 0;
  return REGEX_HEX_COLOR.test(val);
};

var REGEX_LOWER_CASE = /^[a-z]+$/;

var isLowerCase = function isLowerCase(val) {
  if (typeof val !== 'string') {
    return false;
  }

  REGEX_LOWER_CASE.lastIndex = 0;
  return REGEX_LOWER_CASE.test(val);
};

var REGEX_STYLE_UNIT = /px|vw|rem|em|%|auto|unset$/i;

var isStyleUnit = function isStyleUnit(val) {
  if (typeof val !== 'string') {
    return false;
  }

  REGEX_STYLE_UNIT.lastIndex = 0;
  return REGEX_STYLE_UNIT.test(val);
};

var REGEX_UPPER_CASE = /^[A-Z]+$/;

var isUpperCase = function isUpperCase(val) {
  if (typeof val !== 'string') {
    return false;
  }

  REGEX_UPPER_CASE.lastIndex = 0;
  return REGEX_UPPER_CASE.test(val);
};

var REGEX_URL = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;

var isURL = function isURL(val) {
  if (typeof val !== 'string') {
    return false;
  }

  REGEX_URL.lastIndex = 0;
  return REGEX_URL.test(val);
};

/**
 * 业务多语言适配器
 *
 * @param {string} lang 需要被适配的语言字符串 ,为空则返回英语
 * @returns 适配结果，没有适配结果则返回输入的字符串
 *
 * @author nocoolyoyo
 * @since 2018-05-23
 */

var langAdapt = function langAdapt(lang) {
  if (typeof lang !== 'string') {
    throw new Error('lang is not a string');
  }

  lang = lang.toLowerCase().trim(); //中文

  if (lang.indexOf('zh-') !== -1) {
    //某些安卓设备语言返回的是zh-rCN，zh-rTW
    if (lang.indexOf('cn') !== -1) {
      lang = 'zh-CN';
    } else {
      lang = 'zh-TW';
    }
  } else if (lang.indexOf('ja') !== -1 || lang.indexOf('jp') !== -1) {
    //日语
    lang = 'ja';
  } else {
    //其他语言
    //中线处理
    if (lang.indexOf('-') !== -1) {
      lang = lang.split('-')[0];
    }
  }

  return lang;
};

var UPPER_CHARS_REGEXP = /[A-Z]/g;

var lineCase = function lineCase(name) {
  return name.replace(UPPER_CHARS_REGEXP, function (_, separator, letter, offset) {
    return separator === 0 ? _.toLowerCase() : "-" + _.toLowerCase();
  });
};

/**
 * Created by nocoolyoyo on 2018/7/17.
 */
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

function scrollTo (axis, $scroller, _a) {
  if (axis === void 0) {
    axis = 'x';
  }

  var _b = _a === void 0 ? {} : _a,
      _c = _b.justify,
      justify = _c === void 0 ? 0 : _c,
      _d = _b.target,
      target = _d === void 0 ? 0 : _d,
      _e = _b.duration,
      duration = _e === void 0 ? 500 : _e,
      _f = _b.transition,
      transition = _f === void 0 ? 'sineaseOut' : _f,
      _g = _b.position,
      position = _g === void 0 ? 'center' : _g;

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
      var maxScroll = -$scroller[META.scrollStart];
      scroll = scroll < maxScroll ? maxScroll : scroll; // @ts-ignore

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

var scrollToX = function scrollToX($scroller, scrollOpts) {
  return scrollTo('x', $scroller, scrollOpts);
};

var scrollToY = function scrollToY($scroller, scrollOpts) {
  return scrollTo('y', $scroller, scrollOpts);
};

/**
 * css样式构造
 * @param styleObj 文件后缀名
 * @returns {String}
 *CSSStyleDeclaration
 * @author: nocoolyoyo
 * @date: 2018-03-11
 */
var strStyle = function strStyle(styleObj) {
  var cssStr = '';
  Object.keys(styleObj).forEach(function (key) {
    if (styleObj.hasOwnProperty(key)) cssStr += key + ":" + styleObj[key] + ";";
  });
  return cssStr;
};

exports.absArray = absArray;
exports.absObject = absObject;
exports.arrayClear = arrayClear;
exports.arraySwap = arraySwap;
exports.arrayUnique = arrayUnique;
exports.camelCase = camelCase;
exports.Client = Client;
exports.clip2Board = clip2Board;
exports.deepCopy = deepCopy;
exports.deepEqual = deepEqual;
exports.findNode = findNode;
exports.getStyle = getStyle;
exports.getUrlParam = getUrlParam;
exports.getUrlParams = getUrlParams;
exports.haveDomRectIntersection = haveDomRectIntersection;
exports.imageLoaded = imageLoaded;
exports.isAndroid = isAndroid;
exports.isBase64 = isBase64;
exports.isEmail = isEmail;
exports.isEmptyObject = isEmptyObject;
exports.isEmptyString = isEmptyString;
exports.isHexColor = isHexColor;
exports.isIphone = isIphone;
exports.isLinux = isLinux;
exports.isLowerCase = isLowerCase;
exports.isMac = isMac;
exports.isMobile = isMobile;
exports.isObject = isObject;
exports.isStyleUnit = isStyleUnit;
exports.isUpperCase = isUpperCase;
exports.isURL = isURL;
exports.isWindows = isWindows;
exports.langAdapt = langAdapt;
exports.lineCase = lineCase;
exports.scrollToX = scrollToX;
exports.scrollToY = scrollToY;
exports.strStyle = strStyle;
exports.typeEqual = typeEqual;
