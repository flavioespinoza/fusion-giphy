const arr = [1, 2, [3, 4]];
const deep = [1, 2, [3, 4, [5, 6, [7, 8]]], 9];

// To flatten a single level array
console.log(arr.flat()); // [1, 2, 3, 4]
console.log(deep.flat(3)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// is equivalent to
console.log(arr.reduce((acc, val) => acc.concat(val), [])); // [1, 2, 3, 4]

// or with decomposition syntax
const flattened = (arr) => [].concat(...arr);
console.log(flattened(arr)); // [1, 2, 3, 4]

function getArrayDepth(input) {
  let depth = 0;
  if (Array.isArray(input)) {
    depth = 1 + Math.max(...input.map(getArrayDepth));
  }
  return depth;
}

let depth = getArrayDepth(deep);
console.log(deep.flat(depth - 1)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// non recursive flatten deep using a stack
// note that depth control is hard/inefficient as we will need to tag EACH value with its own depth
function flatten(input) {
  // create stack from extended input items - won't modify the original input
  const stack = [...input];
  const res = [];
  while (stack.length) {
    // pop value from stack
    const last = stack.pop();
    if (Array.isArray(last)) {
      // push/extend array items back onto stack
      stack.push(...last);
    } else {
      // place item at beginning of res array
      res.unshift(last);
    }
  }
  return res;
}

console.log(flatten(deep)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
