// You are given an input list of n activities and there are restrictions on which activities must be done before another.

// For example with 10 activities, these are the

restrictions: [1,2], [3,4], [1,3].

- Activity 1 must be done before activity 2 and 3,
- activity 3 must be done before activity 4,

// Return ONE possible order<number[]> of completing all activities.

// Input: n = 10, restrictions = [[1,2], [3,4], [1,3]]

// Output: [9, 10, -->1, 3, 2, 4<--, 5, 6, 8]

// [1, 3, 2, 4, ...10]

// 1-9

// 1, 2, 3, 4,

// build a graph adjacency list
function buildGraphAdjacencyList(arrEdgePairs) {
  const graph = {};

  for (const edgePair of arrEdgePairs) {
    // destructure edgePair
    const [a, b] = edgePair;

    // initialize graph at a and b as an array
    if (!graph[a]) graph[a] = [];
    // if (!graph[b]) graph[b] = [];

    // construct unidirectional connections
    // push b onto graph[a]
    // push a onto graph[b]
    graph[a].push(b);
    // graph[b].push(a);
  }

  return graph;
}

function breadthFirstPrint(graph, source) {
  const que = [source];
  while (que.length > 0) {
    const current = que.shift();
    console.log(current);
    for (let neighbor of current) {
      que.push(neighbor);
    }
  }
}

let edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n'],
];

const graph = buildGraphAdjacencyList(edges);
console.log(graph);

const graphResult = {
  i: ['j'],
  k: ['i', 'l'],
  m: ['k'],
  o: ['n'],
};


console.log(breadthFirstPrint(graph, 'i'))

// console.log(breadthFirstBuild(edges, 'i'))

// 1 2 3 4
// 1 3 2 4

// VALID PATH = [1, 3, 2, 4]

// function possibleOrder(n, edges) {

//   // const validPath = (edges) =>  [1, 3, 2, 4]

//   // otherPath = [others than validPath vals]
//   for (let i = 0; i < length; i++) {

//   }

//   return [...validPath, ...otherPath]
// }
