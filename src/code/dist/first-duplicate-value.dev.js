"use strict";

// time O(n) | space O(n)
function firstDuplicateValue(array) {
  // map = store seen inputs
  var map = {}; // for const value of array
  // if map[value] does NOT exist map[value] equals value
  // else return value

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var value = _step.value;

      if (!map[value]) {
        map[value] = value;
      } else {
        return value;
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

  return -1;
} // Do not edit the line below.


exports.firstDuplicateValue = firstDuplicateValue;