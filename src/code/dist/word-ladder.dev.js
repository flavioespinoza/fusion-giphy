"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function ladderLength(beginWord, endWord, wordList) {
  var len = 1;
  var queue = [beginWord];
  var available = Array.from(new Set(_toConsumableArray(wordList.join(''))));
  console.log(available);
  var dict = new Set(wordList);
  console.log(dict);
  var seen = new Set(queue);
  console.log(seen);

  while (queue.length) {
    var next = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = queue[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var v = _step.value;

        if (v === endWord) {
          return len;
        }

        var arr = v.split('');
        console.log(arr); // ['h', 'o', 't']

        for (var i = 0; i < arr.length; i++) {
          for (var d = 0; d < available.length; d++) {
            arr[i] = available[d]; // 126 combinations vs 468 if you use the entire alphabet

            var nv = arr.join('');
            console.log(nv);

            if (!seen.has(nv) && dict.has(nv)) {
              next.push(nv);
              seen.add(nv);
            }

            arr[i] = v[i];
          }
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

    queue = next;
    len++;
  }

  return 0;
};

var beginWord = "hit";
var endWord = "cog";
var wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
console.log(ladderLength(beginWord, endWord, wordList));