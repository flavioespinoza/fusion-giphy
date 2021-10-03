"use strict";

/**
 * @param {number[]} height
 * @return {number}
 */
function trappingRain(height) {
  var result = 0;
  var current;
  var start = 0;
  var end = height.length - 1;

  while (start < end) {
    if (height[start] <= height[end]) {
      current = height[start];

      while (height[++start] < current) {
        result += current - height[start];
      }
    } else {
      current = height[end];

      while (height[--end] < current) {
        result += current - height[end];
      }
    }
  }

  return result;
}

var a = 0;
var b = 0;
console.log(++a);
console.log(b++);