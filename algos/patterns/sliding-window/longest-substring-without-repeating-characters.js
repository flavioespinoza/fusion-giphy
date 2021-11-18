/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring_1 = function(s) {
  // map and left pointer
  const map = {};
  let left = 0;
  // create array from string
  const array = s.split('');
  // return reduce((previousIndex, current, currentIndex) => { }, 0)
  return array.reduce((previousIndex, current, currentIndex) => { 
    // check map[current] against left
    if (map[current] >= left) {
      left = map[current] + 1;
    }
    // add current to map = currentIndex
    map[current] = currentIndex;
    // set "updatedIndex" to check max against "previousIndex"
    const updatedIndex = currentIndex - left + 1;
    // return the max index
    return Math.max(previousIndex, updatedIndex);    
  }, 0);
};

const lengthOfLongestSubstring_2 = function(s) {
  const map = {};
  let l = 0;
  return s.split('').reduce((p, v, c) => {
    if (map[v] >= l) l = map[v] + 1;
    map[v] = c;
    const u = c - l + 1;
    return Math.max(u, p);
  }, 0);
};

const lengthOfLongestSubstring = function(s) {
  // ASCII: 128 characters | Constant Space O(1)
  const counts = new Array(128).fill(0);
  let max = 0;
  for (let left = 0, right = 0; right < s.length; right++) {
    counts[s.charCodeAt(right)]++;
    while (counts[s.charCodeAt(right)] > 1) {
      counts[s.charCodeAt(left)]--;
      left++;
    }
    max = Math.max(max, right - left + 1);
  }
  return max;
};
let string;

string = 'abcabcbb';
console.log(lengthOfLongestSubstring(string)); // 3
