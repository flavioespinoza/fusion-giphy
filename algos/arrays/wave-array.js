/**
 * @example
 * [1, 2, 3, 4]
 * i = 0
 * operator = (i) => isEven(i) ? >= : <=
 * if (i + 1) exists
 * // ----------- 0
 * is 1:[i:0] operator: >= 2:[i:0+1] ?
 * false
 * swap 2 and 1
 * [2, 1, 3, 4]
 * increment i
 * i = 1
 * // ----------- 1
 * is 1:[i:1] operator: <= 3:[i:1+1] ?
 * true
 * do nothing
 * [2, 1, 3, 4]
 * increment i
 * i = 2
 * // ----------- 2
 * is 3:[i:2] operator: >= 4:[i:2+1]
 * false
 * swap 3 and 4
 * [2, 1, 4, 3]
 * */
function getSortedIndex(array, value) {
  let low = 0;
  let high = array.length;
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (array[mid] < value) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
}

function wave(A) {
  // set vars
  let arr = [];

  // get sorted index using binary
  for (let i = 0; i < A.length; i++) {
    let idx = getSortedIndex(arr, A[i]);
    arr.splice(idx, 0, A[i]);  
  }

  // loop through even indices (e.g. increment i by 2)
  for (let i = 0; i < A.length; i += 2) {
    // If current even index element is smaller than next
    if (i < arr.length - 1 && arr[i] < arr[i + 1]) {
      // swap current for next
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  return arr;
}

console.log(wave([1, 2, 3, 4])); // [ 2, 1, 4, 3 ]
console.log(wave([5, 1, 3, 2, 4])); // [ 2, 1, 4, 3, 5 ]
console.log(wave([7, 13, 3, 4, 2, 3, 0, 0])); // [ 0, 0, 3, 2, 4, 3, 13, 7 ]

/**
 * @example
 * a0 >= a1 <= a2 >= a3 <= a4...
 *
 * // Input 1:
 * A = [1, 2, 3, 4]
 *
 * // Output 1:
 * [2, 1, 4, 3]
 *
 * // Input 2:
 * A = [1, 2]
 *
 * // Output 2:
 * [2, 1]
 * */

// 0 even : (arr[0] >= arr[1]) ? continue : swap
// 1  odd : (arr[1] <= arr[2]) ? continue : swap
// 2 even :
// 3  odd :
// 4 even :
// 5  odd :
let expected = [0, 0, 3, 2, 4, 3, 13, 7];

let large = [
  55,
  57,
  57,
  58,
  58,
  59,
  60,
  60,
  63,
  67,
  69,
  73,
  73,
  77,
  80,
  85,
  85,
  88,
  89,
  93,
  95,
  18,
  19,
  26,
  29,
  30,
  31,
  35,
  38,
  43,
  46,
  47,
  47,
  48,
  54,
  54,
  0,
  0,
  3,
  2,
  4,
  3,
  13,
  7,
  14,
  15,
  15,
  17,
];
console.log(wave(large));
// [ 0 0 3 2 4 3 13 7 15 14 17 15 19 18 29 26 31 30 38 35 46 43 47 47 54 48 55 54 57 57 58 58 60 59 63 60 69 67 73 73 80 77 85 85 89 88 95 93 ]
