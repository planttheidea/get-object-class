import 'babel-polyfill';

import React from 'react';
import {
  render
} from 'react-dom';

import goc from '../src/index';

console.log('{}', goc({}));
console.log('is {} object', goc.isObject({}));
console.log('is {} boolean', goc.isBoolean({}));
console.log('is true boolean', goc.isBoolean(true));
console.log('true', goc(true));
console.log('is true promise', goc.isPromise(true));
console.log('is Promise.resolve() promise', goc.isPromise(Promise.resolve()));
console.log('Promise.resolve()', goc(Promise.resolve()));
console.log('is document.createElement("div") element', goc.isElement(document.createElement('div')));
console.log('document.createElement("div")', goc(document.createElement('div')));
console.log('is "div" element', goc.isElement('dev'));
console.log('json', goc(JSON));
console.log('is json', goc.isJSON(JSON));

const App = () => {
  return (
    <div>
      App
    </div>
  );
};

const div = document.createElement('div');

div.id = 'app-container';

render((
  <App/>
), div);

document.body.appendChild(div);
