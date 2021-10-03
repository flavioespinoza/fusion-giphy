"use strict";

// An integer x - Record a new score of x.
// "+" - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores.
// "D" - Record a new score that is double the previous score. It is guaranteed there will always be a previous score.
// "C" - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.
var ops = ['5', '2', 'C', 'D', '+']; // Output: 30

function calPoints(ops) {
  var record = [];

  for (var i = 0; i < ops.length; i++) {
    if (isNaN(ops[i])) {
      if (ops[i] === 'C') {
        record.pop();
      }

      if (ops[i] === 'D') {
        var x = 2 * record[record.length - 1];
        record.push(x);
      }

      if (ops[i] === '+') {
        var _x = record[record.length - 1] + record[record.length - 2];

        record.push(_x);
      }
    } else {
      record.push(parseInt(ops[i]));
    }
  }

  var count = 0;

  for (var _i = 0; _i < record.length; _i++) {
    count += record[_i];
  }

  return count;
}

console.log(calPoints(ops));