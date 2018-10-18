(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var clipboard = createCommonjsModule(function (module, exports) {
	/*!
	 * clipboard.js v2.0.1
	 * https://zenorocha.github.io/clipboard.js
	 * 
	 * Licensed MIT © Zeno Rocha
	 */
	(function webpackUniversalModuleDefinition(root, factory) {
	  module.exports = factory();
	})(commonjsGlobal, function () {
	  return (
	    /******/
	    function (modules) {
	      // webpackBootstrap

	      /******/
	      // The module cache

	      /******/
	      var installedModules = {};
	      /******/

	      /******/
	      // The require function

	      /******/

	      function __webpack_require__(moduleId) {
	        /******/

	        /******/
	        // Check if module is in cache

	        /******/
	        if (installedModules[moduleId]) {
	          /******/
	          return installedModules[moduleId].exports;
	          /******/
	        }
	        /******/
	        // Create a new module (and put it into the cache)

	        /******/


	        var module = installedModules[moduleId] = {
	          /******/
	          i: moduleId,

	          /******/
	          l: false,

	          /******/
	          exports: {}
	          /******/

	        };
	        /******/

	        /******/
	        // Execute the module function

	        /******/

	        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	        /******/

	        /******/
	        // Flag the module as loaded

	        /******/

	        module.l = true;
	        /******/

	        /******/
	        // Return the exports of the module

	        /******/

	        return module.exports;
	        /******/
	      }
	      /******/

	      /******/

	      /******/
	      // expose the modules object (__webpack_modules__)

	      /******/


	      __webpack_require__.m = modules;
	      /******/

	      /******/
	      // expose the module cache

	      /******/

	      __webpack_require__.c = installedModules;
	      /******/

	      /******/
	      // identity function for calling harmony imports with the correct context

	      /******/

	      __webpack_require__.i = function (value) {
	        return value;
	      };
	      /******/

	      /******/
	      // define getter function for harmony exports

	      /******/


	      __webpack_require__.d = function (exports, name, getter) {
	        /******/
	        if (!__webpack_require__.o(exports, name)) {
	          /******/
	          Object.defineProperty(exports, name, {
	            /******/
	            configurable: false,

	            /******/
	            enumerable: true,

	            /******/
	            get: getter
	            /******/

	          });
	          /******/
	        }
	        /******/

	      };
	      /******/

	      /******/
	      // getDefaultExport function for compatibility with non-harmony modules

	      /******/


	      __webpack_require__.n = function (module) {
	        /******/
	        var getter = module && module.__esModule ?
	        /******/
	        function getDefault() {
	          return module['default'];
	        } :
	        /******/
	        function getModuleExports() {
	          return module;
	        };
	        /******/

	        __webpack_require__.d(getter, 'a', getter);
	        /******/


	        return getter;
	        /******/
	      };
	      /******/

	      /******/
	      // Object.prototype.hasOwnProperty.call

	      /******/


	      __webpack_require__.o = function (object, property) {
	        return Object.prototype.hasOwnProperty.call(object, property);
	      };
	      /******/

	      /******/
	      // __webpack_public_path__

	      /******/


	      __webpack_require__.p = "";
	      /******/

	      /******/
	      // Load entry module and return exports

	      /******/

	      return __webpack_require__(__webpack_require__.s = 3);
	      /******/
	    }(
	    /************************************************************************/

	    /******/
	    [
	    /* 0 */

	    /***/
	    function (module, exports, __webpack_require__) {
	      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

	      (function (global, factory) {
	        {
	          !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(7)], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	        }
	      })(this, function (module, _select) {

	        var _select2 = _interopRequireDefault(_select);

	        function _interopRequireDefault(obj) {
	          return obj && obj.__esModule ? obj : {
	            default: obj
	          };
	        }

	        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	          return typeof obj;
	        } : function (obj) {
	          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	        };

	        function _classCallCheck(instance, Constructor) {
	          if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	          }
	        }

	        var _createClass = function () {
	          function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	              var descriptor = props[i];
	              descriptor.enumerable = descriptor.enumerable || false;
	              descriptor.configurable = true;
	              if ("value" in descriptor) descriptor.writable = true;
	              Object.defineProperty(target, descriptor.key, descriptor);
	            }
	          }

	          return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	          };
	        }();

	        var ClipboardAction = function () {
	          /**
	           * @param {Object} options
	           */
	          function ClipboardAction(options) {
	            _classCallCheck(this, ClipboardAction);

	            this.resolveOptions(options);
	            this.initSelection();
	          }
	          /**
	           * Defines base properties passed from constructor.
	           * @param {Object} options
	           */


	          _createClass(ClipboardAction, [{
	            key: 'resolveOptions',
	            value: function resolveOptions() {
	              var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	              this.action = options.action;
	              this.container = options.container;
	              this.emitter = options.emitter;
	              this.target = options.target;
	              this.text = options.text;
	              this.trigger = options.trigger;
	              this.selectedText = '';
	            }
	          }, {
	            key: 'initSelection',
	            value: function initSelection() {
	              if (this.text) {
	                this.selectFake();
	              } else if (this.target) {
	                this.selectTarget();
	              }
	            }
	          }, {
	            key: 'selectFake',
	            value: function selectFake() {
	              var _this = this;

	              var isRTL = document.documentElement.getAttribute('dir') == 'rtl';
	              this.removeFake();

	              this.fakeHandlerCallback = function () {
	                return _this.removeFake();
	              };

	              this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;
	              this.fakeElem = document.createElement('textarea'); // Prevent zooming on iOS

	              this.fakeElem.style.fontSize = '12pt'; // Reset box model

	              this.fakeElem.style.border = '0';
	              this.fakeElem.style.padding = '0';
	              this.fakeElem.style.margin = '0'; // Move element out of screen horizontally

	              this.fakeElem.style.position = 'absolute';
	              this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px'; // Move element to the same position vertically

	              var yPosition = window.pageYOffset || document.documentElement.scrollTop;
	              this.fakeElem.style.top = yPosition + 'px';
	              this.fakeElem.setAttribute('readonly', '');
	              this.fakeElem.value = this.text;
	              this.container.appendChild(this.fakeElem);
	              this.selectedText = (0, _select2.default)(this.fakeElem);
	              this.copyText();
	            }
	          }, {
	            key: 'removeFake',
	            value: function removeFake() {
	              if (this.fakeHandler) {
	                this.container.removeEventListener('click', this.fakeHandlerCallback);
	                this.fakeHandler = null;
	                this.fakeHandlerCallback = null;
	              }

	              if (this.fakeElem) {
	                this.container.removeChild(this.fakeElem);
	                this.fakeElem = null;
	              }
	            }
	          }, {
	            key: 'selectTarget',
	            value: function selectTarget() {
	              this.selectedText = (0, _select2.default)(this.target);
	              this.copyText();
	            }
	          }, {
	            key: 'copyText',
	            value: function copyText() {
	              var succeeded = void 0;

	              try {
	                succeeded = document.execCommand(this.action);
	              } catch (err) {
	                succeeded = false;
	              }

	              this.handleResult(succeeded);
	            }
	          }, {
	            key: 'handleResult',
	            value: function handleResult(succeeded) {
	              this.emitter.emit(succeeded ? 'success' : 'error', {
	                action: this.action,
	                text: this.selectedText,
	                trigger: this.trigger,
	                clearSelection: this.clearSelection.bind(this)
	              });
	            }
	          }, {
	            key: 'clearSelection',
	            value: function clearSelection() {
	              if (this.trigger) {
	                this.trigger.focus();
	              }

	              window.getSelection().removeAllRanges();
	            }
	          }, {
	            key: 'destroy',
	            value: function destroy() {
	              this.removeFake();
	            }
	          }, {
	            key: 'action',
	            set: function set() {
	              var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';
	              this._action = action;

	              if (this._action !== 'copy' && this._action !== 'cut') {
	                throw new Error('Invalid "action" value, use either "copy" or "cut"');
	              }
	            },
	            get: function get() {
	              return this._action;
	            }
	          }, {
	            key: 'target',
	            set: function set(target) {
	              if (target !== undefined) {
	                if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
	                  if (this.action === 'copy' && target.hasAttribute('disabled')) {
	                    throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
	                  }

	                  if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
	                    throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
	                  }

	                  this._target = target;
	                } else {
	                  throw new Error('Invalid "target" value, use a valid Element');
	                }
	              }
	            },
	            get: function get() {
	              return this._target;
	            }
	          }]);

	          return ClipboardAction;
	        }();

	        module.exports = ClipboardAction;
	      });
	      /***/

	    },
	    /* 1 */

	    /***/
	    function (module, exports, __webpack_require__) {
	      var is = __webpack_require__(6);

	      var delegate = __webpack_require__(5);
	      /**
	       * Validates all params and calls the right
	       * listener function based on its target type.
	       *
	       * @param {String|HTMLElement|HTMLCollection|NodeList} target
	       * @param {String} type
	       * @param {Function} callback
	       * @return {Object}
	       */


	      function listen(target, type, callback) {
	        if (!target && !type && !callback) {
	          throw new Error('Missing required arguments');
	        }

	        if (!is.string(type)) {
	          throw new TypeError('Second argument must be a String');
	        }

	        if (!is.fn(callback)) {
	          throw new TypeError('Third argument must be a Function');
	        }

	        if (is.node(target)) {
	          return listenNode(target, type, callback);
	        } else if (is.nodeList(target)) {
	          return listenNodeList(target, type, callback);
	        } else if (is.string(target)) {
	          return listenSelector(target, type, callback);
	        } else {
	          throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
	        }
	      }
	      /**
	       * Adds an event listener to a HTML element
	       * and returns a remove listener function.
	       *
	       * @param {HTMLElement} node
	       * @param {String} type
	       * @param {Function} callback
	       * @return {Object}
	       */


	      function listenNode(node, type, callback) {
	        node.addEventListener(type, callback);
	        return {
	          destroy: function () {
	            node.removeEventListener(type, callback);
	          }
	        };
	      }
	      /**
	       * Add an event listener to a list of HTML elements
	       * and returns a remove listener function.
	       *
	       * @param {NodeList|HTMLCollection} nodeList
	       * @param {String} type
	       * @param {Function} callback
	       * @return {Object}
	       */


	      function listenNodeList(nodeList, type, callback) {
	        Array.prototype.forEach.call(nodeList, function (node) {
	          node.addEventListener(type, callback);
	        });
	        return {
	          destroy: function () {
	            Array.prototype.forEach.call(nodeList, function (node) {
	              node.removeEventListener(type, callback);
	            });
	          }
	        };
	      }
	      /**
	       * Add an event listener to a selector
	       * and returns a remove listener function.
	       *
	       * @param {String} selector
	       * @param {String} type
	       * @param {Function} callback
	       * @return {Object}
	       */


	      function listenSelector(selector, type, callback) {
	        return delegate(document.body, selector, type, callback);
	      }

	      module.exports = listen;
	      /***/
	    },
	    /* 2 */

	    /***/
	    function (module, exports) {
	      function E() {// Keep this empty so it's easier to inherit from
	        // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
	      }

	      E.prototype = {
	        on: function (name, callback, ctx) {
	          var e = this.e || (this.e = {});
	          (e[name] || (e[name] = [])).push({
	            fn: callback,
	            ctx: ctx
	          });
	          return this;
	        },
	        once: function (name, callback, ctx) {
	          var self = this;

	          function listener() {
	            self.off(name, listener);
	            callback.apply(ctx, arguments);
	          }
	          listener._ = callback;
	          return this.on(name, listener, ctx);
	        },
	        emit: function (name) {
	          var data = [].slice.call(arguments, 1);
	          var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
	          var i = 0;
	          var len = evtArr.length;

	          for (i; i < len; i++) {
	            evtArr[i].fn.apply(evtArr[i].ctx, data);
	          }

	          return this;
	        },
	        off: function (name, callback) {
	          var e = this.e || (this.e = {});
	          var evts = e[name];
	          var liveEvents = [];

	          if (evts && callback) {
	            for (var i = 0, len = evts.length; i < len; i++) {
	              if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
	            }
	          } // Remove event from queue to prevent memory leak
	          // Suggested by https://github.com/lazd
	          // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910


	          liveEvents.length ? e[name] = liveEvents : delete e[name];
	          return this;
	        }
	      };
	      module.exports = E;
	      /***/
	    },
	    /* 3 */

	    /***/
	    function (module, exports, __webpack_require__) {
	      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

	      (function (global, factory) {
	        {
	          !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(0), __webpack_require__(2), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	        }
	      })(this, function (module, _clipboardAction, _tinyEmitter, _goodListener) {

	        var _clipboardAction2 = _interopRequireDefault(_clipboardAction);

	        var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

	        var _goodListener2 = _interopRequireDefault(_goodListener);

	        function _interopRequireDefault(obj) {
	          return obj && obj.__esModule ? obj : {
	            default: obj
	          };
	        }

	        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	          return typeof obj;
	        } : function (obj) {
	          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	        };

	        function _classCallCheck(instance, Constructor) {
	          if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	          }
	        }

	        var _createClass = function () {
	          function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	              var descriptor = props[i];
	              descriptor.enumerable = descriptor.enumerable || false;
	              descriptor.configurable = true;
	              if ("value" in descriptor) descriptor.writable = true;
	              Object.defineProperty(target, descriptor.key, descriptor);
	            }
	          }

	          return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	          };
	        }();

	        function _possibleConstructorReturn(self, call) {
	          if (!self) {
	            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	          }

	          return call && (typeof call === "object" || typeof call === "function") ? call : self;
	        }

	        function _inherits(subClass, superClass) {
	          if (typeof superClass !== "function" && superClass !== null) {
	            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	          }

	          subClass.prototype = Object.create(superClass && superClass.prototype, {
	            constructor: {
	              value: subClass,
	              enumerable: false,
	              writable: true,
	              configurable: true
	            }
	          });
	          if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	        }

	        var Clipboard = function (_Emitter) {
	          _inherits(Clipboard, _Emitter);
	          /**
	           * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
	           * @param {Object} options
	           */


	          function Clipboard(trigger, options) {
	            _classCallCheck(this, Clipboard);

	            var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));

	            _this.resolveOptions(options);

	            _this.listenClick(trigger);

	            return _this;
	          }
	          /**
	           * Defines if attributes would be resolved using internal setter functions
	           * or custom functions that were passed in the constructor.
	           * @param {Object} options
	           */


	          _createClass(Clipboard, [{
	            key: 'resolveOptions',
	            value: function resolveOptions() {
	              var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	              this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
	              this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
	              this.text = typeof options.text === 'function' ? options.text : this.defaultText;
	              this.container = _typeof(options.container) === 'object' ? options.container : document.body;
	            }
	          }, {
	            key: 'listenClick',
	            value: function listenClick(trigger) {
	              var _this2 = this;

	              this.listener = (0, _goodListener2.default)(trigger, 'click', function (e) {
	                return _this2.onClick(e);
	              });
	            }
	          }, {
	            key: 'onClick',
	            value: function onClick(e) {
	              var trigger = e.delegateTarget || e.currentTarget;

	              if (this.clipboardAction) {
	                this.clipboardAction = null;
	              }

	              this.clipboardAction = new _clipboardAction2.default({
	                action: this.action(trigger),
	                target: this.target(trigger),
	                text: this.text(trigger),
	                container: this.container,
	                trigger: trigger,
	                emitter: this
	              });
	            }
	          }, {
	            key: 'defaultAction',
	            value: function defaultAction(trigger) {
	              return getAttributeValue('action', trigger);
	            }
	          }, {
	            key: 'defaultTarget',
	            value: function defaultTarget(trigger) {
	              var selector = getAttributeValue('target', trigger);

	              if (selector) {
	                return document.querySelector(selector);
	              }
	            }
	          }, {
	            key: 'defaultText',
	            value: function defaultText(trigger) {
	              return getAttributeValue('text', trigger);
	            }
	          }, {
	            key: 'destroy',
	            value: function destroy() {
	              this.listener.destroy();

	              if (this.clipboardAction) {
	                this.clipboardAction.destroy();
	                this.clipboardAction = null;
	              }
	            }
	          }], [{
	            key: 'isSupported',
	            value: function isSupported() {
	              var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];
	              var actions = typeof action === 'string' ? [action] : action;
	              var support = !!document.queryCommandSupported;
	              actions.forEach(function (action) {
	                support = support && !!document.queryCommandSupported(action);
	              });
	              return support;
	            }
	          }]);

	          return Clipboard;
	        }(_tinyEmitter2.default);
	        /**
	         * Helper function to retrieve attribute value.
	         * @param {String} suffix
	         * @param {Element} element
	         */


	        function getAttributeValue(suffix, element) {
	          var attribute = 'data-clipboard-' + suffix;

	          if (!element.hasAttribute(attribute)) {
	            return;
	          }

	          return element.getAttribute(attribute);
	        }

	        module.exports = Clipboard;
	      });
	      /***/

	    },
	    /* 4 */

	    /***/
	    function (module, exports) {
	      var DOCUMENT_NODE_TYPE = 9;
	      /**
	       * A polyfill for Element.matches()
	       */

	      if (typeof Element !== 'undefined' && !Element.prototype.matches) {
	        var proto = Element.prototype;
	        proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
	      }
	      /**
	       * Finds the closest parent that matches a selector.
	       *
	       * @param {Element} element
	       * @param {String} selector
	       * @return {Function}
	       */


	      function closest(element, selector) {
	        while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
	          if (typeof element.matches === 'function' && element.matches(selector)) {
	            return element;
	          }

	          element = element.parentNode;
	        }
	      }

	      module.exports = closest;
	      /***/
	    },
	    /* 5 */

	    /***/
	    function (module, exports, __webpack_require__) {
	      var closest = __webpack_require__(4);
	      /**
	       * Delegates event to a selector.
	       *
	       * @param {Element} element
	       * @param {String} selector
	       * @param {String} type
	       * @param {Function} callback
	       * @param {Boolean} useCapture
	       * @return {Object}
	       */


	      function _delegate(element, selector, type, callback, useCapture) {
	        var listenerFn = listener.apply(this, arguments);
	        element.addEventListener(type, listenerFn, useCapture);
	        return {
	          destroy: function () {
	            element.removeEventListener(type, listenerFn, useCapture);
	          }
	        };
	      }
	      /**
	       * Delegates event to a selector.
	       *
	       * @param {Element|String|Array} [elements]
	       * @param {String} selector
	       * @param {String} type
	       * @param {Function} callback
	       * @param {Boolean} useCapture
	       * @return {Object}
	       */


	      function delegate(elements, selector, type, callback, useCapture) {
	        // Handle the regular Element usage
	        if (typeof elements.addEventListener === 'function') {
	          return _delegate.apply(null, arguments);
	        } // Handle Element-less usage, it defaults to global delegation


	        if (typeof type === 'function') {
	          // Use `document` as the first parameter, then apply arguments
	          // This is a short way to .unshift `arguments` without running into deoptimizations
	          return _delegate.bind(null, document).apply(null, arguments);
	        } // Handle Selector-based usage


	        if (typeof elements === 'string') {
	          elements = document.querySelectorAll(elements);
	        } // Handle Array-like based usage


	        return Array.prototype.map.call(elements, function (element) {
	          return _delegate(element, selector, type, callback, useCapture);
	        });
	      }
	      /**
	       * Finds closest match and invokes callback.
	       *
	       * @param {Element} element
	       * @param {String} selector
	       * @param {String} type
	       * @param {Function} callback
	       * @return {Function}
	       */


	      function listener(element, selector, type, callback) {
	        return function (e) {
	          e.delegateTarget = closest(e.target, selector);

	          if (e.delegateTarget) {
	            callback.call(element, e);
	          }
	        };
	      }

	      module.exports = delegate;
	      /***/
	    },
	    /* 6 */

	    /***/
	    function (module, exports) {
	      /**
	       * Check if argument is a HTML element.
	       *
	       * @param {Object} value
	       * @return {Boolean}
	       */
	      exports.node = function (value) {
	        return value !== undefined && value instanceof HTMLElement && value.nodeType === 1;
	      };
	      /**
	       * Check if argument is a list of HTML elements.
	       *
	       * @param {Object} value
	       * @return {Boolean}
	       */


	      exports.nodeList = function (value) {
	        var type = Object.prototype.toString.call(value);
	        return value !== undefined && (type === '[object NodeList]' || type === '[object HTMLCollection]') && 'length' in value && (value.length === 0 || exports.node(value[0]));
	      };
	      /**
	       * Check if argument is a string.
	       *
	       * @param {Object} value
	       * @return {Boolean}
	       */


	      exports.string = function (value) {
	        return typeof value === 'string' || value instanceof String;
	      };
	      /**
	       * Check if argument is a function.
	       *
	       * @param {Object} value
	       * @return {Boolean}
	       */


	      exports.fn = function (value) {
	        var type = Object.prototype.toString.call(value);
	        return type === '[object Function]';
	      };
	      /***/

	    },
	    /* 7 */

	    /***/
	    function (module, exports) {
	      function select(element) {
	        var selectedText;

	        if (element.nodeName === 'SELECT') {
	          element.focus();
	          selectedText = element.value;
	        } else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
	          var isReadOnly = element.hasAttribute('readonly');

	          if (!isReadOnly) {
	            element.setAttribute('readonly', '');
	          }

	          element.select();
	          element.setSelectionRange(0, element.value.length);

	          if (!isReadOnly) {
	            element.removeAttribute('readonly');
	          }

	          selectedText = element.value;
	        } else {
	          if (element.hasAttribute('contenteditable')) {
	            element.focus();
	          }

	          var selection = window.getSelection();
	          var range = document.createRange();
	          range.selectNodeContents(element);
	          selection.removeAllRanges();
	          selection.addRange(range);
	          selectedText = selection.toString();
	        }

	        return selectedText;
	      }

	      module.exports = select;
	      /***/
	    }])
	  );
	});
	});

	var ClipboardJS = unwrapExports(clipboard);

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
	 * @var email 邮箱
	 * @var url url
	 * @var upperCase 小写
	 * @var lowerCase 大写
	 * @var hexColor 十六进制颜色
	 * @var styleUtil 样式表单位
	 *
	 * @author: nocoolyoyo
	 * @date: 2018-03-11
	 */
	var RegexMap = {
	  email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	  url: /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/,
	  upperCase: /^[A-Z]+$/,
	  lowerCase: /^[a-z]+$/,
	  hexColor: /^#[0-9a-fA-F]{6}$/,
	  styleUnit: /px|vw|rem|em|%$/
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

	  if (/mobile/gi.test(navigator.userAgent)) {
	    Client.type = 'mobile';
	  } else {
	    Client.type = 'pc';
	  }

	  if (/ipad|iphone|mac/gi.test(navigator.userAgent)) {
	    Client.OS = 'IOS';
	  } else if (/android/gi.test(navigator.userAgent)) {
	    Client.OS = 'Android';
	  } else if (/window/gi.test(navigator.userAgent)) {
	    Client.OS = 'Windows';
	  }

	  if (lang && lang !== '') {
	    lang = lang.split('-');

	    if (lang.length > 1) {
	      lang = "".concat(lang[0], "-").concat(lang[1].toUpperCase());
	    } else {
	      lang = lang[0];
	    }

	    Client.lang = lang;
	  } else {
	    Client.lang = navigator.language;
	  }

	  console.log(123123123223); // 挂载硬件信息到节点属性

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
	    initClient();
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
	 * Created by nocoolyoyo on 2018/6/11.
	 */
	module.exports = {
	  RegexMap: RegexMap,
	  copy2Board: clip2Board,
	  initClient: initClient,
	  getClient: getClient,
	  getParam: getUrlParam,
	  // 旧版本做兼容
	  getUrlParam: getUrlParam,
	  appendUrlParam: appendUrlParam,
	  getStyle: getStyle,
	  strStyle: strStyle,
	  imageLoaded: imageLoaded,
	  isEmail: isEmail,
	  isLowerCase: isLowerCase,
	  isUpperCase: isUpperCase,
	  isURL: isURL,
	  isTrimEmpty: isTrimEmpty,
	  isEmptyObject: isEmptyObject,
	  isHexColor: isHexColor,
	  isStyleUnit: isStyleUnit
	};
	module.exports.default = module.exports;

})));
