import {
  OBJECT_CLASS_REGEXP
} from '../constants/regexp';

/**
 * convert any object
 *
 * @param {any} object
 * @returns {string}
 */
const toString = (object) => {
  return Object.prototype.toString.call(object);
};

/**
 * get the object class name for the provided object
 *
 * @param {any} object
 * @returns {string}
 */
const getObjectClass = (object) => {
  const objectToString = toString(object);
  const objectClass = objectToString.replace(OBJECT_CLASS_REGEXP, (match, value) => {
    return value;
  });

  return objectClass;
};

export {getObjectClass};
export {toString};
