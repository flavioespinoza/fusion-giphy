// that, given an array A consisting of N integers and an integer K, returns the array A rotated K times.

// For example, given

//     A = [3, 8, 9, 7, 6]
//     K = 3
// the function should return [9, 7, 6, 3, 8]. Three rotations were made:

//     [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
//     [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
//     [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]
// For another example, given

//     A = [0, 0, 0]
//     K = 1
// the function should return [0, 0, 0]

// Given

//     A = [1, 2, 3, 4]
//     K = 4
// the function should return [1, 2, 3, 4]

// https://app.codility.com/demo/results/trainingC4D4RY-BT5/

function cyclicRotation(array, k) {
  if (k === 0 || array.length === k || array.length === 1) {
    return array;
  }
  const res = [];
  for (let i = 0; i < array.length; i++) {
    const modIdx = (k + i) % array.length;
    res[modIdx] = array[i];
  }
  return res;
}

let test;
test = cyclicRotation([3, 8, 9, 7, 6], 3);
console.log(test); // [9, 7, 6, 3, 8]

test = cyclicRotation([0, 0, 0], 1);
console.log(test); // [0, 0, 0]

test = cyclicRotation([1, 2, 3, 4], 4);
console.log(test); // [1, 2, 3, 4]

/**
 * @name CYCLIC_ROTATION_LEFT
 * @url https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
 * */
function rotLeft(array, k) {
  const res = [];
  array.reverse();
  for (let i = 0; i < array.length; i++) {
    const modIdx = (k + i) % array.length;
    res[modIdx] = array[i];
  }
  return res.reverse();
}
