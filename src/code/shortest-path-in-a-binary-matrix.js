/**
 * @name shortest-distance-in-binary-matrix
 * @solution BFS (Breadth First Search); shortest path reminds me of word-ladder, but way less complicated.
 * @constraint can only move [up, down, left, right]
 * @url https://leetcode.com/problems/shortest-path-in-binary-matrix/discuss/313252/javascript-solution-bfs
 * @example 
 * This is actually the question of finding shortest path between source and destination in a 2D-array.
 * We can only move in 4 directions [up, down, left, right]
 * 
 * We need keep tracking cells that have been visited. 
 * Usually we can create a same size 2D-array to mark visited cell, 
 * for this question, however, it did not mention that we can not modify the original 
 * 2D-array, so we can just flip 0 to 1 to mark it as visited
 * 
 * */
function shortestPath(array) {
  // if there is a value at the array at coords x=0, y=0 return -1;
  if (array[0][0]) {
    console.log(array[0, 0]);
    return -1;
  }
  
  // init que[{coord: [0, 0], dist: 1}]
  const que = [{ coord: [0, 0], dist: 1 }];

  // @note : all directions if there was no constraint [ left, right, up, down, left-up, up-right, down-right, down-left ]
  // const directions = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
  // @note : only 4 directions because of cardinal constraints
  const directions = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];
  // height and width of matrix
  const H = array.length;

  // check if coord is valid
  const isValidCoord = (x, y) => x >= 0 && x < H && y >= 0 && y < H;

  // start coord is always zero so we know it will be visited
  // flip 0 to 1 to keep track of visited
  array[0][0] = -1;

  // while que has object(s)
  while (que.length) {
    // destructure first object on the que to get vars x, y, and dist
    const {
      coord: [x, y],
      dist,
    } = que.shift();
    // if reached bottom-right return dist
    if (x === H - 1 && y === H - 1) {
      return dist;
    }
    // for (const [moveX, moveY] of direction)
    for (const [moveX, moveY] of directions) {
      // nextX and nextY
      const nextX = moveX + x;
      const nextY = moveY + y;
      // check coord is valid and value at coord is 0;  
      if (isValidCoord(nextX, nextY) && array[nextX][nextY] === 0) {
        // push({ coord: [nextX, nextY], dist++})
        que.push({ coord: [nextX, nextY], dist: dist + 1 });
        // flip 0 to 1 to keep track of visited
        array[nextX][nextY] = 1;
      }
    }
  }
  return -1;
}

let input;
let expected;

input = [
  [0,1,0,0,0],
  [0,1,0,1,0],
  [0,1,0,1,0],
  [0,1,0,1,0],
  [0,0,0,1,0]
]
expected = 17;
console.log(shortestPath(input)); // 17