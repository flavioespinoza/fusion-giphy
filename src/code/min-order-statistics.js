// Given an non-sorted array of unique positive integers
// find the min value at index of k - 1

let input;
let k;

// ===== LINEAR ========================================================================
// time O(n) | space O(n)
// linear since it's two non-nested for-loops in succession
function kSmallest(array, k) {
  const sorted = [];
  // ordered Map of frequencies
  const map = {};
  // loop 1
  for (let i = 0; i < array.length; i++) {
    if (!map[array[i]]) {
      map[array[i]] = 1;
    } else {
      map[array[i]]++;
    }
  }
  // keep track of value frequencies
  let frequencies = 0;
  // loop 2
  for (const [key, val] of Object.entries(map)) {;
    // @note : the sorted array is not necessary for this solution
    // @note : the sorted array helps demonstrate how this solution works
    // @note : the sorted array shows how it could be used in a linear sort if the k-th value was not required
    // @note : see ./src/code/sort-array-linear.js
    sorted.push(key);
    frequencies = frequencies + val;
    // when the value of frequencies is greater-than-or-equal-to 
    // the value of k return the key
    if (frequencies >= k) {
      const last = sorted[sorted.length - 1];
      if (key === last) {
        // @note : the iteration stops when the k-th value has been pushed onto the sorted array
        console.log(sorted); // [ '0', '4', '7' ] [ '3', '5', '7', '10' ] [ '1', '5' ] [ '0', '6' ]
        // @note : note how the last element of sorted equals the key of the map
        console.log(key);   // 7, 10, 5, 6
        console.log(last);  // 7, 10, 5, 6
      }
      return key;
    }
  }
}

input = [7, 10, 4, 0, 20, 15];
k = 3;
console.log(kSmallest(input, k)); // 7

input = [7, 10, 5, 3, 20, 15];
k = 4;
console.log(kSmallest(input, k)); // 10

input = [12, 1, 5, 7, 19];
k = 2;
console.log(kSmallest(input, k)); // 5

input = [7, 0, 25, 6, 16, 17, 0];
k = 3;
console.log(kSmallest(input, k)); // 6


function kSortLinear(array, k) {
  // response array
  let sorted = [];
  // ordered Map of frequencies
  const map = {};
  // loop 1
  for (let i = 0; i < array.length; i++) {
    if (!map[array[i]]) {
      map[array[i]] = 1;
    } else {
      map[array[i]]++;
    }
  }
  // loop 2
  for (const [key, val] of Object.entries(map)) {
    if (val > 1) {
      sorted = [...sorted, ...new Array(val).fill(key)]
    } else {
      sorted.push(key);
    }
  }
  return sorted[k - 1];
}

input = [7, 10, 4, 0, 20, 15];
k = 3;
console.log(kSortLinear(input, k)); // 7

input = [7, 10, 5, 3, 20, 15];
k = 4;
console.log(kSortLinear(input, k)); // 10

input = [12, 1, 5, 7, 19];
k = 2;
console.log(kSortLinear(input, k)); // 5

input = [7, 0, 25, 6, 16, 17, 0];
k = 3;
console.log(kSortLinear(input, k)); // 6


// ==== SORT n*log(n) ========================================================================
// array.length <= 10 --> time O(n^2) | space O(1)
// array.length > 10  --> time O(n*log(n)) | space O(log(n))
function NthSmallest(array, k) {
  array.sort((a, b) => a - b);
  return array[k - 1];
}

// input = [7, 10, 4, 3, 20, 15];
// k = 3;
// console.log(NthSmallest(input, k)); // 7

// input = [7, 10, 4, 3, 20, 15];
// k = 4;
// console.log(NthSmallest(input, k)); // 10

// input = [12, 3, 5, 7, 19];
// k = 2;
// console.log(NthSmallest(input, k)); // 5

// input = [7, 0, 25, 6, 16, 17, 0];
// k = 3;
// console.log(NthSmallest(input, k)); // 6
