//   add(4,5) returns true - there is a square (1,2), (1,5), (4,5), (4,2) beca

// add(x, y) return True if you can make a square with this point (x,y) and 3 of the previously added points

// Example input: (1,2), (3,5), (1,5), (4,2), (4,5)
// Solutions:
//   add(1,2) returns false
//   add(3,5) returns false
//   add(1,5) returns false
//   add(4,2) returns false
//     // add(7,100)
//   add(4,5) returns true - there is a square (1,2), (1,5), (4,5), (4,2) because width=4-1=3 height=5-2=3

const points = new Map();
// points.has(3)
// points.set(3, new Set(5))
// points.set(1, {2, 5, ...});

// calculation that iterates over existing points in the map
const seen = new Set();

function add(x, y) {
  console.log(x);
  console.log(y);

  let y_with_same_x;
  // x=4, y=5
  if (!points.get(x)) {
    console.log(x);
    console.log(y);
    const set = new Set();
    set.add(y);
    console.log(set);
    points.set(x, set);
    return false;
  } else {
    let tempSet = points.get(x);
    console.log(tempSet);
    tempSet.add(y);
    points.set(x, tempSet);

    console.log(x);
    console.log(points.get(x));
    y_with_same_x = [...[...points.get(x)]];
    console.log(y_with_same_x)

  }

  console.log(y_with_same_x)

  for (const y2 of y_with_same_x) {
    if (seen.has(`${[x, y]}`)) {
      return;
    }
    console.log(y2)
    let height = Math.abs(y - y2); // 3
    console.log(height);
    let x2 = Math.abs(height + x);
    console.log(x2); // 0, 1, 2
    let x3 = y; // 7
    console.log(x3);

    if (points.get(x)) {
      console.log(y)
    }
    let _yx2 = points.get(x)
    
    if (!points.get(x3)) {
      let temp = new Set()
      temp.add(y2)
      points.set(x3, )
    }

    let _yx3 = points.get(x3)
    console.log(_yx2)
    console.log(_yx3)
    if ((_yx2 && _yx3) && (_yx2.has(y) && _yx3.has(y2))) {
      console.log(_yx2)
      console.log(_yx3)
      console.log(y)
      console.log(y2)
      return true
    }
    seen.add(`${[x, y]}`)
  }
  return false;
}

/**
 * @example
 * (1,2), (1,5), (4,5), (4,2)
 * */
console.log(add(1, 2)); // returns false
console.log(add(1, 3)); // returns false
console.log(add(1, 4)); // returns false
console.log(add(1, 5)); // returns false

// console.log(add(1, 7)); // returns false
// console.log(add(1, 2)); // returns false
// console.log(add(1, 5)); // returns false
// console.log(add(4, 5)); // returns false
// console.log(add(4, 2)); // returns true
// returns true
