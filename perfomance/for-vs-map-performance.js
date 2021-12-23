const arr = [...Array(5000000).keys()];
//console.log(arr);

// for
console.time('for');
let output = '';
for (let i = 0; i < arr.length; i++) {
  output = output + arr[i];
}
console.timeEnd('for');

// for of
console.time('for_of');
const for_of_res = [];
let output1 = '';
for (let value of arr) {
  output1 = output1 + value;
  for_of_res.push(output1)
}
console.timeEnd('for_of');

// array.forEach
console.time('array.forEach');
let output2 = '';
arr.forEach((value) => {
  output2 = output2 + value;
});
console.timeEnd('array.forEach');

// array.map
console.time('array.map');
let output3 = '';
let outputMap = arr.map((value) => {
  output3 = output3 + value;
  return output3
});
console.timeEnd('array.map');


// array.length = 5,000,000

// for: 913.949ms 

// for_of: 828.041ms 

// array.forEach: 858.923ms 

// array.map: 1.300s 

// WINNER is for_of which was  30-37% faster than map
