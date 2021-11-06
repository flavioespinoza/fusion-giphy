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

let edges = [
  ['I', 'C'],
  ['C', 'B'],
  ['B', 'I'],
  ['I', 'A'],
  ['A', 'D'],
  ['D', 'E'],
  ['E', 'A'],
  ['E', 'B'],
  ['E', 'F'],
  ['C', 'F'],
];

console.log(buildGraphAdjacencyList(edges));

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

let graph = {
  graph: {
    nodes: [
      { children: ['B', 'C', 'D'], id: 'A', value: 'A' },
      { children: ['E', 'F'], id: 'B', value: 'B' },
      { children: [], id: 'C', value: 'C' },
      { children: ['G', 'H'], id: 'D', value: 'D' },
      { children: [], id: 'E', value: 'E' },
      { children: ['I', 'J'], id: 'F', value: 'F' },
      { children: ['K'], id: 'G', value: 'G' },
      { children: [], id: 'H', value: 'H' },
      { children: [], id: 'I', value: 'I' },
      { children: [], id: 'J', value: 'J' },
      { children: [], id: 'K', value: 'K' },
    ],
    startNode: 'A',
  },
};

