const adjacencyList = {
  I: ['C', 'B', 'A'],
  C: ['I', 'B', 'F'],
  B: ['C', 'I', 'E'],
  A: ['I', 'D', 'E'],
  D: ['A', 'E'],
  E: ['D', 'A', 'B', 'F'],
  F: ['E', 'C'],
};

const dist = {
  I: 45,
  A: 53,
  B: 40,
  C: 42,
  D: 57,
  E: 44,
  F: 0,
}

const graph = {};

for (const [key, val] of Object.entries(adjacencyList)) {
  graph[key] = {
    name: key,
    dist: dist[key],
    children: val,
  }
}

function bestFirstSearch(graph, startNodeName, targetNodeName) {
  let currentName = startNodeName;
  const que = [ graph[startNodeName] ];
  const closed = [];
  while (currentName !== targetNodeName) {
    const current = que.shift();
    currentName = current.name
    closed.push(currentName);
    for (const name of current.children) {
      // if que has obj with name do nothing
      if (que.findIndex((obj) => obj.name === name) !== -1) continue;
      const sortedIndex = getSortedIndexOfObject(que, graph[name], 'dist');
      que.splice(sortedIndex, 0, graph[name]);
    }
    // Alternative: 
    // 1. push graph[name] onto que INSIDE the for of loop above
    // 2. then use que.sort OUTSIDE of the for of loop as show below
    //    que.sort((a, b) => a['dist'] - b['dist']);
    console.log('que', que)
  }
  return closed;
}

function getSortedIndexOfObject(array, obj, prop) {
  let low = 0;
  let high = array.length;
  while (low < high) {
    let mid = (low + high) >>> 1;
    if (array[mid][prop] < obj[prop]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
}


console.log(bestFirstSearch(graph, 'I', 'F')); // [ 'I', 'B', 'C', 'F' ]