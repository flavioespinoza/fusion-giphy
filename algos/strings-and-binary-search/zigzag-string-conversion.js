/**
 * @example
 * Look at the problem with visualizations. 
 * What we need to do here is to break down the input string in zigzag fashion and recompose row by row.
 *
 * convert('ABCDEF', 2) returns 'ACEBDF'
 *     Row 1 ->  A   C   E
 *     Row 2 ->    B   D   F
 * convert('ABCDEF', 3) returns 'AEBDFC'
 *     Row 1 ->  A       E
 *     Row 2 ->    B   D   F
 *     Row 3 ->      C
 * convert('ABCDEF', 4) returns 'ABFCED'
 *     Row 1 ->  A
 *     Row 2 ->    B       F
 *     Row 3 ->      C   E
 *     Row 4 ->        D
 * */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function(s, numRows) {
  // return original string if cannot zigzag
  if (numRows === 1 || s.length < numRows) return s;

  let rows = []
  let reverse = false;
  let count = 0

  // prepare rows
  for (let i = 0; i < numRows; i++) rows[i] = [];
  // reverse the push flow when reaching turning points
  for (let i = 0; i < s.length; i++) {
      rows[count].push(s[i]);
      reverse ? count-- : count++;
      if (count === numRows - 1 || count === 0) reverse = !reverse;
  }
  // put together converted string
  return rows.reduce((converted, cur) => converted + cur.join(''), '');
};