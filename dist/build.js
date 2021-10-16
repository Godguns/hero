/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./APP/APP.hero":
/*!**********************!*
  !*** ./APP/APP.hero ***!
  \**********************/
/***/ (() => {

throw new Error("Module build failed (from ./hero-loader.js):\nTypeError: temp.replace is not a function\n    at Object.heroLoader (/Users/godguns/Desktop/hero/hero-loader.js:3:20)");

/***/ }),

/***/ "./hero_main/index.js":
/*!****************************!*
  !*** ./hero_main/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hero */ "./main/hero/index.js");
/* harmony import */ var _APP_APP_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../APP/APP.hero */ "./APP/APP.hero");
/* harmony import */ var _APP_APP_hero__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_APP_APP_hero__WEBPACK_IMPORTED_MODULE_1__);


var hr = new hero__WEBPACK_IMPORTED_MODULE_0__.default({
  el: _APP_APP_hero__WEBPACK_IMPORTED_MODULE_1___default()(),
  fragment: {},
  state: {
    data: {
      x: "9",
      y: "99",
      z: [1, 2, 3]
    }
  }
});

/***/ }),

/***/ "./main/hero/Observer.js":
/*!*******************************!*
  !*** ./main/hero/Observer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Observer": () => /* binding */ Observer
/* harmony export */ });
/* harmony import */ var _observe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observe */ "./main/hero/observe.js");
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array.js */ "./main/hero/array.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




function defineReactive(data, key, value) {
  (0,_observe__WEBPACK_IMPORTED_MODULE_0__.observe)(value);
  Object.defineProperty(data, key, {
    get: function get() {
      console.log('获取数据', value);
      return value;
    },
    set: function set(newValue) {
      console.log('设置数据', newValue);
      if (newValue === value) return;
      value = newValue;
    }
  });
}

var Observer = /*#__PURE__*/function () {
  function Observer(data) {
    _classCallCheck(this, Observer);

    if (Array.isArray(data)) {
      data.__proto__ = _array_js__WEBPACK_IMPORTED_MODULE_1__.arrayMethods;
    } else {
      this.walk(data);
    }
  }

  _createClass(Observer, [{
    key: "walk",
    value: function walk(data) {
      var keys = Object.keys(data);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var value = data[key];
        defineReactive(data, key, value);
      }
    }
  }]);

  return Observer;
}();

/***/ }),

/***/ "./main/hero/array.js":
/*!****************************!*
  !*** ./main/hero/array.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrayMethods": () => /* binding */ arrayMethods
/* harmony export */ });
/* harmony import */ var _observe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observe */ "./main/hero/observe.js");
 // 拷贝新的对象，用来查找老的方法, 不修改原型上的方法

var arrayMethods = Object.create(Array.prototype);
var arr_methods = ["push", "pop", "shift", "unshift", "slice", "splice"]; //循环遍历arr_methods 来劫持原本的数组方法方法

var observerArray = function observerArray(args) {
  for (var i = 0; i < args.length; i++) {
    (0,_observe__WEBPACK_IMPORTED_MODULE_0__.observe)(args[i]);
  }
};

arr_methods.forEach(function (item) {
  //劫持方法
  arrayMethods[item] = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var result = Array.prototype[item].apply(this, args);
    console.log("===数组劫持===");
    var runtime_arguments;

    switch (item) {
      case "push":
        runtime_arguments = args;
        break;

      case "unshift":
        runtime_arguments = args;
        break;

      case "splice":
        runtime_arguments = args.slice(2); //当执行splice方法的时候获取到用户给splice方法的参数（start开始位置,count结束的数量,添加的数据）

        break;

      default:
        break;
    }

    if (runtime_arguments) observerArray(runtime_arguments); //对用户添加或者删除的数据添加响应式

    return result;
  };
});

/***/ }),

/***/ "./main/hero/index.js":
/*!****************************!*
  !*** ./main/hero/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ _default
/* harmony export */ });
/* harmony import */ var _observe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observe */ "./main/hero/observe.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var _default = /*#__PURE__*/function () {
  function _default(e) {
    _classCallCheck(this, _default);

    console.log(e);

    this._init(e);

    if (this.el !== null) {
      this._render(this.$el, this.$options.data);
    }
  }

  _createClass(_default, [{
    key: "_init",
    value: function _init(options) {
      var vm = this;
      vm.$el = options.el;
      vm.$fragment = options.fragment;
      vm.$options = options.state;
      (0,_observe__WEBPACK_IMPORTED_MODULE_0__.initState)(vm);
    }
    /**
     * _render渲染函数：
     * 遍历dom节点，替换data数据
     */

  }, {
    key: "_render",
    value: function _render(view, data) {
      var _loop = function _loop(key) {
        var reg = new RegExp("{{".concat(key, "}}"), "g");

        if (data.hasOwnProperty(key)) {
          view = view.replace(reg, function () {
            return data[key];
          });
        }
      };

      for (var key in data) {
        _loop(key);
      }

      var app = document.querySelector("#app");
      app.innerHTML = view;
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./main/hero/observe.js":
/*!******************************!*
  !*** ./main/hero/observe.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initState": () => /* binding */ initState,
/* harmony export */   "observe": () => /* binding */ observe
/* harmony export */ });
/* harmony import */ var _Observer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observer.js */ "./main/hero/Observer.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


function initState(vm) {
  var opts = vm.$options;

  if (opts.data) {
    //如果用户输入了data属性
    initData(vm);
  }
}

function initData(vm) {
  var data = vm.$options.data; //观测数据响应式

  observe(vm.$options);
}

function observe(data) {
  if (_typeof(data) !== "object" || data == null) {
    return;
  }

  return new _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer(data);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./hero_main/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=build.js.map