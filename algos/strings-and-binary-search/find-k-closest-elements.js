/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
// Binary Search
// Time O(log N) | Space O(1)
const findClosestElements = function(arr, k, x) {
  let lo = 0;
  let hi = arr.length - 1;
  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (x - arr[mid] > arr[mid + k] - x) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return arr.slice(lo, lo + k);
};