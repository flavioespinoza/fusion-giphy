"use strict";

var _balanced = _interopRequireDefault(require("../balanced"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// @flow
test('valid parentheses', function () {
  expect((0, _balanced["default"])('[]]')).toEqual(false);
  expect((0, _balanced["default"])('[()]{}{[()()]()}')).toEqual(true);
  expect((0, _balanced["default"])('[(()]{}{[()()]()}')).toEqual(false);
  expect((0, _balanced["default"])('[(])')).toEqual(false);
  expect((0, _balanced["default"])('[p]999]')).toEqual(false);
  expect((0, _balanced["default"])('[p()999]{}{[(22)(--)]()8}')).toEqual(true);
  expect((0, _balanced["default"])('[p(()999]{}{[(22)(--)]()8}')).toEqual(false);
  expect((0, _balanced["default"])('[p(]999)')).toEqual(false);
});