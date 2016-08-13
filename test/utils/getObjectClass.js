import snakeCase from 'lodash/snakeCase';
import test from 'ava';

import {
  getObjectClass,
  toString
} from '../../src/utils/getObjectClass';

import * as data from '../helpers/fakeData';

import {
  CLASS_NAMES
} from '../../src/constants/classNames';

data.JSON = JSON;

// window can't be tested here because it is in node
const classNamesWithoutWindowSpecificProperties = CLASS_NAMES.filter((className) => {
  return className !== 'Window';
});

test('if toString converts the object to the appropriate object class string value', (t) => {
  let lastClassName, screamingSnakeClassName;

  classNamesWithoutWindowSpecificProperties.forEach((className) => {
    t.not(lastClassName, className);

    lastClassName = className;

    screamingSnakeClassName = snakeCase(className).toUpperCase();

    t.is(toString(data[screamingSnakeClassName]), `[object ${className}]`);
  });
});

test('if getObjectClass returns the Startcase version of the object\'s class type', (t) => {
  let screamingSnakeClassName;

  classNamesWithoutWindowSpecificProperties.forEach((className) => {
    screamingSnakeClassName = snakeCase(className).toUpperCase();

    t.is(getObjectClass(data[screamingSnakeClassName]), className);
  });
});