// time - O(n*log(n)) | space - ?
function NthSmallest(array, k) {
  array.sort((a, b) => a - b);
  return array[k - 1];
}

let input;
let k;

input = [7, 10, 4, 3, 20, 15];
k = 3;
console.log(NthSmallest(input, k)); // 7

input = [7, 10, 4, 3, 20, 15];
k = 4;
console.log(NthSmallest(input, k)); // 10

input = [12, 3, 5, 7, 19];
k = 2;
console.log(NthSmallest(input, k)); // 5

input = [7, 0, 25, 6, 16, 17, 0];
k = 3;
console.log(NthSmallest(input, k)); // 6


// Ordered Map Method
function orderedMapFrequency(array) {
  const map = {};
  for (let i = 0; i < array.length; i++) {
    if (!map[array[i]]) {
      map[array[i]] = 1;
    } else {
      map[array[i]]++;
    }
  }
  return map;
}

function kSmallest(arr, k) {
  let map = orderedMapFrequency(arr);
  let frequencies = 0;
  for (const [key, val] of Object.entries(map)) {
    frequencies = frequencies + val;
    if (frequencies >= k) {
      return key;
    }
  }
}

input = [7, 10, 4, 3, 20, 15];
k = 3;
console.log(kSmallest(input, k)); // 7

input = [7, 10, 4, 3, 20, 15];
k = 4;
console.log(kSmallest(input, k)); // 10

input = [12, 3, 5, 7, 19];
k = 2;
console.log(kSmallest(input, k)); // 5

input = [7, 0, 25, 6, 16, 17, 0];
k = 3;
console.log(kSmallest(input, k)); // 6
