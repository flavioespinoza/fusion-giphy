function plusOne(array) {
  // set vars
  let remainder = 1;
  // check for leading zeros
  while(array[0] === 0) array.shift();
  // reverse loop
  for (let i = array.length - 1; i >= 0; i--) {
    const current = array[i] + remainder;
    remainder = current === 10 ? 1 : 0;
    array[i] = current % 10;
  }
  // check if modified array items are all zeros
  if (remainder === 1) array.unshift(1);
  // return array
  return array;
};

const arrays = [
  [0],
  [1],
  [0, 2, 3],
  [1, 2, 3],
  [1, 2, 9],
  [1, 9, 9],
  [9, 9, 9],
  [9, 1, 9],
];

const results = [];
for (let i = 0; i < arrays.length; i++) {
  results.push(plusOne(arrays[i]));
}

console.log(results);
/**
 * @example
 * // output
 * [ 
 *  [ 1 ],
 *  [ 2 ],
 *  [ 2, 4 ],
 *  [ 1, 2, 4 ],
 *  [ 1, 3, 0 ],
 *  [ 2, 0, 0 ],
 *  [ 1, 0, 0, 0 ],
 *  [ 9, 2, 0 ] 
 * ]
 * */

