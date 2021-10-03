"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var arr = [1, 2, [3, 4]];
var deep = [1, 2, [3, 4, [5, 6, [7, 8]]], 9]; // To flatten a single level array

console.log(arr.flat()); // [1, 2, 3, 4]

console.log(deep.flat(3)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// is equivalent to

console.log(arr.reduce(function (acc, val) {
  return acc.concat(val);
}, [])); // [1, 2, 3, 4]
// or with decomposition syntax

var flattened = function flattened(arr) {
  var _ref;

  return (_ref = []).concat.apply(_ref, _toConsumableArray(arr));
};

console.log(flattened(arr)); // [1, 2, 3, 4]
// non recursive flatten deep using a stack
// note that depth control is hard/inefficient as we will need to tag EACH value with its own depth

function flatten(input) {
  // create stack from extended input items - won't modify the original input
  var stack = _toConsumableArray(input);

  var res = [];
  var i = 0;

  while (stack.length) {
    // pop value from stack
    var last = stack.pop();

    if (Array.isArray(last)) {
      // push/extend array items back onto stack
      stack.push.apply(stack, _toConsumableArray(last));
    } else {
      // place item at beginning of res array
      res.unshift(last);
    }

    i++;
  }

  return res;
}

console.log(flatten(deep)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

function getArrayDepth(input) {
  var depth = 0;

  if (Array.isArray(input)) {
    depth = 1 + Math.max.apply(Math, _toConsumableArray(input.map(getArrayDepth)));
  }

  return depth;
}

var depth = getArrayDepth(deep);
console.log(deep.flat(depth - 1)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]