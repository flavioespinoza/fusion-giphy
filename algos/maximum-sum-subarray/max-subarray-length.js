/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxSubArrayLen = function(nums, k) {
  let sum = 0;
  let max = 0;
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    if (sum === k) {
      max = i + 1;
    } else if (sum - k in map) {
      max = Math.max(max, i - map[sum - k]);
    }
    if (!(sum in map)) {
      map[sum] = i;
    }
  }
  return max;
};