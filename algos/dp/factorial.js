function factorial(n) {
  const array = [];
  for (let i = 1; i < n; i++) {
    array.push(i + 1);
  }
  return array.reduce((pv, cv) => pv * cv, 1);
}
console.log(factorial(5)); // 120


function factorialRecursive(x) {
  if (x === 0) {
    return 1;
  } else {
    return x * factorialRecursive(x - 1);
  }
}
console.log(factorialRecursive(5)); // 120

