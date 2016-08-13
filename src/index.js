// constants
import {
  CLASS_NAMES
} from './constants/classNames';
import {
  HTML_ELEMENT_REGEXP
} from './constants/regexp';

// utils
import {
  getObjectClass as getClassName
} from './utils/getObjectClass';

/**
 * return the lowercase object class name for the
 * object provided
 *
 * @param {any} object
 * @returns {string}
 */
const getObjectClass = (object) => {
  if (object === null) {
    return 'null';
  }

  if (object === void 0) {
    return 'undefined';
  }

  if (object && object.nodeType === 1) {
    return 'element';
  }

  return getClassName(object).toLowerCase();

};

/**
 * create the is checkers for all object classes saved in CLASS_NAMES,
 * which all accept {any} object and return {string}
 */
CLASS_NAMES.forEach((className) => {
  getObjectClass[`is${className}`] = (object) => {
    return getClassName(object) === className;
  };
});

/**
 * isElement is unique because there can be a wealth of object class
 * names associated with it, so it gets created separately
 *
 * @param {any} object
 * @returns {boolean}
 */
getObjectClass.isElement = (object) => {
  const className = getClassName(object);

  return HTML_ELEMENT_REGEXP.test(className) || !!(object && object.nodeType === 1);
};

export default getObjectClass;
