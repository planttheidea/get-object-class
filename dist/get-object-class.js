(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("getObjectClass", [], factory);
	else if(typeof exports === 'object')
		exports["getObjectClass"] = factory();
	else
		root["getObjectClass"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var CLASS_NAMES = exports.CLASS_NAMES = ['Arguments', 'Array', 'ArrayBuffer', 'Boolean', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array', 'Function', 'GeneratorFunction', 'global', 'Int8Array', 'Int16Array', 'Int32Array', 'JSON', 'Map', 'Math', 'Null', 'Number', 'Object', 'Promise', 'RegExp', 'Set', 'String', 'Symbol', 'Uint8Array', 'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'Undefined', 'WeakMap', 'WeakSet', 'Window'];

var HTML_ELEMENT_REGEXP = exports.HTML_ELEMENT_REGEXP = /HTML(.*)Element/;

/***/ }),

/***/ "./src/getClassName.js":
/*!*****************************!*\
  !*** ./src/getClassName.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getIsElement = exports.getClassName = undefined;

var _constants = __webpack_require__(/*! ./constants */ "./src/constants.js");

var toString = Object.prototype.toString;

/**
 * get the object prototype toString of the object passed, and return
 * the classname from that string
 *
 * @param {*} object
 * @returns {string}
 */
// constants
var getClassName = exports.getClassName = function getClassName(object) {
  var objectToString = toString.call(object);

  return objectToString.substring(8, objectToString.length - 1);
};

/**
 * determine if the object passed is an element based on its object class
 *
 * @param {*} object
 * @returns {boolean}
 */
var getIsElement = exports.getIsElement = function getIsElement(object) {
  return _constants.HTML_ELEMENT_REGEXP.test(getClassName(object)) || !!object && object.nodeType === 1;
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // constants


// utils


var _constants = __webpack_require__(/*! ./constants */ "./src/constants.js");

var _getClassName = __webpack_require__(/*! ./getClassName */ "./src/getClassName.js");

/**
 * return the lowercase object class name for the
 * object provided
 *
 * @param {*} object
 * @returns {string}
 */
var getObjectClass = function getObjectClass(object) {
  if (object === null) {
    return 'null';
  }

  if ((0, _getClassName.getIsElement)(object)) {
    return 'element';
  }

  var type = typeof object === 'undefined' ? 'undefined' : _typeof(object);

  return type === 'object' || type === 'function' ? (0, _getClassName.getClassName)(object).toLowerCase() : type;
};

/**
 * create the is checkers for all object classes saved in CLASS_NAMES,
 * which all accept {any} object and return {string}
 */
_constants.CLASS_NAMES.forEach(function (className) {
  var lowerCaseClassName = className.toLowerCase();

  getObjectClass['is' + className] = function (object) {
    return getObjectClass(object) === lowerCaseClassName;
  };
});

/**
 * isElement is unique because there can be a wealth of object class
 * names associated with it, so it gets created separately
 *
 * @param {*} object
 * @returns {boolean}
 */
getObjectClass.isElement = _getClassName.getIsElement;

exports.default = getObjectClass;
module.exports = exports['default'];

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/tquetano/git/get-object-class/src/index.js */"./src/index.js");


/***/ })

/******/ });
});
//# sourceMappingURL=get-object-class.js.map