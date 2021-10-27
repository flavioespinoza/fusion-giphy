const buildGraphAdjacencyList = require('./build-graph-adjacency-list');
const hasPath = require('./has-path');

// hasPath.iterative is used in directional path graphs (is NOT used in this method)
// hasPath.recursive is used in unidirectional path graphs (is used in this method)
function dfs_recursive_unidirectionalPath(edges, nodeA, nodeB) {
  const graph = buildGraphAdjacencyList(edges);
  return hasPath.recursive(graph, nodeA, nodeB, new Set());
}

let edgePairs;

edgePairs = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n'],
];

/**
 * visualization of edgePairs above
 * @example
 *
 *    i -- j
 *    |  /
 *    | /
 *    k -- l
 *    |
 *    |
 *    m
 *
 *
 *    o -- n
 *
 * */

// recursive
console.log(dfs_recursive_unidirectionalPath(edgePairs, 'j', 'm')); // true
console.log(dfs_recursive_unidirectionalPath(edgePairs, 'o', 'm')); // false

module.exports = dfs_recursive_unidirectionalPath;