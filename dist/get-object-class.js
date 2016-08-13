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
	
	exports.__esModule = true;
	
	var _classNames = __webpack_require__(2);
	
	var _regexp = __webpack_require__(3);
	
	var _getObjectClass = __webpack_require__(4);
	
	/**
	 * return the lowercase object class name for the
	 * object provided
	 *
	 * @param {any} object
	 * @returns {string}
	 */
	var getObjectClass = function getObjectClass(object) {
	  if (object === null) {
	    return 'null';
	  }
	
	  if (object === void 0) {
	    return 'undefined';
	  }
	
	  if (object && object.nodeType === 1) {
	    return 'element';
	  }
	
	  return (0, _getObjectClass.getObjectClass)(object).toLowerCase();
	};
	
	/**
	 * create the is checkers for all object classes saved in CLASS_NAMES,
	 * which all accept {any} object and return {string}
	 */
	
	
	// utils
	// constants
	_classNames.CLASS_NAMES.forEach(function (className) {
	  getObjectClass['is' + className] = function (object) {
	    return (0, _getObjectClass.getObjectClass)(object) === className;
	  };
	});
	
	/**
	 * isElement is unique because there can be a wealth of object class
	 * names associated with it, so it gets created separately
	 *
	 * @param {any} object
	 * @returns {boolean}
	 */
	getObjectClass.isElement = function (object) {
	  var className = (0, _getObjectClass.getObjectClass)(object);
	
	  return _regexp.HTML_ELEMENT_REGEXP.test(className) || !!(object && object.nodeType === 1);
	};
	
	exports.default = getObjectClass;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var CLASS_NAMES = ['Arguments', 'Array', 'ArrayBuffer', 'Boolean', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array', 'Function', 'GeneratorFunction', 'global', 'Int8Array', 'Int16Array', 'Int32Array', 'JSON', 'Map', 'Math', 'Null', 'Number', 'Object', 'Promise', 'RegExp', 'Set', 'String', 'Symbol', 'Uint8Array', 'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'Undefined', 'WeakMap', 'WeakSet', 'Window'];
	
	exports.CLASS_NAMES = CLASS_NAMES;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	var HTML_ELEMENT_REGEXP = /HTML(.*)Element/;
	var OBJECT_CLASS_REGEXP = /\[object (\w+)\]/;
	
	exports.HTML_ELEMENT_REGEXP = HTML_ELEMENT_REGEXP;
	exports.OBJECT_CLASS_REGEXP = OBJECT_CLASS_REGEXP;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.toString = exports.getObjectClass = undefined;
	
	var _regexp = __webpack_require__(3);
	
	/**
	 * convert any object
	 *
	 * @param {any} object
	 * @returns {string}
	 */
	var toString = function toString(object) {
	  return Object.prototype.toString.call(object);
	};
	
	/**
	 * get the object class name for the provided object
	 *
	 * @param {any} object
	 * @returns {string}
	 */
	var getObjectClass = function getObjectClass(object) {
	  var objectToString = toString(object);
	  var objectClass = objectToString.replace(_regexp.OBJECT_CLASS_REGEXP, function (match, value) {
	    return value;
	  });
	
	  return objectClass;
	};
	
	exports.getObjectClass = getObjectClass;
	exports.toString = toString;

/***/ }
/******/ ]);
//# sourceMappingURL=get-object-class.js.map