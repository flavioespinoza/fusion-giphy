
const points = new Map();
// points.has(3)
// points.set(3, new Set(5))
// points.set(1, {2, 5, ...});
const seen = new Set();

// calculation that iterates over existing points in the map
const coords = {};

function pointsSet(x, y) {
  console.log(x);
  console.log(y);
  const set = new Set();
  set.add(y);
  console.log(set);
  points.set(x, set);
}

function pointsUpdate(x, y) {
  let tempSet = points.get(x);
  tempSet.add(y);
  points.set(x, tempSet)
}

function add(x, y, dist) {
  let data = {x, y, dist};
  let string = JSON.stringify(data);
  if(!seen.has(string)) {
    seen.add(string);
  }
}

function updateCoords(obj) {
  console.log(obj)
  let x = obj.x;
  coords[x] = new Set([...obj.arr]);
  return coords;
}

function isSquare(coords) {
  const keys = Object.keys(coords);
  let x1 = keys[0];
  let x2 = keys[1];
  let square = Math.abs(x1 - x2); // width & height

  return false
}

console.log(coords);
/**
 * @example
 * (1,2), (1,5), (4,5), (4,2)
 * */



// let obj;
// obj = add(1, 2);
// console.log(updateCoords(obj)); 
// console.log(isSquare(coords)); // false

// obj = add(1, 5);
// console.log(updateCoords(obj));
// console.log(isSquare(coords)); // false

// obj = add(4, 5);
// console.log(updateCoords(obj));
// console.log(isSquare(coords)); // false

// obj = add(4, 2);
// console.log(updateCoords(obj));
// console.log(isSquare(coords)); // true

console.log(add(1, 2, 3));
console.log(add(1, 5, 3));
console.log(add(4, 5, 3));
console.log(add(4, 2, 3));
console.log(seen)

const res = [];

seen.forEach((string) => {
  let obj = JSON.parse(string);
  res.push(obj);
})

console.log(res)