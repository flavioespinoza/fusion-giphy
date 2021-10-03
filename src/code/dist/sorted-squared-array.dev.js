"use strict";

// time O(n(log(n)) | space O(n)
function sortedSquaredArray(array) {
  // response - array of original integers squared sorted in ascending order
  var res = []; // loop 

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var value = _step.value;
      // push value^2 onto response array
      res.push(Math.pow(value, 2));
    } // return response as sorted in ascending order

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

  return res.sort(function (a, b) {
    return a - b;
  });
} // Do not edit the line below.


exports.sortedSquaredArray = sortedSquaredArray;