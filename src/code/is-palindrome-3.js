const util = require('util');

function isPalindrome(string) {
  // 2 pointers
  let left = 0;
  let right = string.length - 1;
  while (left < right) {
    let s_left = string[left];
    let s_right = string[right];
    if (s_left !== s_right) {
      return false;
    } else {
      // do nothing
      // iterate and check again
      // console.log(s_left, s_right);
    }
    left++;
    right--;
  }
  return true;
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome;

// console.log(isPalindrome('==|==')); // true
// console.log(isPalindrome('==|_|==')); // true
// console.log(isPalindrome('|')); // true
// console.log(isPalindrome('||')); // true

const tie = {
  fighter: '|-o-|',
  bomber: '|-=oø=-|',
  interceptor: '|-=8=o=8=-|',
  heavy_bomber: '|-=o=8=-|',
  experimental: 'ø-=|=-o',
  raptor: 'ø',
  droid: 'oø',
  t_wing: 'oø=--|',
  empty: '',
};

const result = [];

// construct a matrix 3 columns n rows
for (const [type, spec] of Object.entries(tie)) {
  result.push([spec, isPalindrome(spec), type]);
}
console.log(result);
const output = [
  ['|-o-|', true, 'fighter'],
  ['|-=oø=-|', false, 'bomber'],
  ['|-=8=o=8=-|', true, 'interceptor'],
  ['|-=o=8=-|', false, 'heavy_bomber'],
  ['ø-=|=-o', false, 'experimental'],
  ['ø', true, 'raptor'],
  ['oø', false, 'droid'],
  ['oø=--|', false, 't_wing'],
  ['', true, 'empty'],
];

// create the following matrix
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
 *
 * [
 * 		{ x: 0, y: 0, n: 1 },
 * 		{ x: 0, y: 1, n: 8 },
 * 		{ x: 0, y: 2, n: 9 },
 * 		{ x: 0, y: 3, n: 16 },
 * 		{ x: 0, y: 4, n: 17 },
 *
 * 		{ x: 1, y: 0, n: 2 },
 * 		{ x: 1, y: 1, n: 9 },
 * 		{ x: 1, y: 2, n: 10 },
 * 		{ x: 1, y: 3, n: 17 },
 * 		{ x: 1, y: 4, n: 18 },
 *
 * 		{ x: 2, y: 0, n: 3 },
 * 		{ x: 2, y: 1, n: 10 },
 * 		{ x: 2, y: 2, n: 11 },
 * 		{ x: 2, y: 3, n: 18 },
 * 		{ x: 2, y: 4, n: 19 },
 *
 * 		{ x: 3, y: 0, n: 4 },
 * 		{ x: 3, y: 1, n: 11 },
 * 		{ x: 3, y: 2, n: 12 },
 * 		{ x: 3, y: 3, n: 19 },
 * 		{ x: 3, y: 4, n: 20 }
 * ]
 *
 * */

let i = 0;
const matrix = {
  // ['x0',    'y0'   ]: 1, ['x0', 'y1']: 8, 				['x0', 'y2']: 9, 				['x0', 'y3']: 16,  					['x0', 'y4']: 17,

  [`{ "x": ${i}, "y": ${i}, "n": ${1} }`]: 1,
  [`{ "x": ${i}, "y": ${i + 1}, "n": ${8} }`]: 8,
  [`{ "x": ${i}, "y": ${i + 2}, "n": ${9} }`]: 9,
  [`{ "x": ${i}, "y": ${i + 3}, "n": ${16} }`]: 16,
  [`{ "x": ${i}, "y": ${i + 4}, "n": ${17} }`]: 17,

  [`{ "x": ${i + 1}, "y": ${i}, "n": ${1 + 1} }`]: 1 + 1,
  [`{ "x": ${i + 1}, "y": ${i + 1}, "n": ${8 + 1} }`]: 8 - 1,
  [`{ "x": ${i + 1}, "y": ${i + 2}, "n": ${9 + 1} }`]: 9 + 1,
  [`{ "x": ${i + 1}, "y": ${i + 3}, "n": ${16 + 1} }`]: 16 - 1,
  [`{ "x": ${i + 1}, "y": ${i + 4}, "n": ${17 + 1} }`]: 17 + 1,

  [`{ "x": ${i + 2}, "y": ${i}, "n": ${1 + 2} }`]: 1 + 2,
  [`{ "x": ${i + 2}, "y": ${i + 1}, "n": ${8 + 2} }`]: 8 - 2,
  [`{ "x": ${i + 2}, "y": ${i + 2}, "n": ${9 + 2} }`]: 9 + 2,
  [`{ "x": ${i + 2}, "y": ${i + 3}, "n": ${16 + 2} }`]: 16 - 2,
  [`{ "x": ${i + 2}, "y": ${i + 4}, "n": ${17 + 2} }`]: 17 + 2,

  [`{ "x": ${i + 3}, "y": ${i}, "n": ${1 + 3} }`]: 1 + 3,
  [`{ "x": ${i + 3}, "y": ${i + 1}, "n": ${8 + 3} }`]: 8 - 3,
  [`{ "x": ${i + 3}, "y": ${i + 2}, "n": ${9 + 3} }`]: 9 + 3,
  [`{ "x": ${i + 3}, "y": ${i + 3}, "n": ${16 + 3} }`]: 16 - 3,
  [`{ "x": ${i + 3}, "y": ${i + 4}, "n": ${17 + 3} }`]: 17 + 3,
};

const table = [];
for (const [location, value] of Object.entries(matrix)) {
  table.push([location, value]);
}

console.log(table);

const allCoordinates = [];
for (let i = 0; i < table.length; i++) {
  let coordinates = JSON.parse(table[i][0]);
  console.log(coordinates);
  console.log(typeof coordinates);
  allCoordinates.push(coordinates);
}

console.log(allCoordinates);
