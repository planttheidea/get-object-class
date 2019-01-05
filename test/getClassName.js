import snakeCase from 'lodash/snakeCase';
import test from 'ava';

import { getClassName, getIsElement } from '../src/getClassName';
import { CLASS_NAMES } from '../src/constants';

import * as data from './helpers/fakeData';

data.JSON = JSON;

// window can't be tested here because it is in node
const classNamesWithoutWindowSpecificProperties = CLASS_NAMES.filter(
  (className) => {
    return className !== 'Window';
  }
);

test("if getClassName returns the Startcase version of the object's class type", (t) => {
  let screamingSnakeClassName;

  classNamesWithoutWindowSpecificProperties.forEach((className) => {
    screamingSnakeClassName = snakeCase(className).toUpperCase();

    t.is(getClassName(data[screamingSnakeClassName], true), className);
  });
});

test('if getIsElement returns true for elements but false for all else', (t) => {
  for (let key in data) {
    t.false(getIsElement(data[key]));
  }

  const div = document.createElement('div');

  t.true(getIsElement(div));
});
