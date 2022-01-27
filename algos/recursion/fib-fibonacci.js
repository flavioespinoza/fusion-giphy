// Javascript program to find
// the Nth memo of
// Fibonacci series

// Fibonacci Series using
// memoized Recursion
function fib(n) {
  
  // memo array  
  let memo = new Array(1000);
  memo.fill(null);

  // base case
  if (n <= 1) return n;

  // if fib(n) has already
  // been computed we do not
  // do further recursive
  // calls and hence reduce
  // the number of repeated
  // work
  if (memo[n] !== null) {
    return memo[n];
  } else {
    // store the computed value
    // of fib(n) in the array at memo[n],
    // so that it does not have to be computed again
    
    // set current: recurse(n - 1) + recurse(n - 2)
    const current = fib(n - 1) + fib(n - 2);
    
    // memoize: memo[] at index n = current
    memo[n] = current;
    
    // return current value
    return current;
  }
}

let n;

n = 6
console.log(fib(n)); // 8

n = 20; 
console.log(fib(n)); // 6765
