function firstMissingPositive(nums) {
  // set vars
  const array = [0];

  // build array ignoring negative numbers
  for (const n of nums) {
    if (n < 0) continue;
    array[n] = n;
  }

  // loop with i = 1 to skip over first item
  for (let i = 1; i < array.length; i++) {
    if (!array[i]) {
      // if array at index i is empty;
      return i;
    }
  }

  // if no empty slots return last element + 1
  return array.pop() + 1;
}

let input;

input = [6, 1, 2, 3, 4, 5, 8];
console.log(firstMissingPositive(input)); // 7

input = [6, 1, 2, 4, 5, 8];
console.log(firstMissingPositive(input)); // 3

input = [3, 4, -1, -8, -9, 1];
console.log(firstMissingPositive(input)); // 2

input = [-5, -4, -3];
console.log(firstMissingPositive(input)); // 1

input = [-5];
console.log(firstMissingPositive(input)); // 1

input = [0];
console.log(firstMissingPositive(input)); // 1

input = [];
console.log(firstMissingPositive(input)); // 1
