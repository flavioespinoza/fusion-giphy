"use strict";

function binaryGap(number) {
  var binary = Number(number).toString(2);
  var counter = -1;
  var max = 0;
  var i = 0;
  var iterations = [];

  while (number > 0) {
    var digit = binary[i];

    if (digit === '1') {
      if (counter > max) {
        console.log(counter);
        max = counter;
      }

      counter = 0;
    } else if (counter >= 0) {
      counter++;
    } // number equals number divided by 2 rounded up.


    number = Math.floor(number / 2);
    iterations.push(number);
    i++;
  }

  console.log(binary.length); // 11

  console.log(iterations); // [ 520, 260, 130, 65, 32, 16, 8, 4, 2, 1, 0 ]

  console.log(iterations.length); // 11

  return max;
} // console.log(binaryGap(1041));  // 10000010001 => 5


console.log(binaryGap(15)); // 1111 => 0

console.log(binaryGap(32)); // 100000 => 0

console.log(binaryGap(328)); // 101001000 => 2