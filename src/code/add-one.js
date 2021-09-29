// [1, 2, 4] -> [1, 2, 5]
// [1, 9, 9] -> [2, 0, 0]
// [9, 9, 9] -> [1, 0, 0, 0]

function addOneLinear(array) {
  const result = [];

  let numberString = '';

  for (const digit of array) {
    numberString += digit.toString();
  }

  let increaseByOne = Number(numberString) + 1;

  let stringByOne = increaseByOne.toString();

  let split = stringByOne.split('');

  for (const string of split) {
    result.push(Number(string));
  }

  return result;
}


function addOneArrayFrom(array) {
  let numberString = Array.from(array).map(String).join('');
  let addOne = Number(numberString) + 1;
  return Array.from(addOne.toString()).map(Number);
}

console.log(addOneArrayFrom([9,9,9]));

function addOne(array) {
  let result = new Array(array.length).fill(0);
  let carry = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    let sum = array[i] + carry;
    if (sum === 10) {
      carry = 1;
    } else {
      carry = 0;
    }
    result[i] = sum % 10;
  }
  // if carry === 1 after for loop then all numbers were 9
  // therefore we need to set result to a new array with 
  // length array.length + 1 and fill it with zeros
  // then we set result at index 0 to 1
  if (carry === 1) {
    result = new Array(array.length + 1).fill(0);
    result[0] = 1;
  }
  return result;
}



const arrays = [
  [1, 2, 4],
  [1, 9, 9],
  [9, 9, 9],
  [9, 1, 9],
];

for (let i = 0; i < arrays.length; i++) {
  console.log(addOne(arrays[i]));
}
