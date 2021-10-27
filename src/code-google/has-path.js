// @note : only used with directional graphs
const iterative = (graph, src, dst) => {
  const que = [ src ];

  while(que.length > 0) {
    const current = que.shift();

    if (current === dst) return true;

    for (const neighbor of graph[current]) {
      que.push(neighbor);
    }
  }

  return false;
}

// @note : only used with unidirectional graphs
const recursive = (graph, src, dst, visited) => {
  if (src === dst) return true;

  if (visited.has(src)) return false;
  visited.add(src);

  for(const neighbor of graph[src]) {
    if (recursive(graph, neighbor, dst, visited)) {
      return true;
    }
  }

  return false;
}

module.exports = {
  iterative,
  recursive,
}
