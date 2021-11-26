// The idea is to use inputs, a and b to build two binary literals.

// Calculating the sum is done by calling the BigInt function on our binary literals,
// adding them together and returning the sum with a call to the toString method
// with 2 as the argument, since we are working with binary numbers.
const addBinary = function(a, b) {
  const aBin = `0b${a}`;
  const bBin = `0b${b}`;
  const sum = BigInt(aBin) + BigInt(bBin);
  return sum.toString(2);
};
