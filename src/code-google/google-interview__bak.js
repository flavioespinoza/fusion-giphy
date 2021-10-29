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

const map = new Map();
const _x = new Map();
const _y = new Map();

var k = 1;

function eqSet(as, bs) {
  if (as.size !== bs.size) return false;
  for (var a of as) if (!bs.has(a)) return false;
  return true;
}

var k = 1;

function add(x, y) {
  // check if key of x exist in map
  // if false init map[x] = new Set()
  console.log(y);

  if (!map.has(x)) {
    map.set(x, new Set());
  }
  console.log(x);
  let ySet = map.get(x);
  console.log(ySet);
  ySet.add(y);
  console.log(ySet);
  map.set(x, ySet);

  console.log(k);
  if (k === 4) {
    const y_with_same_x = [...map.get(x)];
    console.log(y_with_same_x);
    let xArr = [];

    for (const y2 of y_with_same_x) {
      let yHeight = Math.abs(y - y2);
      let x2 = Math.abs(yHeight - x);

      console.log(yHeight);
      console.log(x);
      console.log(x2);
      console.log(map.get(x));
      console.log(map.get(x2));
    }
  }
  k++;
  // return false;
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

console.log(map);
