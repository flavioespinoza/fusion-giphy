function reverseNumber(n) {
  // change input to its reverse numerically
  // 1234 -> 4321
  // 4563 -> 3654
  // -123 -> -321
  // 123.45 -> 321
  // "123" -> error
  if (typeof n !== 'number') throw new Error('Error: First argument must be a number');
  let result = 0;
  let isNegative = Math.sign(n) === -1 ? true : false;
  let current = Math.floor(Math.abs(n));
  let length = Math.floor(Math.log10(current)) + 1;

  for (let i = 0; i < length; i++) {
    let remainder = current % 10;
    let power = Math.floor(Math.log10(current));
    result = result + remainder * Math.pow(10, power);
    current = Math.floor(current / 10);
  }

  return isNegative ? -result : result;
}

// integer
console.log(reverseNumber(-123)); // -321
console.log(reverseNumber(0)); // 0
console.log(reverseNumber(1)); // 1
console.log(reverseNumber(11)); // 11
console.log(reverseNumber(12)); // 21
console.log(reverseNumber(453)); // 354
console.log(reverseNumber(1234)); // 4321
console.log(reverseNumber(4563)); // 3654
console.log(reverseNumber(123456789)); // 987654321

// float
console.log(reverseNumber(-123.45)); // -321
console.log(reverseNumber(123.45)); // 321

// string
console.log(reverseNumber('123')); // Error: First argument must be a number.
