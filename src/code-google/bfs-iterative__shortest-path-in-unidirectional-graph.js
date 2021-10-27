const buildGraph = require('./build-graph-adjacency-list');

function shortestPath(edges, startNode, endNode) {
  const graph = buildGraph(edges);
  // crete a set to keep track of nodes already seen - this will prevent infinite loops
  const visited = new Set();
  // initiate the que with an array of the startNode and the initial distance equal to 0
  const que = [[startNode, 0 /** 0 is the initial distance - the value that will be returned */]];

  // while the que has items on it
  while (que.length > 0) {
    // destructure the current node and current distance from the first item in the que
    const [currentNode, currentDistance] = que.shift();
    
    // if the current node is the same as the end node then return the current distance
    if (currentNode === endNode) return currentDistance;

    // check neighbor of the graph at the index of current node
    for (let neighbor of graph[currentNode]) {
      // if neighbor has not been visited before
      if (!visited.has(neighbor)) {
        // add neighbor to visited set
        visited.add(neighbor);
        // push new array pair consisting of the neighbor and the current distance + 1
        que.push([neighbor, currentDistance + 1]);
      }
    }
  }

  // if no path exists return -1
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

module.exports = shortestPath;