/**
 * @example
 *
 * add(x, y) return True if you can make a square with this point (x,y) and 3 of the previously added points
 *
 * Example input: (1,2), (3,5), (1,5), (4,2), (4,5)
 * Solutions:
 *   add(1,2) returns false
 *   add(3,5) returns false
 *   add(1,5) returns false
 *   add(4,2) returns false
 *   add(4,5) returns true - there is a square (1,2), (1,5), (4,5), (4,2) because width=4-1=3 height=5-2=3
 */

/**
 * @example
 * (1, 2), (1,5), (4,2), (4,5)
 * */

const _x = {};
const set = new Set();

function add(x, y) {
  // handle x data
  if (!(x in _x)) {
    _x[x] = new Set();
    _x[x].add(y);
    return false;
  }
  _x[x].add(y);
  _ySameX = [..._x[x]];

  for (const y2 of _ySameX) {
    // 4
    let square = Math.abs(y - y2); // 3
    console.log(square);

    let x2 = x + square;

    if (x in _x && x2 in _x) {
      console.log([x, x2]);
      console.log([y, y2]);
      console.log(_x[x2]);
      if (_x[x].has(y) && _x[x2].has(y2)) {
        console.log(x, y)
        return true;
      }
    }
  }
  return false
}

/**
 * @example
 * (1,2), (1,5), (4,5), (4,2)
 *
 * Map { 1 => Set { 2, 5 }, 4 => Set { 5, 2 } }
 * */
console.log(add(1, 2));
console.log(add(1, 5));
console.log(add(4, 5));
console.log(add(4, 2));

console.log(_x);
console.log(set);
