const searchInsert = function(nums, target) {
  let found = nums.findIndex((item) => item === target);
  if (found > -1) return found;
  return getSortedIndex(nums, target);
};

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

let nums;
let target;

nums = [1, 3, 5, 6];
target = 5;
console.log(searchInsert(nums, target)); // 2

nums = [1, 3, 5, 6];
target = 7;
console.log(searchInsert(nums, target)); // 4
