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

const _x = new Map();
const _y = new Map();

function add(x, y) {
  // handle x data
  if (!_x.has(x)) {
    _x.set(x, new Set());
  }
  let _xSet = _x.get(x)
  _xSet.add(y);
  _x.set(x, _xSet);

  // handle y data
  if (!_y.has(y)) {
    _y.set(y, new Set());
  }
  let _ySet = _y.get(y)
  _ySet.add(x);
  _y.set(y, _ySet);

  _xSame = [..._x.get(x)];

  console.log(x)
  for (const y2 of _xSame) {
    let square = Math.abs(y - y2); // 3
    console.log(square)
    let x2;
  }

}

/**
 * @example
 * (1,2), (1,5), (4,5), (4,2)
 *
 * Map { 1 => Set { 2, 5 }, 3 => Set { 5 }, 4 => Set { 5, 2 } }
 * */
console.log(add(1, 2));
console.log(add(1, 5));
console.log(add(4, 5));
console.log(add(4, 2));

console.log(_x);
console.log(_y);

