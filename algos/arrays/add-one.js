// [1, 2, 4] -> [1, 2, 5]
// [1, 9, 9] -> [2, 0, 0]
// [9, 9, 9] -> [1, 0, 0, 0]

function addOne(array) {
  const result = new Array(array.length).fill(null);
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
  if (carry === 1) {
    result = new Array(array.length + 1).fill(null);
    result[0] = 1;
  }
  return result;
}
