/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
  // set low and high pointers
  let low = 0;
  let high = nums.length - 1;
  // while low < high
  while (low < high) {
    // set mid
    let mid = low + Math.floor((high - low + 1) / 2);
    // if target < nums[mid] update high
    // else update low
    if (target < nums[mid]) high = mid - 1;
    else low = mid;
  }
  // return true/false if nums[low] = target;
  return nums[low] === target ? low : -1;
};


const searchEasy = function(nums, target) {
  return nums.findIndex((item) => item === target);
};
