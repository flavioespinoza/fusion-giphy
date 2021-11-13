function topKFrequent(words, k) {
  const results = [];
  // create hash map to track counts
  const map = {};
  for (const word of words) {
    if (!(word in map)) {
      map[word] = 1;
    } else {
      map[word]++;
    }
  }
  // create an array of keys
  const keys = Object.keys(map);
  // sort keys using count difference or keyA locale-compare keyB
  keys.sort((keyA, keyB) => {
    const diff = map[keyB] - map[keyA];
    if (diff === 0) return keyA.localeCompare(keyB);
    else return diff;
  });
  // return results array
  return keys.slice(0, k);
}


let words;

words = ['i', 'love', 'leetcode', 'i', 'love', 'coding'];
console.log(topKFrequent(words, 2)); // [ 'i', 'love' ]

words = ['the', 'day', 'is', 'sunny', 'the', 'the', 'the', 'sunny', 'is', 'is'];
console.log(topKFrequent(words, 4));

words = ['i', 'love', 'leetcode', 'i', 'love', 'coding'];
console.log(topKFrequent(words, 3));
