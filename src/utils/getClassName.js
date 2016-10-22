// constants
import {
  HTML_ELEMENT_REGEXP
} from './constants';

/**
 * convert any object
 *
 * @param {*} object
 * @returns {string}
 */
const toString = (object) => {
  return Object.prototype.toString.call(object);
};

/**
 * determine if the object passed is an element based on its object class
 * 
 * @param {*} object
 * @returns {boolean}
 */
const getIsElement = (object) => {
  const className = getClassName(object);

  return HTML_ELEMENT_REGEXP.test(className) || !!(object && object.nodeType === 1);
};

/**
 * get the object prototype toString of the object passed, and return
 * the classname from that string
 *
 * @param {*} object
 * @returns {string}
 */
const getClassNameFromToString = (object) => {
  const objectToString = toString(object);

  return objectToString.substring(8, objectToString.length - 1);
};

/**
 * convert the Startcase version of the string passed
 * 
 * @param {string} string
 * @returns {string}
 */
const getStartcaseString = (string) => {
  const lowercaseString = string.toLowerCase();

  return `${lowercaseString.charAt(0).toUpperCase()}${lowercaseString.substring(1)}`;
};

/**
 * get the object class name for the provided object
 *
 * @param {*} object
 * @returns {string}
 */
const getClassName = (object) => {
  const typeofObject = typeof object;

  switch (typeofObject) {
    case 'object':
    case 'function':
      return getClassNameFromToString(object);

    default:
      return getStartcaseString(typeofObject);
  }
};

export {getIsElement};
export {getClassName};
export {getClassNameFromToString};
export {getStartcaseString};
export {toString};
