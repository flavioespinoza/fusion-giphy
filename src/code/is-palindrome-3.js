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
      console.log(s_left);
      console.log(s_right);
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
  result.push([
		spec,
		isPalindrome(spec),
		type
	]);
}
const output = [ 
  [ '|-o-|', 				true,   'fighter'      ], 
  [ '|-=oø=-|', 		false,  'bomber'       ], 
  [ '|-=8=o=8=-|',  true,   'interceptor'  ], 
  [ '|-=o=8=-|', 		false,  'heavy_bomber' ], 
  [ 'ø-=|=-o', 			false,  'experimental' ], 
  [ 'ø', 						true,   'raptor'       ], 
  [ 'oø', 					false,  'droid'        ], 
  [ 'oø=--|', 			false,  't_wing'       ], 
  [ '', 						true,   'empty'        ] 
];

// create the following matrix
/**
 * @param rows 		number of rows
 * @param columns number of columns
 * @example 
 * 
 * 			x0  x1   x2  x3   x4
 * y0 | 1 | 8 |  9 | 16 | 17 |
 * 
 * y1 | 2 | 7 | 10 | 15 | 18 |
 * 
 * y2 | 3 | 6 | 11 | 14 | 19 |
 * 
 * y3 | 4 | 5 | 12 | 12 | 20 |
 * 
 * */
