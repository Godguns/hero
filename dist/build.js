/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./APP/APP.hero":
/*!**********************!*
  !*** ./APP/APP.hero ***!
  \**********************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:0)\nFile was processed with these loaders:\n * ./hero-loader.js\nYou may need an additional loader to handle the result of these loaders.\n> <div><h1>Hellohero</h1></div>");

/***/ }),

/***/ "./main/hero/Observer.js":
/*!*******************************!*
  !*** ./main/hero/Observer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Observer = void 0;

var _observe = __webpack_require__(/*! ./observe */ "./main/hero/observe.js");

var _array = __webpack_require__(/*! ./array.js */ "./main/hero/array.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function defineReactive(data, key, value) {
  (0, _observe.observe)(value);
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
      data.__proto__ = _array.arrayMethods;
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

exports.Observer = Observer;

/***/ }),

/***/ "./main/hero/array.js":
/*!****************************!*
  !*** ./main/hero/array.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.arrayMethods = void 0;

var _observe = __webpack_require__(/*! ./observe */ "./main/hero/observe.js");

// 拷贝新的对象，用来查找老的方法, 不修改原型上的方法
var arrayMethods = Object.create(Array.prototype);
exports.arrayMethods = arrayMethods;
var arr_methods = ["push", "pop", "shift", "unshift", "slice", "splice"]; //循环遍历arr_methods 来劫持原本的数组方法方法

var observerArray = function observerArray(args) {
  for (var i = 0; i < args.length; i++) {
    (0, _observe.observe)(args[i]);
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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _observe = __webpack_require__(/*! ./observe */ "./main/hero/observe.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _default = /*#__PURE__*/function () {
  function _default(e) {
    _classCallCheck(this, _default);

    this._init(e);

    if (this.el !== null) {
      this._render(this.$el.innerHTML, this.$options.data);
    }
  }

  _createClass(_default, [{
    key: "_init",
    value: function _init(options) {
      var vm = this;
      vm.$el = options.el;
      vm.$fragment = options.fragment;
      vm.$options = options.data;
      (0, _observe.initState)(vm);
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

      this.$el.innerHTML = view;
    }
  }]);

  return _default;
}();

exports.default = _default;

/***/ }),

/***/ "./main/hero/observe.js":
/*!******************************!*
  !*** ./main/hero/observe.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.initState = initState;
exports.observe = observe;

var _Observer = __webpack_require__(/*! ./Observer.js */ "./main/hero/Observer.js");

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

  return new _Observer.Observer(data);
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
(() => {
"use strict";
/*!****************************!*
  !*** ./hero_main/index.js ***!
  \****************************/


var _hero = _interopRequireDefault(__webpack_require__(/*! hero */ "./main/hero/index.js"));

var _APP = _interopRequireDefault(__webpack_require__(/*! ../APP/APP.hero */ "./APP/APP.hero"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var hr = new _hero["default"]({
  el: _APP["default"],
  fragment: {},
  data: {
    a: 1,
    b: 2,
    c: 3,
    data: {
      x: "9",
      y: "99",
      z: [1, 2, 3]
    }
  }
}); //hr.$options.data.a=33
//console.log(hr);
})();

/******/ })()
;
//# sourceMappingURL=build.js.map