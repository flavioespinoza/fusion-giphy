function matrixRotate(matrix) {
  let N = matrix.length;

  // 1. transpose (turn rows to columns)
  for (let i = 0; i < N; i++) {
    for (let j = i; j < N; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // 2. swap column values
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N / 2; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[i][N - 1 - j];
      matrix[i][N - 1 - j] = temp;
    }
  }

  // 2a. cycle columns N - 1 times
  // for (let i = 0; i < matrix.length; i++) {
  //   const temp = cyclicRotation(matrix[i], N - 1);
  //   matrix[i] = temp;
  // }

  return matrix;
}

function cyclicRotation(array, k) {
  if (k === 0 || array.length === k || array.length === 1) {
    return array;
  }
  const res = [];
  for (let i = 0; i < array.length; i++) {
    const modIdx = (k + i) % array.length;
    res[modIdx] = array[i];
  }
  return res;
}

function arraySwap(array) {
  let N = array.length;
  for (let i = 0; i < N / 2; i++) {
    const temp = array[i];
    array[i] = array[N - 1 - i];
    array[N - 1 - i] = temp;
  }
  return array;
}
console.log(arraySwap([1, 2, 3, 4, 5]));

function matrixCreate(height, width) {
  // create a results array
  const result = [];
  // outer loop index x | length = width
  for (var x = 0; x < height; x++) {
    // set result at index x to an empty array
    result[x] = [];
    // inner loop index y | length = width
    for (var y = 0; y < width; y++) {
      let value = height * x + 1 + y;
      result[x][y] = value;
    }
  }
  return result;
}

let matrix;

matrix = matrixCreate(4, 4);
// console.log(matrix);

let x = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

let rotate = matrixRotate(matrix);
console.log(matrix);