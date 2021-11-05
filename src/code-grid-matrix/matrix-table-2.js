/**
 * @param rows 		number of rows
 * @param columns number of columns
 * @example
 *
 * 			y0  y1   y2  y3   y4
 * x0 | 1 | 8 |  9 | 16 | 17 |
 *
 * x1 | 2 | 7 | 10 | 15 | 18 |
 *
 * x2 | 3 | 6 | 11 | 14 | 19 |
 *
 * x3 | 4 | 5 | 12 | 13 | 20 |
 *
 * let x = 0;
 * let y = 0;
 *
 * const coordinates = [
 *
 *
 *              0            +7               +1            	 +7               +1
 * 	 [x0, y0, 1]+0   [x0, y1, 8]-0   [x0, y2,  9]+0  [x0, y3, 16]-0  [x0, y4, 17]+0
 *
 *
 *   						0							+5               +3             +5             +3
 * 	 [x1, y0, 2]+1  [x1, y1, 7]-1  	[x1, y2, 10]+1  [x1, y3, 15]-1  [x1, y4, 18]+1
 *
 *
 *							0						+3              +5             +3             +5
 * 	 [x2, y0, 3]+1  [x2, y1, 6]-1  [x2, y2, 11]+1  [x2, y3, 14]-1  [x2, y4, 19]+1
 *
 *
 *						 0						+1              +7             +1             +7
 * 	 [x3, y0, 4]+1  [x3, y1, 5]-1  [x3, y2, 12]+1  [x3, y3, 13]-1  [x3, y4, 20]+1
 *
 *
 * ]
 * */

function isOdd(num) {
  return num % 2 !== 0;
}

function createTable(height, width) {
  // create a results array
  const result = [];
  // outer loop index x | length = width
  for (var x = 0; x < height; x++) {
    // set result at index x to an empty array
    result[x] = [];
    // inner loop index y | length = width
    for (var y = 0; y < width; y++) {
      // index y is even number
      if (y % 2 === 0) {
        let value = height * y + 1 + x;
        result[x][y] = value;
      }
      // index x is odd number
      else {
        let value = height * (y + 1) - x;
        result[x][y] = value;
      }
    }
  }
  return result;
}

const output_log = {
  even: {
    equation: '(height * y) + 1 + x',
    iterations: [
      'x0 y0: (4 * 0) + 1 + 0 = 1',
      'x0 y2: (4 * 2) + 1 + 0 = 9',
      'x0 y4: (4 * 4) + 1 + 0 = 17',
      'x1 y0: (4 * 0) + 1 + 1 = 2',
      'x1 y2: (4 * 2) + 1 + 1 = 10',
      'x1 y4: (4 * 4) + 1 + 1 = 18',
      'x2 y0: (4 * 0) + 1 + 2 = 3',
      'x2 y2: (4 * 2) + 1 + 2 = 11',
      'x2 y4: (4 * 4) + 1 + 2 = 19',
      'x3 y0: (4 * 0) + 1 + 3 = 4',
      'x3 y2: (4 * 2) + 1 + 3 = 12',
      'x3 y4: (4 * 4) + 1 + 3 = 20',
    ],
  },
  odd: {
    equation: 'height * (y + 1) - x',
    iterations: [
      'x0 y1: 4 * (1 + 1) - 0 = 8',
      'x0 y3: 4 * (3 + 1) - 0 = 16',
      'x1 y1: 4 * (1 + 1) - 1 = 7',
      'x1 y3: 4 * (3 + 1) - 1 = 15',
      'x2 y1: 4 * (1 + 1) - 2 = 6',
      'x2 y3: 4 * (3 + 1) - 2 = 14',
      'x3 y1: 4 * (1 + 1) - 3 = 5',
      'x3 y3: 4 * (3 + 1) - 3 = 13',
    ],
  },
};

console.log(createTable(4, 5));

const output = [
  [1, 8, 9, 16, 17],
  [2, 7, 10, 15, 18],
  [3, 6, 11, 14, 19],
  [4, 5, 12, 13, 20],
];

/**
 * @param height 	number of rows
 * @param width   number of columns
 * @example
 *
 * 			y0  y1   y2  y3   y4
 * x0 | 1 | 8 |  9 | 16 | 17 |
 *
 * x1 | 2 | 7 | 10 | 15 | 18 |
 *
 * x2 | 3 | 6 | 11 | 14 | 19 |
 *
 * x3 | 4 | 5 | 12 | 13 | 20 |
 *
 * let x = 0;
 * let y = 0;
 *
 * const coordinates = [
 *
 *
 *              0            +7               +1            	 +7               +1
 * 	 [x0, y0, 1]+0   [x0, y1, 8]-0   [x0, y2,  9]+0  [x0, y3, 16]-0  [x0, y4, 17]+0
 *
 *
 *   						0							+5               +3             +5             +3
 * 	 [x1, y0, 2]+1  [x1, y1, 7]-1  	[x1, y2, 10]+1  [x1, y3, 15]-1  [x1, y4, 18]+1
 *
 *
 *							0						+3              +5             +3             +5
 * 	 [x2, y0, 3]+1  [x2, y1, 6]-1  [x2, y2, 11]+1  [x2, y3, 14]-1  [x2, y4, 19]+1
 *
 *
 *						 0						+1              +7             +1             +7
 * 	 [x3, y0, 4]+1  [x3, y1, 5]-1  [x3, y2, 12]+1  [x3, y3, 13]-1  [x3, y4, 20]+1
 *
 *
 * ]
 * */
