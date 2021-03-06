const depthFirstValidPath = (graph, source) => {
  const stack = [source];
  const res = [];
  while(stack.length) {
    const current = stack.pop();
    res.push(current);
    if (graph[current]) {
      for (let neighbor of graph[current]) {
        stack.push(neighbor);
      }
    }
  }
  return res;
}

function buildArray(length) {
  const res = [];
  for (let i = 0; i < length; i++) {
    res.push(i + 1);
  }
  return res;
}

function buildDirectedGraph(edges) {
  const graph = {};

  for (const edge of edges) {
    // destructure edge pair
    const [a, b] = edge;

    // initialize graph at a and b as an array
    if (!graph[a]) graph[a] = [];

    // construct unidirectional connections
    graph[a].push(b);
  }

  return graph;
}

const restrictions = [[1,2], [3,4], [1,3]];
const restrictedGraph = buildDirectedGraph(restrictions);

console.log(restrictedGraph);

const valid = depthFirstValidPath(restrictedGraph, 1);

const array = buildArray(9);

const other = array.filter((x) => { 
  return valid.indexOf(x) < 0;
});

console.log(valid);
console.log(other);

const res = [...valid, ...other];

console.log(res);
