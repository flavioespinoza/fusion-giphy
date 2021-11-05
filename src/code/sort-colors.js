function sortColors(colors) {
  const counter = new Array(colors.length).fill(0);
  for (const n of colors) {
    counter[n]++;
  }
  let j = 0;
  for (let i = 0; i < colors.length; i++) {
    // here is important to check if the counter[j] is specifically 0, otherwise it enter in infinity loop.
    while (counter[j] === 0) {
      j++;
    }
    counter[j]--;
    colors[i] = j;
  }
  return colors;
}

let colors_1 = [2, 0, 2, 1, 1, 0];
let result_1 = sortColors(colors_1);
console.log(result_1); // [0, 0, 1, 1, 2, 2]

let colors_2 = [7, 2, 0, 2, 1, 1, 0];
let result_2 = sortColors(colors_2);
console.log(result_2); // [ 0, 0, 1, 1, 2, 2, 7 ]

let colors_3 = [5, 4, 3, 2, 1, 0, 0, 0];
let result_3 = sortColors(colors_3);
console.log(result_3); // [ 0, 0, 0, 1, 2, 3, 4, 5 ]
