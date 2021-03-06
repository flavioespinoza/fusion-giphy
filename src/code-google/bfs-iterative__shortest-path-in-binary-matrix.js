// BFS strategy
const set = new Set();

function solution(grid) {
  // if first element at x=0, y=0 deep-equals 1 return -1
  // because it is not a valid coordinate
  if (grid[0][0] === 1) return -1;
  const path = [];
  const que = [{ coord: [0, 0], dist: 1, prevDist: 0 }];
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
  };

  while (que.length > 0) {
    // get first item on the que

    const first = que.shift();

    const {
      coord: [x, y],
      dist,
      prevDist,
    } = first;
    // check if we have reached bottom-right item

    if (x === width - 1 && y === height - 1) {
      set.forEach((stringObj) => {
        path.push(JSON.parse(stringObj));
      });
      console.log(path);
      console.log(path.length);
      return dist;
    }

    // loop through directions deconstruct vars [moveX, moveY]
    for (const [moveX, moveY] of directions) {
      // set nextX and nextY using x + moveX and y + moveY respectively
      const nextX = x + moveX;
      const nextY = y + moveY;

      // check if [nextX, nextY] is a valid coordinate (in-bounds) && if grid[nextX][nextY] deep-equals 0
      if (isValidCoord(nextX, nextY) && grid[nextX][nextY] === 0) {
        // push object { coord: [nextX, nextY], dist: dist + 1 } onto que
        let next = { coord: [nextX, nextY], dist: dist + 1, prevDist: dist };
        que.push(next);
        set.add(JSON.stringify(next));
        // set grid[x][y] equal to 1 (visited)
        grid[x][y] = 1;
      }
    }
  }

  return -1;
}

let input;

input = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];
console.log(solution(input)); // 9

let x = [
  { coord: [0, 0], dist: 1, prevDist: 0 }, // 1 obj

  { coord: [1, 0], dist: 2, prevDist: 1 }, // 2
  { coord: [0, 1], dist: 2, prevDist: 1 },

  { coord: [2, 0], dist: 3, prevDist: 2 }, // 3
  { coord: [1, 1], dist: 3, prevDist: 2 },
  { coord: [0, 2], dist: 3, prevDist: 2 },

  { coord: [3, 0], dist: 4, prevDist: 3 }, // 4
  { coord: [2, 1], dist: 4, prevDist: 3 },
  { coord: [1, 2], dist: 4, prevDist: 3 },
  { coord: [0, 3], dist: 4, prevDist: 3 },

  { coord: [4, 0], dist: 5, prevDist: 4 }, // 5 obj (mid-point)
  { coord: [3, 1], dist: 5, prevDist: 4 },
  { coord: [2, 2], dist: 5, prevDist: 4 },
  { coord: [1, 3], dist: 5, prevDist: 4 },
  { coord: [0, 4], dist: 5, prevDist: 4 },

  { coord: [4, 1], dist: 6, prevDist: 5 }, // 4
  { coord: [3, 2], dist: 6, prevDist: 5 },
  { coord: [2, 3], dist: 6, prevDist: 5 },
  { coord: [1, 4], dist: 6, prevDist: 5 },

  { coord: [4, 2], dist: 7, prevDist: 6 }, // 3
  { coord: [3, 3], dist: 7, prevDist: 6 },
  { coord: [2, 4], dist: 7, prevDist: 6 },

  { coord: [4, 3], dist: 8, prevDist: 7 }, // 2
  { coord: [3, 4], dist: 8, prevDist: 7 },

  { coord: [4, 4], dist: 9, prevDist: 8 }, // 1
];

let show = false;

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
