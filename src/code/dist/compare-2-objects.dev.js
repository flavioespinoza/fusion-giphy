"use strict";

var equals = function equals(a, b) {
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) return false;
  return JSON.stringify(a) === JSON.stringify(b);
};

var a = {
  name: 'John',
  age: 26
};
var b = {
  name: 'John',
  age: 26
};
console.log(equals(a, b)); // should be true

var c = {
  name: 'John'
};
var d = {
  name: 'John',
  age: undefined
};
console.log(equals(c, d)); // should be false

var e = {
  name: 'John',
  weight: 185
};
var f = {
  name: 'John',
  age: 26
};
console.log(equals(e, f)); // should be false

var g = {
  name: 'John',
  age: []
};
var h = {
  name: 'John',
  age: 26
};
console.log(equals(e, f)); // should be false