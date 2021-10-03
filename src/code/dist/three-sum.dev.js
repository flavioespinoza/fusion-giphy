"use strict";

function threeNumberSum(array, targetSum) {
  // time O(n^2) | space O(n)
  array.sort(function (a, b) {
    return a - b;
  });
  var triplets = []; // loop by 3s

  for (var i = 0; i < array.length - 2; i++) {
    var left = i + 1;
    var right = array.length - 1;

    while (left < right) {
      var currentSum = array[i] + array[left] + array[right];

      if (currentSum === targetSum) {
        triplets.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (currentSum < targetSum) {
        left++;
      } else if (currentSum > targetSum) {
        right--;
      }
    }
  }

  return triplets;
}