// interface Node {
//   id: string,
//   properties: {
//     type: string,
//   },
//   children: Node[] // array of nodes
// }

// interface Diagram {
//   nodes: Node[], // array of nodes
//   id: string,
// }

const obj = {
  nodes: [
    {
      id: 'node1',
      properties: {
        type: 'x',
      },
      children: [
        {
          id: 'node3',
          properties: {
            type: 'x',
          },
          children: [],
        },
      ],
    },
    {
      id: 'node2',
      properties: {
        type: 'y',
      },
      children: [
        {
          id: 'node4',
          properties: {
            type: 'x',
          },
          children: [],
        },
      ],
    },
  ],

  id: 'diagram1',
};

const dfs__countOfNodesWithType = (nodes, type) => {
  const result = countTypes(nodes);
  function countTypes(nodes) {
    let count = 0;
    nodes.forEach((node) => {
      if (node.properties.type === type) count++;
      count = count + countTypes(node.children);
    });
    return count;
  }
  return result;
};

console.log(dfs__countOfNodesWithType(obj.nodes, 'x')); // 3
console.log(dfs__countOfNodesWithType(obj.nodes, 'y')); // 1
