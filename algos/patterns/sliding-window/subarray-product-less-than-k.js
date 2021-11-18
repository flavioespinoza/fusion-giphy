const numSubarrayProductLessThanK = function(nums, k) {
  if (k <= 1) return 0;
  let prod = 1;
  let count = 0;
  for (let left = 0, right = 0; right < nums.length; right++) {
    prod = prod * nums[right];
    while (prod >= k) {
      prod = prod / nums[left++];
    };
    count += right - left + 1;
  }
  return count;
}

let nums;
let k;

nums = [10, 5, 2, 6];
k = 100;
console.log(numSubarrayProductLessThanK(nums, k)); // 8 | [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
