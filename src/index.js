// constants
import { CLASS_NAMES } from './constants';

// utils
import { getClassName, getIsElement } from './getClassName';

/**
 * return the lowercase object class name for the
 * object provided
 *
 * @param {*} object
 * @returns {string}
 */
const getObjectClass = (object) => {
  if (object === null) {
    return 'null';
  }

  if (getIsElement(object)) {
    return 'element';
  }

  const type = typeof object;

  return type === 'object' || type === 'function'
    ? getClassName(object).toLowerCase()
    : type;
};

/**
 * create the is checkers for all object classes saved in CLASS_NAMES,
 * which all accept {any} object and return {string}
 */
CLASS_NAMES.forEach((className) => {
  const lowerCaseClassName = className.toLowerCase();

  getObjectClass[`is${className}`] = (object) =>
    getObjectClass(object) === lowerCaseClassName;
});

/**
 * isElement is unique because there can be a wealth of object class
 * names associated with it, so it gets created separately
 *
 * @param {*} object
 * @returns {boolean}
 */
getObjectClass.isElement = getIsElement;

export default getObjectClass;
