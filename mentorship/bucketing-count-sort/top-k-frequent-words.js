function topKFrequent(words, k) {
  // build a hash map to track counts
  const map = {};
  for (const word of words) {
    if (!map[word]) {
      map[word] = 1;
    } else {
      map[word]++;
    }
  }
  // create array of map keys
  const keys = Object.keys(map);
  // sort the keys using count difference or local-compare keys
  keys.sort((aKey, bKey) => {
    const diff = map[bKey] - map[aKey];
    if (diff === 0) return aKey.localeCompare(bKey);
    else return diff;
  });
  // return slice k keys
  return keys.slice(0, k);
}


let words;

words = ['i', 'love', 'leetcode', 'i', 'love', 'coding'];
console.log(topKFrequent(words, 2)); // [ 'i', 'love' ]

words = ['the', 'day', 'is', 'sunny', 'the', 'the', 'the', 'sunny', 'is', 'is'];
console.log(topKFrequent(words, 4));

words = ['i', 'love', 'leetcode', 'i', 'love', 'coding'];
console.log(topKFrequent(words, 3));
