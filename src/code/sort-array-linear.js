function sortLinear(array) {
  // response array
  let sorted = [];
  // ordered Map of frequencies
  const map = {};
  // loop 1
  for (let i = 0; i < array.length; i++) {
    if (!map[array[i]]) {
      map[array[i]] = 1;
    } else {
      map[array[i]]++;
    }
  }
  // loop 2
  for (const [key, val] of Object.entries(map)) {
    if (val > 1) {
      sorted = [...sorted, ...new Array(val).fill(key)];
    } else {
      sorted.push(key);
    }
  }
  return {
    frequencies: map,
    sorted,
  };
}

console.log(sortLinear([5, 4, 3, 2, 1, 0, 0, 0]));

// Given an n x n matrix of 1s and 0s, 

// return the length of the shortest path of 0's from the top left cell to the bottom right cell. 

// You may only move up/down/left/right. 

// If there is no possible path, return -1.

// Examples:

// Input:
// [[0,0,1],
//  [1,0,1],
//  [1,0,0]]

// 0, 0, 1
// 1, 0, 1
// 1, 0, 0

// Output: 5 
//.       x,y
// Path: [0,0] -> [0,1] -> [1,1] -> [2,1] -> [2,2]

// Input:
// [[0,0,0],
//  [0,1,0],
//  [0,0,0]]
// Output: 5 

// Input:
// [[0,0,0,1,1],
//  [1,1,0,1,1],
//  [1,1,0,1,1],
//  [1,1,0,1,1],
//  [1,1,0,1,0]]
// Output: -1

// Input:
// [[0,1,0,0,0],
//  [0,1,0,1,0],
//  [0,1,0,1,0],
//  [0,1,0,1,0],
//  [0,0,0,1,0]]
// Output: 17

// Input:
// [[0,0,0,0,0],
//  [0,1,0,1,0],
//  [0,1,0,1,0],
//  [0,1,0,1,0],
//  [0,0,0,1,0]]
// Output: 9

// Input:
// [[1,1,1,1,1],
//  [0,0,0,0,1],
//  [0,0,0,0,1],
//  [0,0,0,0,1],
//  [0,0,0,0,1]]
//  Output: 9

// == strategy ==
// x
// y
// p1 [0, 0]
// p2 [0, 1] === 0
// if true move pointers
// while (condition) 
// else 
// p2 [1, 0] === 0
// if true move pointers
// else return -1



function shortestPath(array) {
  
  if (array[0][0]) return -1;
  
  // que =[{ coord [0,0], dist: 1}]
  // directions = [[-1, -1] [-1, 0]...]
  // H = array.length
  // isValidCoor = (x, y) => valid or not

  const que = [{ coord: [0, 0], dist: 1 }];
  const directions = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];
  const H = array.length;
  const isValidCoord = (x, y) => x >= 0 && x < H && y >= 0 && y < H;

  array[0][0] = -1;

  while (que.length) {
    const {
      coord: [x, y],
      dist,
    } = que.shift();
    
    if (x === H - 1 && y === H - 1) {
      return dist;
    }

    // for of const [moveX, moveY] of direction
    for (const [moveX, moveY] of directions) {
      // nextX and nextY
      const nextX = moveX + x;
      const nextY = moveY + y;
      if (isValidCoord(nextX, nextY) && array[nextX][nextY] === 0) {
        // push({ coord: [nextX, nextY], dist++})
        que.push({ coord: [nextX, nextY], dist: dist + 1 });
        array[nextX][nextY] = 1;
      }
    }

    
  }
  return -1;
}



const input = [
  [0,1,0,0,0],
  [0,1,0,1,0],
  [0,1,0,1,0],
  [0,1,0,1,0],
  [0,0,0,1,0]
]

const expected = 17;

console.log(shortestPath(input)); // 17