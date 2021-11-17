"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function openTheLock(start, target, safeList) {
  var len = 1;
  var path = [];
  var que = [start];
  var availble = Array.from(new Set(_toConsumableArray(safeList.join('')))); // [ '0', '1' ];

  var dict = new Set(safeList); // Set { 000, 001, 101, 110, 111 }

  var seen = new Set(que); // Set { '010' }

  while (que.length > 0) {
    console.log('que', que);
    var next = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = que[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var word = _step.value;

        if (word === target) {
          console.log('len', len);
          return true;
        }

        var arr = word.split('');

        for (var i = 0; i < arr.length; i++) {
          for (var d = 0; d < availble.length; d++) {
            arr[i] = availble[d];
            var nv = arr.join('');

            if (!seen.has(nv) && dict.has(nv)) {
              next.push(nv);
              seen.add(nv);
            }
          }

          arr[i] = word[i];
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    que = next;
    len++;
  }

  return false;
}

var start;
var target;
var list;
start = '010';
target = '111';
list = ['000', '001', '101', '110', '111'];
console.log(openTheLock(start, target, list)); // true | 3

var beginWord = 'hit';
var endWord = 'cog';
var wordList = ['hot', 'dot', 'dog', 'lot', 'log', 'cog'];
console.log(openTheLock(beginWord, endWord, wordList)); // true | 5

beginWord = 'hit';
endWord = 'cog';
wordList = ['hot', 'dot', 'dog', 'lot', 'cot', 'log', 'cog'];
console.log(openTheLock(beginWord, endWord, wordList)); // true | 4
// start = 'bbb';
// target = '111';
// list = ['000', '001', '101', '110', '111'];
// console.log(openTheLock(start, target, list)); // false