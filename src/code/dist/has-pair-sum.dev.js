"use strict";

function hasPairSum(arr, target) {
  var res = [];
  var compliments = new Set();

  for (var i = 0; i < arr.length; i++) {
    if (compliments.has(arr[i])) {
      res.push([arr[i], target - arr[i]]);
    }

    compliments.add(target - arr[i]);
  }

  return res;
}

var input;
input = [1, 2, 4, 4];
console.log(hasPairSum(input, 8));
input = [1, 2, 5, 7];
console.log(hasPairSum(input, 8));
input = [0, 2, 5, 8];
console.log(hasPairSum(input, 8));
input = [1, 2, 5, 9];
console.log(hasPairSum(input, 8));
input = [1, 2, 4, 4, 5, 6, 7];
console.log(hasPairSum(input, 8));