/**
 * @param {number[]} height
 * @return {number}
 */
function trappingRain(height) {
  let result = 0;
  let current;
  
  let start = 0;
  let end = height.length - 1;
  
  while (start < end) {
    if (height[start] <= height[end]) {
      current = height[start];
      while (height[++start] < current) {
        result += current - height[start];
      }
    } else {
      current = height[end];
      while (height[--end] < current) {
        result += current - height[end];
      }
    }
  }
  return result;
}

let a = 0;
let b = 0;

console.log(++a)
console.log(b++)