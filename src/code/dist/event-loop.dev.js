"use strict";

var number;
var arrLength = 5;

for (var i = 0; i < arrLength; i++) {
  number = i;
  setTimeout(function () {
    console.log(number); // 4, 4, 4, 4, 4
  }, 0);
}

for (var _i = 0; _i < arrLength; _i++) {
  number = _i;
  setTimeout(function () {
    console.log(number); // 4, 4, 4, 4, 4
  }, 0);
}

for (var i = 0; i < arrLength; i++) {
  setTimeout(function () {
    console.log(i); // 5, 5, 5, 5, 5
  }, 0);
}

var _loop = function _loop(_i2) {
  setTimeout(function () {
    console.log(_i2); // 0, 1, 2, 3, 4
  }, 0);
};

for (var _i2 = 0; _i2 < arrLength; _i2++) {
  _loop(_i2);
}