function increment(n) {
  return n + 1;
}

console.log(increment(3)); // 4

function add(a) {
  return function (b) {
    return a + b;
  }
}

console.log(add(2)(4)); // 6

function divide(numerator) {
  return function (denominator) {
    return numerator / denominator;
  }
}

console.log(divide(8)(4)); // 2


function exec(initialValue, ...args) {
  const res = args.reduce()
}