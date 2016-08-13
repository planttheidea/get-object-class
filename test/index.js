import camelCase from 'lodash/camelCase';
import test from 'ava';

import goc from '../src/index';

import {
  CLASS_NAMES
} from '../src/constants/classNames';

import * as data from './helpers/fakeData';

data.JSON = JSON;

const classNamesWithoutWindow = CLASS_NAMES.filter((className) => {
  return className !== 'Window';
});

const dataKeys = Object.keys(data).filter((dataKey) => {
  return dataKey.toUpperCase() === dataKey && dataKey !== 'WINDOW';
});

test('if main function returns the correct value', (t) => {
  dataKeys.forEach((dataKey) => {
    const className = camelCase(dataKey).toLowerCase();

    t.is(goc(data[dataKey]), className);
  });
});

test('if each checker function returns the correct boolean value for the object type', (t) => {
  classNamesWithoutWindow.forEach((className) => {
    dataKeys.forEach((dataKey) => {
      const dataClassName = camelCase(dataKey).toLowerCase();
      const expectedResult = dataClassName === className.toLowerCase();

      t[expectedResult](goc[`is${className}`](data[dataKey]));
    });
  });
});