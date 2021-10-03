"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function twoSum(array, targetSum) {
  var map = {};
  var set = new Set(_toConsumableArray(array));

  for (var i = 0; i < array.length; i++) {
    var x = targetSum - array[i];
    map[x] = array[i];
  }

  for (var key in map) {
    if (set.has(Number(key)) && Number(key) !== map[key]) {
      return [Number(key), map[key]];
    }
  }

  return [];
}

console.log(twoSum([3, 5, -4, 8, 11, 1, -1, 6], 10)); // => [11, -1]

console.log(twoSum([-7, -5, -3, -1, 0, 1, 5, 5], -5)); // => [0, 5]

console.log(twoSum([3, 5, -4, 8, 11, 1, -1, 6], 15)); // => []