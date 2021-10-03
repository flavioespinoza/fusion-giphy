"use strict";

// [1, 2, 4] -> [1, 2, 5]
// [1, 9, 9] -> [2, 0, 0]
// [9, 9, 9] -> [1, 0, 0, 0]
function addOneLinear(array) {
  var result = [];
  var numberString = '';
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var digit = _step.value;
      numberString += digit.toString();
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

  var increaseByOne = Number(numberString) + 1;
  var stringByOne = increaseByOne.toString();
  var split = stringByOne.split('');
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = split[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var string = _step2.value;
      result.push(Number(string));
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return result;
}

function addOneArrayFrom(array) {
  var numberString = Array.from(array).map(String).join('');
  var addOne = Number(numberString) + 1;
  return Array.from(addOne.toString()).map(Number);
}

console.log(addOneArrayFrom([9, 9, 9]));

function addOne(array) {
  var result = new Array(array.length).fill(0);
  var carry = 1;

  for (var i = array.length - 1; i >= 0; i--) {
    var sum = array[i] + carry;

    if (sum === 10) {
      carry = 1;
    } else {
      carry = 0;
    }

    result[i] = sum % 10;
  } // if carry === 1 after for loop then all numbers were 9
  // therefore we need to set result to a new array with 
  // length array.length + 1 and fill it with zeros
  // then we set result at index 0 to 1


  if (carry === 1) {
    result = new Array(array.length + 1).fill(0);
    result[0] = 1;
  }

  return result;
}

var arrays = [[1, 2, 4], [1, 9, 9], [9, 9, 9], [9, 1, 9]];

for (var i = 0; i < arrays.length; i++) {
  console.log(addOne(arrays[i]));
}