const log = require('ololog').configure({ locate: false });
const _ = require('lodash');

function create_triangle(num_rows) {
  let triangle = [];

  for (let i = 0; i < num_rows; i++) {
    triangle[i] = new Array(i + 1);

    let length = triangle[i].length;

    for (let idx = 0; idx < length; idx++) {
      let row = length - 1;

      if (idx === 0 || idx === row) {
        triangle[row][idx] = 1;
      } else {
        let row_above = row - 1;
        let idx_prev = idx - 1;

        triangle[row][idx] =
          triangle[row_above][idx_prev] + triangle[row_above][idx];
      }
    }
  }

  return triangle;
}

function pascal_row(n) {
  // n is the index starting with 0 from the top
  // if n equals 0 the response would be [1]
  // n = 0 ==> [1]
  // n = 1 ==> [1, 1]
  // n = 2 ==> [1, 2, 1]
  let row = [1];

  for (let i = 0; i < n; i++) {
    let r = row[i];

    let n2 = n - i;

    let i2 = i + 1;

    row.push((r * n2) / i2);
  }

  return row;
}

console.log(pascal_row(8)); // [1, 8, 28, 56, 70, 56, 28, 8, 1],

let pyramid_of_binomials = create_triangle(10);
console.log(pyramid_of_binomials);

// function binomial(n, k) {
//   return binomials[n][k];
// }

// let calc = binomial(5, 2);
// console.log('calc', calc);

let res = [
  [1],
  [1, 1],
  [1, 2, 1],
  [1, 3, 3, 1],
  [1, 4, 6, 4, 1],
  [1, 5, 10, 10, 5, 1],
  [1, 6, 15, 20, 15, 6, 1],
  [1, 7, 21, 35, 35, 21, 7, 1],
  [1, 8, 28, 56, 70, 56, 28, 8, 1],
  [1, 9, 36, 84, 126, 126, 84, 36, 9, 1],
];
