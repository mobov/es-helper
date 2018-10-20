import ClipboardJS from 'clipboard';

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

  return Client;
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

function appendUrlParams() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.href;
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
 */

var TRANS_FUNCS = ['linear', 'easeIn', 'strongEaseIn', 'strongEaseOut', 'sineaseIn', 'sineaseOut'];
/**
 * Y向将元素滚动到可见位置
 * @param $scroller 要滚动的元素
 * @param $viewer 需要可见的元素
 * @param justify 滚动偏差值
 * @param duration 过渡时间
 * @param transition
 */

function scrollToYView($scroller, $viewer) {
  var justify = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 500;
  var transition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'sineaseOut';

  if (!$scroller || !$viewer) {
    return;
  }

  if (!TRANS_FUNCS.includes(transition)) {
    return;
  }

  var rect = $viewer.getBoundingClientRect();
  var scroll = rect.top - $scroller.clientHeight + rect.height + justify;
  var scrollStart = $scroller.scrollTop;
  var direction = scroll > 0 ? '↓' : '↑';
  var transFunc = eval(transition);
  var start = null;

  var step = function step(timestamp) {
    if (!start) {
      start = timestamp;
    }

    var stepScroll = transFunc(timestamp - start, 0, scroll, duration);
    var total = $scroller.scrollTop = scrollStart + stepScroll;

    if (direction === '↓' && total < scrollStart + scroll || direction === '↑' && total > scrollStart + scroll) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
}
/**
 * X向将元素滚动到可见位置
 * @param $scroller 要滚动的容器元素
 * @param $viewer 需要可见的元素
 * @param justify 滚动偏差值
 * @param duration 过渡时间
 * @param transition
 */

function scrollToXView($scroller, $viewer) {
  var justify = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 500;
  var transition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'sineaseOut';

  if (!$scroller || !$viewer) {
    return;
  }

  if (!TRANS_FUNCS.includes(transition)) {
    return;
  }

  var rect = $viewer.getBoundingClientRect();
  var scroll = rect.left - $scroller.clientWidth + rect.width * 2 + justify;
  var scrollStart = $scroller.scrollLeft;
  var transFunc = eval(transition);
  var start = null;

  var step = function step(timestamp) {
    if (!start) {
      start = timestamp;
    }

    var stepScroll = transFunc(timestamp - start, 0, scroll, duration);
    var total = $scroller.scrollLeft = scrollStart + stepScroll;

    if (total < scrollStart + scroll) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
}
/**
 * X向将元素滚动一段距离
 * @param $scroller 要滚动的容器元素
 * @param justify 滚动偏差值： number或者string, top:表示滚动到头部， bottom表示底部
 * @param duration 滚动持续时间
 * @param transition
 */

function scrollToX($scroller) {
  var justify = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;
  var transition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'sineaseOut';

  if (!$scroller || justify === 0) {
    return;
  }

  if (!TRANS_FUNCS.includes(transition)) {
    return;
  }

  var scrollStart = $scroller.scrollLeft;
  var transFunc = eval(transition);
  var start = null;

  var step = function step(timestamp) {
    if (!start) {
      start = timestamp;
    }

    var stepScroll = transFunc(timestamp - start, 0, Math.abs(justify), duration);
    var total = $scroller.scrollLeft = justify > 0 ? scrollStart + stepScroll : scrollStart - stepScroll;

    if (justify > 0 && total < scrollStart + justify || justify < 0 && total > scrollStart + justify) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
}
/**
 * Y向滚动到头部
 * @param $scroller
 * @param justify 滚动偏差值： number或者string, start:表示滚动到头部， end表示底部, 复数向下滚动， 正数向上滚动
 * @param duration
 * @param transition
 */

function scrollToY($scroller) {
  var justify = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;
  var transition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'sineaseOut';

  if (!$scroller || justify === 0) {
    return;
  }

  if (!TRANS_FUNCS.includes(transition)) {
    return;
  }

  var scroll = justify === 'start' ? -$scroller.scrollTop : justify === 'end' ? $scroller.scrollHeight - $scroller.clientHeight - $scroller.scrollTop : -justify;
  var scrollStart = $scroller.scrollTop;
  var direction = justify === 'start' || justify > 0 ? '↑' : '↓';

  if (direction === '↓' && scrollStart === $scroller.scrollHeight - $scroller.clientHeight || direction === '↑' && scrollStart === 0) {
    return;
  }

  var transFunc = eval(transition);
  var start = null;

  var step = function step(timestamp) {
    if (!start) {
      start = timestamp;
    }

    var stepScroll = transFunc(timestamp - start, 0, scroll, duration);
    var total = $scroller.scrollTop = scrollStart + stepScroll;

    if (direction === '↓' && total < scrollStart + scroll || direction === '↑' && total > scrollStart + scroll) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
}

/**
 * 
 * @param {Object|Array} data 数据源
 * @param {String} id 目标id
 * @param {String} childStr 子项所在字段
 */
function findNode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? [] : _ref$data,
      _ref$field = _ref.field,
      field = _ref$field === void 0 ? 'id' : _ref$field,
      key = _ref.key,
      _ref$childField = _ref.childField,
      childField = _ref$childField === void 0 ? 'children' : _ref$childField;
  var target;
  var childrenList;

  if (data instanceof Array) {
    childrenList = data;
  } else {
    childrenList = data[childField];
  }

  for (var i = 0; i <= childrenList.length; i++) {
    var children = childrenList[i];

    if (children) {
      if (children[field] == key) {
        return target = children;
      } else if (children[childField] && children[childField].length) {
        target = findNode({
          data: children,
          key: key,
          childField: childField,
          field: field
        });

        if (target && target[field] == key) {
          return target;
        }
      }
    }
  }

  return target;
}

function deepCopy(source) {
  //对象深拷贝
  var target;

  if (source instanceof Array) {
    target = [];
    source.forEach(function (item) {
      if (_typeof_1(item) == 'object') {
        target.push(deepCopy(item));
      } else {
        target.push(item);
      }
    });
  } else if (source instanceof Object) {
    target = {};

    for (var prop in source) {
      if (_typeof_1(source[prop]) == 'object') {
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

function deepEqual(obj1, obj2) {
  //JSON对象深度对比
  var result = true;

  if (Array.isArray(obj1) && Array.isArray(obj2) && obj1.length !== obj2.length) {
    //数组长度不同
    return result = false;
  }

  for (var prop in obj1) {
    var val1 = obj1[prop];
    var val2 = obj2[prop];

    if (_typeof_1(val1) !== _typeof_1(val2)) {
      //数据类型不同
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
}

var arrayUnique = function arrayUnique(arr) {
  //Array<String|Number>去重
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
  arr.forEach(function (a, i) {
    if (result.includes(a)) return;
    result.push(a);
  });
  return result;
};
var uniqueArrayByField = function uniqueArrayByField(arr) {
  var field = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'id';
  // Array<Object>根据某个字段去重
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

/**
 * Created by nocoolyoyo on 2018/6/11.
 */

export { clip2Board as copy2Board, initClient, getClient, getStyle, strStyle, getUrlParam, appendUrlParams, imageLoaded, RegexMap, isTrimEmpty, isEmail, isLowerCase, isUpperCase, isURL, isEmptyObject, isHexColor, isStyleUnit, isOSWindows, isOSIos, isOSAndroid, isMobile, scrollToY, scrollToX, scrollToXView, scrollToYView, findNode, deepCopy, deepEqual, arrayUnique, uniqueArrayByField };
