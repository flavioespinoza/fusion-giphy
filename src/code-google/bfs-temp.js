// BFS strategy
function solution(grid) {
  // if first element at x=0, y=0 deep-equals 1 return -1
  // because it is not a valid coordinate
  if (grid[0][0] === 1) return -1;

  const que = [{ coord: [0, 0], dist: 1 }];
  const directions = [
    [-1, 0], // left
    [1, 0], // right
    [0, 1], // up
    [0, -1], // down
  ];
  const height = grid.length;
  const width = grid[0].length;
  const isValidCoord = (nextX, nextY) => {
    return nextX >= 0 && nextX < width && nextY >= 0 && nextY < height;
  }

  while (que.length > 0) {
    // get first item on the que
    const { coord: [x, y], dist } = que.shift();
    // check if we have reached bottom-right item
    if (x === width - 1 && y === height - 1) return dist;

    // loop through directions deconstruct vars [moveX, moveY]
    for (const [moveX, moveY] of directions) {
      // set nextX and nextY using x + moveX and y + moveY respectively
      const nextX = x + moveX;
      const nextY = y + moveY;

      // check if [nextX, nextY] is a valid coordinate (in-bounds) && if grid[nextX][nextY] deep-equals 0
      if (isValidCoord(nextX, nextY) && grid[nextX][nextY] === 0) {
        // push object { coord: [nextX, nextY], dist: dist + 1 } onto que
        que.push({ coord: [nextX, nextY], dist: dist + 1 });
        // set grid[x][y] equal to 1 (visited)
        grid[x][y] = 1;
      }  
    }
  }

  return -1;
}

let input;

input = [
  [0, 1, 0, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 1, 0],
];
console.log(solution(input)); // 17

let show = true;

if (show) {
  input = [
    [0, 1, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 1, 0, 1, 1],
    [0, 0, 0, 1, 0],
  ];
  console.log(solution(input)); // -1

  input = [
    [0, 1, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 1, 0, 1, 1],
    [0, 0, 0, 0, 0],
  ];
  console.log(solution(input)); // 9

  input = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];
  console.log(solution(input)); // 9

  input = [
    [1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];
  console.log(solution(input)); // -1

  input = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1],
  ];
  console.log(solution(input)); // -1
}
