// Javascript program using recursive
// solution to count number of
// ways to reach matrix[rows-1][cols-1] from
// starting at matrix[0][0] 

// the number of ways a cell can be reached is = 
// Number of ways it can reach the cell above
// + (added to)
// Number of ways it can reach the cell to the left

// So, start filling the 2D array according to it and return the last cell after completely filling the array.

// Below is the implementation of the above approach:

// Returns The number of way
// from top-left to mat[m-1][n-1]
function countPaths(rows, cols) {
  // if rows or cols deep-equal 1 return 1
  if (rows === 1 || cols === 1) return 1;
  // recursively find the number of ways to reach the last call
  return countPaths(rows - 1, cols) + countPaths(rows, cols - 1);
}

let rows = 5;
let cols = 5;
console.log(countPaths(rows, cols)); // 70

rows = 4;
cols = 4;
console.log(countPaths(rows, cols)); // 20

rows = 3;
cols = 3;
console.log(countPaths(rows, cols)); // 6

rows = 2;
cols = 2;
console.log(countPaths(rows, cols)); // 2

rows = 1;
cols = 1;
console.log(countPaths(rows, cols)); // 1