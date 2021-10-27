const buildGraph = require('./build-graph-adjacency-list');

function shortestPath(edges, nodeA, nodeB) {
  const graph = buildGraph(edges);
  const visited = new Set();
  const que = [[nodeA, 0]];

  while (que.length > 0) {
    const [node, distance] = que.shift();
    if (node === nodeB) return distance;

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        que.push([neighbor, distance + 1]);
      }
    }
  }

  return -1;
}

let edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v'],
];

console.log(shortestPath(edges, 'w', 'z')); // 2

/**
 * @param {word1} string current word
 * @param {word2} string word to compare
 * @param {k} number max number of changes allowed
 * */
function wordsDifferByK(word1, word2, k) {
  if (word1 === word2) throw new Error('Error: word1 and word2 must be different words');
  if (word1.length === word2.length) {
    // if word1 is as long as word 2
    for (let i = 0; i < word1.length; i++) {
      // go from first to last character index the words
      if (word1.charAt(i) != word2.charAt(i)) {
        // if this character from word_1 does not equal the character from word_2
        // decrement changes allowed
        k--; 
        if (k < 0) {
          // and if you have more changes than allowed
          return false; // return false
        }
      }
    }
  }

  return true;
}

console.log(wordsDifferByK('hit', 'hot', 1)); // true
console.log(wordsDifferByK('hit', 'cot', 1)); // false
// console.log(wordsDifferByK('hit', 'hit', 1)); // Error: word1 and word2 must be different words
