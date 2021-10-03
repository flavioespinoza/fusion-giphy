"use strict";

function spiralTraverse(array) {
  var res = [];
  var start_row = 0;
  var end_row = array.length - 1;
  var start_col = 0;
  var end_col = array[0].length - 1;

  while (start_row <= end_row && start_col <= end_col) {
    // start col end col
    for (var i = start_col; i <= end_col; i++) {
      res.push(array[start_row][i]);
    }

    for (var _i = start_row + 1; _i <= end_row; _i++) {
      res.push(array[_i][end_col]);
    } // single row
    // [1][2][3][4]


    for (var _i2 = end_col - 1; _i2 >= start_col; _i2--) {
      if (start_row === end_row) break;
      res.push(array[end_row][_i2]);
    } // single col
    // [1]
    // [2]
    // [3]
    // [4]


    for (var _i3 = end_row - 1; _i3 > start_row; _i3--) {
      if (start_col === end_col) break;
      res.push(array[_i3][start_col]);
    }

    start_row++;
    start_col++;
    end_row--;
    end_col--;
  }

  return res;
} // Do not edit the line below.


exports.spiralTraverse = spiralTraverse;