// using hash map - Space O(n)
const lengthOfLongestSubstringTwoDistinct = function(s) {
  let counts = {}; // hash map
  let max = 0;
  for (let left = 0, right = 0; right < s.length; right++) {
    const rightChar = s.charCodeAt(right);
    if (!(rightChar in counts)) {
      counts[rightChar] = 0;
    }
    counts[rightChar]++;
    while (Object.keys(counts).length > 2) {
      const leftChar = s.charCodeAt(left);
      counts[leftChar]--;
      if (counts[leftChar] === 0) {
        delete counts[leftChar];
      }
      left++;
    }
    max = Math.max(max, right - left + 1);
  }
  return max;
};

// using array of ASCII characters - Space O(1)
function lengthOfLongestSubstringTwoDistinct(s) {
  // ASCII: 128 characters | Constant Space O(1)
  const counts = new Array(128).fill(0);
  let max = 0;
  let distinct = 0;
  for (let left = 0, right = 0; right < s.length; right++) {
    let r = s.charCodeAt(right);
    if (counts[r] === 0) {
      distinct++;
    }
    counts[r]++;
    while (distinct > 2) {
      let l = s.charCodeAt(left);
      counts[l]--;
      if (counts[l] === 0) {
        distinct--;
      }
      left++;
    }
    max = Math.max(max, right - left + 1);
  }
  return max;
}
