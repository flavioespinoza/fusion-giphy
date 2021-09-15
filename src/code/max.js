function findMax(values) {
  // Set max to an initial value such that all values[i] will be 
  // greater than the initial value. 
  // This is why we initialize max with a value of negative Infinity.
  let max = -Infinity;
  for (let i = 0; i < values.length; i++) {
    console.log(values[i]);
    console.log(max);
    if (values[i] > max) {
      max = values[i];
    }
  }
  return max;
}

/**
 * @example
 *  // max will init with a value of -Infinity then 1 then 123 then 500 then 500 then 500
 * -Infinity < 1 < 123 < 500 > 115
 *                       500 > 444
 *                       500 > 80
 * */
console.log(findMax([1, 123, 500, 115, 444, 88])); // => 501

/**
 * @example
 * // max will init with a value of -Infinity then -1 then 0 then 0 then 0
 * -Infinity < -1 < 0 > -5
 *                  0 > -3
 *                  0 > -8
 * */
console.log(findMax([-1, 0, -5, -3, -8])); // => 0
