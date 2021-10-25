/**
 * @name Sorted_Arrays_Two_Pointers
 * @example
 *
 * targetSum = 8
 * indices =  0  1  2  3
 * array =   [1, 2, 3, 9] false
 * array =   [1, 2, 4, 4] true
 * returns true or false // bool
 *
 * low = 0
 * high = array.length - 1;
 *
 * while (low < high) {
 *
 *  sum = 1 + 9 = 10
 *  if (sum === targetSum) return true
 *
 *  else if (sum > targetSum) high--;
 *
 *  else if (sum < targetSum) low++;
 *
 * }
 *
 * return false
 * */

function twoSum_2(array, targetSum) {
  let low = 0;
  let high = array.length - 1;
  while (low < high) {
    let sum = array[low] + array[high];
    if (sum === targetSum) return true;
    if (sum > targetSum) {
      high--;
    }
    if (sum < targetSum) {
      low++;
    }
  }
  return false;
}

console.log(twoSum_2([1, 2, 3, 9], 8)); // false
console.log(twoSum_2([1, 2, 4, 4], 8)); // true
console.log(twoSum_2([-1, 2, 4, 9], 8)); // true
console.log(twoSum_2([], 8)); // false
console.log(twoSum_2([1], 8)); // false
console.log(twoSum_2([8], 8)); // false
console.log(twoSum_2([1, 7], 8)); // true

/**
 * @name Non_Sorted_Arrays
 * @example
 *
 * targetSum = 8
 * indices =  0  1  2  3
 * array =   [9, 2, 3, 1] false
 *
 * array =   [4, 2, 1, 4] true
 * returns true or false // bool
 *
 * while(array.length > 0) {
 *  int = array.shift() = 4
 *  compliment = targetSum - int = 4
 *  array = [2, 1, 4]
 *  if (array.indexOf(compliment) !== -1) return true;
 *
 * }
 *
 * return false;
 * */
function twoSum_3(array, targetSum) {
  while (array.length > 0) {
    const int = array.shift();
    const compliment = targetSum - int;
    if (array.indexOf(compliment) !== -1) return true;
  }
  return false;
}

console.log(twoSum_3([9, 2, 3, 1], 8)); // false
console.log(twoSum_3([9, 2, 3, -1], 8)); // true
console.log(twoSum_3([4, 2, 1, 4], 8)); // true
console.log(twoSum_3([2, 1, 4, 4], 8)); // true
console.log(twoSum_3([2, 4, 3, 4], 8)); // true
console.log(twoSum_3([1, 4, 3, 4], 8)); // true

/**
 * @name Return_Indices
 * @url https://leetcode.com/problems/two-sum/submissions/
 * */
function twoSum(nums, target) {
  const indices = [...nums];
  while (nums.length > 0) {
    const int = nums.shift();
    const compliment = target - int;
    if (nums.indexOf(compliment) !== -1) {
      const first = indices.indexOf(int);
      const second = indices.indexOf(compliment, first + 1);
      return [first, second];
    }
  }
  return [];
}
console.log(twoSum([9, 2, 3, 1], 8)); // []
console.log(twoSum([9, 2, 3, -1], 8)); // [0, 3]
console.log(twoSum([4, 2, 1, 4], 8)); // [0, 3]
console.log(twoSum([2, 1, 4, 4], 8)); // [2, 3]
console.log(twoSum([2, 4, 3, 4], 8)); // [1, 3]
