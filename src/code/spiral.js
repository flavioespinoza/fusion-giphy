function spiralTraverse(array) {
  const res = [];

  let start_row = 0;
  let end_row = array.length - 1;

  let start_col = 0;
  let end_col = array[0].length - 1;

  while (start_row <= end_row && start_col <= end_col) {
    // start col end col
    for (let i = start_col; i <= end_col; i++) {
      res.push(array[start_row][i]);
    }

    for (let i = start_row + 1; i <= end_row; i++) {
      res.push(array[i][end_col]);
    }

    // single row
    // [1][2][3][4]
    for (let i = end_col - 1; i >= start_col; i--) {
      if (start_row === end_row) break;
      res.push(array[end_row][i]);
    }

    // single col
    // [1]
    // [2]
    // [3]
    // [4]
    for (let i = end_row - 1; i > start_row; i--) {
      if (start_col === end_col) break;
      res.push(array[i][start_col]);
    }

    start_row++;
    start_col++;

    end_row--;
    end_col--;
  }

  return res;
}

// Do not edit the line below.
exports.spiralTraverse = spiralTraverse;
