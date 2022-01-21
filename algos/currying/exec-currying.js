function increment(n) {
  return n + 1;
}

const increment2 = (n) => n + 1;

console.log(increment(3)); // 4
console.log(increment2(3)); // 4

function add(a) {
  return function (b) {
    return a + b;
  }
}

const add2 = (a) => (b) => a + b;

console.log(add(2)(4)); // 6
console.log(add2(2)(4)); // 6

function divide(numerator) {
  return function (denominator) {
    return numerator / denominator;
  }
}

const divide2 = (numerator) => (denominator) => numerator / denominator;

console.log(divide(8)(4)); // 2
console.log(divide2(8)(4)); // 2

function exec(...args) {
  return function(n) {
    let current = n;
    for (const fn of args) {
      current = fn(current);
    }
    return current;
  }
}

const exec2 = (...args) => (n) => args.reduce((acc, fn) => fn(acc), n);

console.log(exec(divide(8), add(3), increment)(4)); // 6
console.log(exec2(divide(8), add(3), increment)(4)); // 6
