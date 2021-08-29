const nums = [2,7,11,15]
let target = 9

// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === target - nums[i]) {
                return [i, j]
            }
        }
    } 
}

console.log(twoSum(nums, target));