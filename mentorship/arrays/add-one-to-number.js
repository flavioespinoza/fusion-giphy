function addOne(A) {
  let result = [];
  let carry = 1;
  // check if first item is a zero
  while (A[0] === 0) {
    A.shift();
  }
  for (let i = A.length - 1; i >= 0; i--) {
    let sum = A[i] + carry;
    if (sum === 10) {
      carry = 1;
    } else {
      carry = 0;
    }
    let modSum = sum % 10;
    A[i] = modSum;
  }
  // if "carry" deep-equals 1 then all numbers are 9,
  // therefore we create a new array with all zeros and
  // unshift 1 onto the array
  if (carry === 1) {
    result = new Array(A.length).fill(0);
    result.unshift(1);
    A = result;
  }
  return A;
}

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
  results.push(addOne(arrays[i]));
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

