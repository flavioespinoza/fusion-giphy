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
