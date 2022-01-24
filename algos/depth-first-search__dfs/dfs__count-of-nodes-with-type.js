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


// const dfs__countOfNodesWithType = (obj, type) => {
//   const countTypes = (nodes) => {
//     let count = 0;
//     nodes.forEach((node) => {
//       if (node.properties.type === type) count++;
//       count += countTypes(node.children);
//     });
//     return count;
//   }
//   return countTypes(obj.nodes);
// };









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

const dfs__countOfNodesWithType = (obj, type) => {
  const countTypes = (nodes) => {
    let count = 0;
    for (const node of nodes) {
      if (node.properties.type === type) {
        count++;
      }
      count += countTypes(node.children);
    }
    return count;
  }
  return countTypes(obj.nodes);
}

console.log(dfs__countOfNodesWithType(obj, 'x')); // 3
console.log(dfs__countOfNodesWithType(obj, 'y')); // 1
