// time - O(ns + bs) | space - O(ns)
// n = length of small strings array
// b = length of big string string
// s = length of longest string in small strings array
function multiStringSearch({ bigString, smallStrings }) {
  // initialize a new Trie() tree data structure
  const trie = new Trie();

  for (const string of smallStrings) {
    // insert small strings into trie tree data structure
    trie.insert(string);
  }

  console.log(JSON.stringify(trie, null, 2));

  const containedStrings = {};

  for (let i = 0; i < bigString.length; i++) {
    // if small strings exist in bigString add to containedStrings memo
    findSmallStringsIn(bigString, i, trie, containedStrings);
  }

  return smallStrings.map((string) => string in containedStrings);
}

function findSmallStringsIn(string, startIdx, trie, containedStrings) {
  let currentNode = trie.root;
  for (let i = startIdx; i < string.length; i++) {
    const currentChar = string[i];
    if (!(currentChar in currentNode)) break;
    currentNode = currentNode[currentChar];
    if ('*' in currentNode) containedStrings[currentNode['*']] = true;
  }
}

class Trie {
  constructor() {
    this.root = {};
  }

  insert(string) {
    let current = this.root;
    for (let i = 0; i < string.length; i++) {
      if (!(string[i] in current)) {
        current[string[i]] = {};
      }
      current = current[string[i]];
    }
    current['*'] = string;
  }
}

// Do not edit the line below.
exports.multiStringSearch = multiStringSearch;

let test;

test = {
  bigString: 'where is the big cat',
  // smallStrings: ['this', 'yo', 'is', 'a', 'bigger', 'string', 'kappa'],
  smallStrings: ['ca', 'cat', 'cattle'],
};

console.log(multiStringSearch(test)); // [ true, true, false ]

const trie_data = {
  root: {
    c: {
      a: {
        '*': 'ca',
        t: {
          '*': 'cat',
          t: {
            l: {
              e: {
                '*': 'cattle',
              },
            },
          },
        },
      },
    },
  },
};

const dict = ['at', 'cat', 'cattle'];
