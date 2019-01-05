let ARGUMENTS;

const argumentsFunc = function() {
  ARGUMENTS = arguments;
};

argumentsFunc();

export { ARGUMENTS };

export const ARRAY = [];
export const ARRAY_BUFFER = new ArrayBuffer(8);
export const BOOLEAN = true;
export const DATA_VIEW = new DataView(new ArrayBuffer(2));
export const DATE = new Date();
export const ERROR = new Error('foo');
export const FLOAT_32_ARRAY = new Float32Array(8);
export const FLOAT_64_ARRAY = new Float64Array(8);
export const FUNCTION = function() {};
export const GENERATOR_FUNCTION = function*() {};
export const GLOBAL = global;
export const INT_8_ARRAY = new Int8Array(8);
export const INT_16_ARRAY = new Int16Array(8);
export const INT_32_ARRAY = new Int32Array(8);
export const MAP = new Map();
export const MATH = Math;
export const NULL = null;
export const NUMBER = 2;
export const OBJECT = {};
export const PROMISE = Promise.resolve();
export const REG_EXP = new RegExp();
export const SET = new Set();
export const STRING = 'foo';
export const SYMBOL = Symbol('foo');
export const UINT_8_ARRAY = new Uint8Array(8);
export const UINT_8_CLAMPED_ARRAY = new Uint8ClampedArray(8);
export const UINT_16_ARRAY = new Uint16Array(8);
export const UINT_32_ARRAY = new Uint32Array(8);
export const UNDEFINED = undefined;
export const WEAK_MAP = new WeakMap();
export const WEAK_SET = new WeakSet();
export const WINDOW = window;
