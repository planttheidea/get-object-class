var getObjectClass =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(2);
	
	var _getClassName = __webpack_require__(3);
	
	/**
	 * return the lowercase object class name for the
	 * object provided
	 *
	 * @param {*} object
	 * @returns {string}
	 */
	// constants
	var getObjectClass = function getObjectClass(object) {
	  if (object === null) {
	    return 'null';
	  }
	
	  if ((0, _getClassName.getIsElement)(object)) {
	    return 'element';
	  }
	
	  return (0, _getClassName.getClassName)(object).toLowerCase();
	};
	
	/**
	 * create the is checkers for all object classes saved in CLASS_NAMES,
	 * which all accept {any} object and return {string}
	 */
	
	
	// utils
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

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var CLASS_NAMES = ['Arguments', 'Array', 'ArrayBuffer', 'Boolean', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array', 'Function', 'GeneratorFunction', 'global', 'Int8Array', 'Int16Array', 'Int32Array', 'JSON', 'Map', 'Math', 'Null', 'Number', 'Object', 'Promise', 'RegExp', 'Set', 'String', 'Symbol', 'Uint8Array', 'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'Undefined', 'WeakMap', 'WeakSet', 'Window'];
	
	var HTML_ELEMENT_REGEXP = /HTML(.*)Element/;
	
	exports.CLASS_NAMES = CLASS_NAMES;
	exports.HTML_ELEMENT_REGEXP = HTML_ELEMENT_REGEXP;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toString = exports.getStartcaseString = exports.getClassNameFromToString = exports.getClassName = exports.getIsElement = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // constants
	
	
	var _constants = __webpack_require__(2);
	
	/**
	 * convert any object
	 *
	 * @param {*} object
	 * @returns {string}
	 */
	var toString = function toString(object) {
	  return Object.prototype.toString.call(object);
	};
	
	/**
	 * determine if the object passed is an element based on its object class
	 * 
	 * @param {*} object
	 * @returns {boolean}
	 */
	var getIsElement = function getIsElement(object) {
	  var className = getClassName(object);
	
	  return _constants.HTML_ELEMENT_REGEXP.test(className) || !!(object && object.nodeType === 1);
	};
	
	/**
	 * get the object prototype toString of the object passed, and return
	 * the classname from that string
	 *
	 * @param {*} object
	 * @returns {string}
	 */
	var getClassNameFromToString = function getClassNameFromToString(object) {
	  var objectToString = toString(object);
	
	  return objectToString.substring(8, objectToString.length - 1);
	};
	
	/**
	 * convert the Startcase version of the string passed
	 * 
	 * @param {string} string
	 * @returns {string}
	 */
	var getStartcaseString = function getStartcaseString(string) {
	  var lowercaseString = string.toLowerCase();
	
	  return '' + lowercaseString.charAt(0).toUpperCase() + lowercaseString.substring(1);
	};
	
	/**
	 * get the object class name for the provided object
	 *
	 * @param {*} object
	 * @returns {string}
	 */
	var getClassName = function getClassName(object) {
	  var typeofObject = typeof object === 'undefined' ? 'undefined' : _typeof(object);
	
	  switch (typeofObject) {
	    case 'object':
	    case 'function':
	      return getClassNameFromToString(object);
	
	    default:
	      return getStartcaseString(typeofObject);
	  }
	};
	
	exports.getIsElement = getIsElement;
	exports.getClassName = getClassName;
	exports.getClassNameFromToString = getClassNameFromToString;
	exports.getStartcaseString = getStartcaseString;
	exports.toString = toString;

/***/ }
/******/ ]);
//# sourceMappingURL=get-object-class.js.map