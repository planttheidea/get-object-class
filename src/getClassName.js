// constants
import { HTML_ELEMENT_REGEXP } from './constants';

const toString = Object.prototype.toString;

/**
 * get the object prototype toString of the object passed, and return
 * the classname from that string
 *
 * @param {*} object
 * @returns {string}
 */
export const getClassName = (object) => {
  const objectToString = toString.call(object);

  return objectToString.substring(8, objectToString.length - 1);
};

/**
 * determine if the object passed is an element based on its object class
 *
 * @param {*} object
 * @returns {boolean}
 */
export const getIsElement = (object) => {
  return (
    HTML_ELEMENT_REGEXP.test(getClassName(object)) ||
    (!!object && object.nodeType === 1)
  );
};
