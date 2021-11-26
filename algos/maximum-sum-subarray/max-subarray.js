/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(A) {
  let prev = 0;
  let max = A[0];
  for (let i = 0; i < A.length; i++) {
    prev = Math.max(prev + A[i], A[i]);
    max = Math.max(max, prev);
  }
  return max;
}