# get-object-class

A more explicit improvement on typeof

#### Installation

```
$ npm i get-object-class --save
```

#### Usage

```javascript
// ES2015
import goc from 'get-object-class';

// CommonJS
const goc = require('get-object-class');

// script
const goc = window.getObjectClass;
```

#### Implementation

```javascript
const array = [];
const promise = Promise.resolve();

console.log(goc(array)); // array
console.log(goc(promise)); // promise
```

#### Why do we need this?

Generally speaking, you can use the [`typeof` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) to determine a number of object classes:

* boolean
* function
* number
* object
* string
* symbol
* undefined

However, this list is quite limited, and things can get confusing for other classes of objects:

```javascript
console.log(typeof new Date()); // object
console.log(typeof null); // object
```

This library rectifies that by giving you the specific object class for any object (if I missed one tell me, I'll add it):

* Arguments => `arguments`
* Array => `array`
* ArrayBuffer => `arraybuffer`
* Boolean => `boolean`
* DataView => `dataview`
* Date => `date`
* Error => `error`
* Float32Array => `float32array`
* Float64Array => `float64array`
* Function => `function`
* GeneratorFunction => `generatorfunction`
* global => `global` (specific to node)
* Int8Array => `int8array`
* Int16Array => `int16array`
* Int32Array => `int32array`
* Map => `map`
* Math => `math`
* Null => `null`
* Number => `number`
* Object => `object`
* Promise => `promise`
* RegExp => `regexp`
* Set => `set`
* String => `string`
* Symbol => `symbol`
* Uint8Array => `uint8array`
* Uint8ClampedArray => `uint8Clampedarray`
* Uint16Array => `uint16array`
* Uint32Array => `uint32array`
* WeakMap => `weakmap`
* WeakSet => `weakset`
* Window => `window` (specific to browser)

#### Checker functions

`get-object-class` also provides a checker function for each object class, example:

```javascript
const array = [];
const boolean = true;

console.log(goc.isArray(array)); // true
console.log(goc.isBoolean(array)); // false
```

Keep in mind that the name of the function is driven by the PascalCase names in the list above:

```javascript
const regexp = /foo/;

console.log(goc.isRegExp(regexp)); // true
console.log(goc.isFloat32Array(regexp)); // false
```

### Development

Standard stuff, clone the repo and `npm i` to get the dependencies. npm scripts available:
* `build` => builds the distributed JS with `NODE_ENV=development` and with sourcemaps
* `build-minified` => builds the distributed JS with `NODE_ENV=production` and minified
* `compile-for-publish` => runs the `lint`, `test`, `transpile`, `build`, and `build-minified` scripts
* `dev` => runs the webpack dev server for the playground
* `lint` => runs ESLint against files in the `src` folder
* `prepublish` => if in publish, runs `compile-for-publish`
* `test` => run ava with NODE_ENV=test
* `test:watch` => runs `test` but with persistent watcher
* `transpile` => runs Babel against files in `src` to files in `lib`
