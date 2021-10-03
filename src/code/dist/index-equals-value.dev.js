"use strict";

function indexEqualsValue(array) {
  // brute force approach
  // time O(n) | space O(n)
  // i is the returned value
  // loop array
  for (var i = 0; i < array.length; i++) {
    var index = i;
    var value = array[i];

    if (index === value) {
      console.log(index, value);
      return index;
    }
  }

  return -1;
} // Do not edit the line below.


exports.indexEqualsValue = indexEqualsValue;