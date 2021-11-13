function addOne(A) {
  let result = [];
  let carry = 1;
  // check if first item is a zero
  while (A[0] === 0) {
    A.shift();
  }
  for (let i = A.length - 1; i >= 0; i--) {
    let sum = A[i] + carry;
    if (sum === 10) {
      carry = 1;
    } else {
      carry = 0;
    }
    let remainder = sum % 10;
    console.log(sum);
    console.log(remainder);
    A[i] = remainder;
  }
  // if "carry" deep-equals 1 then all numbers are 9,
  // therefore we create a new array with all zeros and
  // unshift 1 onto the array
  if (carry === 1) {
    result = new Array(A.length).fill(0);
    result.unshift(1);
    A = result;
  }
  return A;
}