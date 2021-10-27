function buildGraphAdjacencyList(arrEdgePairs) {
  const graph = {};

  for (const edgePair of arrEdgePairs) {
    // destructure edgePair
    const [a, b] = edgePair;

    // initialize graph at a and b as an array
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];

    // construct unidirectional connections
    // push b onto graph[a]
    // push a onto graph[b]
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
}

let edgePairs;
let expected;
let result;

edgePairs = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', ''],
];

// console.log(buildGraphAdjacencyList(edgePairs));

expected = {
  i: ['j', 'k'],
  j: ['i'],
  k: ['i', 'm', 'l'],
  m: ['k'],
  l: ['k'],
  o: ['n'],
  n: ['o'],
};

result = {
  i: ['j', 'k'],
  j: ['i'],
  k: ['i', 'm', 'l'],
  m: ['k'],
  l: ['k'],
  o: ['n'],
  n: ['o'],
};

module.exports = buildGraphAdjacencyList;