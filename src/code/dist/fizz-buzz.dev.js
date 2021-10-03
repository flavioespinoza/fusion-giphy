"use strict";

function fizzBuzz(n) {
  // set result's initial value to template literal n (string).
  // the template literal allows string.replace() and string.trim() to work on the initial value of result.
  // this also allows n to remain a Number for all math calculations.
  var result = "".concat(n); // if mod 3 has no remainder

  if (n % 3 === 0) {
    // remove template literal n and append "fizz "
    result = result.replace("".concat(n), '') + 'fizz ';
  } // if mod 5 has no remainder


  if (n % 5 === 0) {
    // remove template literal n and append "buzz"
    result = result.replace("".concat(n), '') + 'buzz';
  } // trim off any whitespace: "fizz " => "fizz"


  return result.trim();
}

console.log(fizzBuzz(33)); // fizz

console.log(fizzBuzz(55)); // buzz

console.log(fizzBuzz(15)); // fizz buzz

console.log(fizzBuzz(16)); // 16