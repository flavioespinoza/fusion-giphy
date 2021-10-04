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

function createTableData(height, width) {
  let value = 0;
  let offset = 1;
  const array = [];
  let val = null;
  for (let x = 0; x < height; x++) {
    for (let y = 0; y < width; y++) {
      ++val;
      array.push({
        x,
        y,
        n: val,
        idx: null,
      });

    }
  }

  for (let i = 0; i < array.length; i++) {
      array[i].idx = i;
       
  }

  return array;
}

console.log(createTableData(4, 5));

const data = [
  { x: 0, y: 0, n: 1 },
  { x: 0, y: 1, n: 8 },
  { x: 0, y: 2, n: 9 },
  { x: 0, y: 3, n: 16 },
  { x: 0, y: 4, n: 17 },

  { x: 1, y: 0, n: 2 },
  { x: 1, y: 1, n: 7 },
  { x: 1, y: 2, n: 10 },
  { x: 1, y: 3, n: 18 },
  { x: 1, y: 4, n: 15 },

  { x: 2, y: 0, n: 3 },
  { x: 2, y: 1, n: 6 },
  { x: 2, y: 2, n: 11 },
  { x: 2, y: 3, n: 14 },
  { x: 2, y: 4, n: 19 },

  { x: 3, y: 0, n: 4 },
  { x: 3, y: 1, n: 5 },
  { x: 3, y: 2, n: 12 },
  { x: 3, y: 3, n: 13 },
  { x: 3, y: 4, n: 20 },
];
