import snakeCase from 'lodash/snakeCase';
import test from 'ava';

import {
  getClassName,
  getClassNameFromToString,
  getIsElement,
  getStartcaseString,
  toString
} from '../../src/utils/getClassName';

import * as data from '../helpers/fakeData';

import {
  CLASS_NAMES
} from '../../src/utils/constants';

data.JSON = JSON;

// window can't be tested here because it is in node
const classNamesWithoutWindowSpecificProperties = CLASS_NAMES.filter((className) => {
  return className !== 'Window';
});

test('if getClassName returns the Startcase version of the object\'s class type', (t) => {
  let screamingSnakeClassName;

  classNamesWithoutWindowSpecificProperties.forEach((className) => {
    screamingSnakeClassName = snakeCase(className).toUpperCase();

    t.is(getClassName(data[screamingSnakeClassName], true), className);
  });
});

test.todo('getClassNameFromToString');

test('if getIsElement returns true for elements but false for all else', (t) => {
  for (let key in data) {
    t.false(getIsElement(data[key]));
  }

  const div = document.createElement('div');

  t.true(getIsElement(div));
});

test('if getStartcaseString converts the string passed to Startcase', (t) => {
  const uppercase = 'FOOBAR';
  const lowercase = 'foobar';
  const mixedCase = 'fOoBaR';

  const expectedResult = 'Foobar';

  t.is(getStartcaseString(uppercase), expectedResult);
  t.is(getStartcaseString(lowercase), expectedResult);
  t.is(getStartcaseString(mixedCase), expectedResult);
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