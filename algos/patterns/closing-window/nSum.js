/**
 * @param {number[]} array
 * @param {number} target
 * @param {number} n
 * @return {number[][]}
 */
function nSum(nums, target = 0, n = 3) {
  const result = [];

  nums.sort((a, b) => a - b);

  // if n = 3 | 3Sum
  // if n = 4 | 4Sum
  // if n = 5 | 5Sum
  const recurse = (arr, tar, res, n) => {
    if (n === 2) {
      twoSum(arr, tar, res);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      while (arr[i] === arr[i - 1]) i++;
      recurse(arr.slice(i + 1), tar - arr[i], [...res, arr[i]], n - 1);
    }
  };

  const twoSum = (arr, tar, res) => {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      const sum = arr[left] + arr[right];
      if (sum === tar) {
        result.push([...res, arr[left], arr[right]]);
        while (arr[left] === arr[left + 1]) left++;
        while (arr[right] === arr[right - 1]) right--;
        left++;
        right--;
      } else if (sum < tar) left++;
      else right--;
    }
  };

  recurse(nums, target, [], n);

  return result;
}

let nums;
let target;
let n;

// ===== 3 sum ==============================================
nums = [-1, 0, 1, 2, -1, -4];
target = 0;
n = 3;
const threeSum = nSum(nums, target, n);
console.log(threeSum); // [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]

// ===== 4 sum ==============================================
nums = [2,2,2,2,2];
target = 8;
n = 4;
const fourSum = nSum(nums, target, n);
console.log(fourSum); // [ [ 2, 2, 2, 2 ] ]
