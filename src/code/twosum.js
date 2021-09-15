function twoSum(array, targetSum) {
  const map = {};
  const set = new Set([...array]);
  for (let i = 0; i < array.length; i++) {
    let x = targetSum - array[i];
    map[x] = array[i];
  }
  for (const key in map) {
    if (set.has(Number(key)) && Number(key) !== map[key]) {
      return [Number(key), map[key]];
    }
  }
  return [];
}

console.log(twoSum([3, 5, -4, 8, 11, 1, -1, 6], 10));  // => [11, -1]
console.log(twoSum([-7, -5, -3, -1, 0, 1, 5, 5], -5)); // => [0, 5]
console.log(twoSum([3, 5, -4, 8, 11, 1, -1, 6], 15));  // => []
