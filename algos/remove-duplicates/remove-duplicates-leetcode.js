/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  const memo = {};
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (!memo[nums[i]]) {
      memo[nums[i]] = true;
      result.push(nums[i]);
    } 
  }
  return result.length;
};

// const removeDuplicates = function(nums) {
//   let i = 0;
//   for (let j = 0; j < nums.length; j++) {
//       if (nums[j] != nums[i]) 
//           nums[++i] = nums[j];
//   }
//   return ++i;
// };

let input = [1, 2, 2];
// input = [0,0,1,1,1,2,2,3,3,4]

console.log(removeDuplicates(input));