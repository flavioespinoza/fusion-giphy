// time O(n) | space O(n) === linear time and complexity
function bfs_iterative_shortestPathInBinaryMatrix(grid) {
  // BFS strategy to find optimal path
  const que = [{ coord: [0, 0], dist: 1 }];

  // cardinal constraint: we can only move [ left, right, up, down ]
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  // define height and width of binary matrix for the following:
  // check if next coordinates are valid
  // exit once we have reached the bottom-right node
  const height = grid.length;
  const width = height;

  // helper function to check next [ x, y ]
  const isValidCoord = (x, y) => x >= 0 && x < height && y >= 0 && y < width;

  // start node is always zero so we know it will be visited
  // therefore we can flip 0 to 1 for the first node
  grid[0][0] = 1;

  while (que.length > 0) {
    // destructure vars x, y and dist
    const {
      coord: [x, y],
      dist,
    } = que.shift();

    // check if we have reached bottom-right node
    if (x === width - 1 && y === height - 1) {
      return dist;
    }

    // iterate through directions coordinates [right, left, top, bottom]
    for (const [moveX, moveY] of directions) {
      // define next x and y coordinates
      const nextX = moveX + x;
      const nextY = moveY + y;
      // check if coordinate is in-bounds (e.g. isValid)
      if (isValidCoord(nextX, nextY) && grid[nextX][nextY] === 0) {
        // push next coords and increment dist
        que.push({ coord: [nextX, nextY], dist: dist + 1 });
        // flip 0 to 1 to protect visited
        grid[nextX][nextY] = 1;
      }
    }
  }

  return -1;
}

let input;

input = [
  [0, 'X', 0, 0, 0],
  [0, 'X', 0, 'X', 0],
  [0, 'X', 0, 'X', 0],
  [0, 'X', 0, 'X', 0],
  [0, 0, 0, 'X', 0],
];
expected = 17;
console.log(bfs_iterative_shortestPathInBinaryMatrix(input)); // 17

module.exports = bfs_iterative_shortestPathInBinaryMatrix;
