"use strict";

function wordsFromPhoneNumber(phoneNumber, words) {
  var res = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = words[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var word = _step.value;
      var nums = '';
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = word[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _char = _step2.value;
          if ('abc'.includes(_char)) nums += '2';
          if ('def'.includes(_char)) nums += '3';
          if ('ghi'.includes(_char)) nums += '4';
          if ('jkl'.includes(_char)) nums += '5';
          if ('mno'.includes(_char)) nums += '6';
          if ('pqrs'.includes(_char)) nums += '7';
          if ('tuv'.includes(_char)) nums += '8';
          if ('wxyz'.includes(_char)) nums += '9';
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

      if (phoneNumber.includes(nums)) {
        res.push(word);
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

  return res;
}

var phoneNumber = '3662277';
var words = ['foo', 'bar', 'baz', 'foobar', 'emo', 'cap', 'car', 'cat'];
console.log(wordsFromPhoneNumber(phoneNumber, words));
var output = ['foo', 'bar', 'foobar', 'emo', 'cap', 'car'];