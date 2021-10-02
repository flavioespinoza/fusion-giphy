class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function create_tree(mapping, head_value) {
  const head = new Node(head_value);
  const nodes = { [head_value]: head };
  for (const [key, value] of Object.entries(mapping)) {
    nodes[value[0]] = new Node(value[0]);
    nodes[value[1]] = new Node(value[1]);
  }
  for (const [key, value] of Object.entries(mapping)) {
    nodes[key].left = nodes[value[0]];
    nodes[key].right = nodes[value[1]];
  }
  return head;
}

function path_to_x(root, x) {
  if (!root) return null;
  if (root.value === x) return [root.value];

  let left_path = path_to_x(root.left, x);
  if (left_path) {
    left_path.push(root.value);
    return left_path;
  }

  let right_path = path_to_x(root.right, x);
  if (right_path) {
    right_path.push(root.value);
    return right_path;
  }

  return null;
}

function lca(root, j, k) {
  let path_to_j = path_to_x(root, j);
  let path_to_k = path_to_x(root, k);
  if (!path_to_j || !path_to_k) return null;
  let res = null;
  while (path_to_j.length && path_to_k.length) {
    let j_pop = path_to_j.pop();
    let k_pop = path_to_k.pop();
    if (j_pop === k_pop) {
      res = j_pop;
    } else {
      break;
    }
  }
  return res;
}

const mapping1 = { 
  0: [1, 2], 
  1: [3, 4], 
  2: [5, 6] 
};
const head1 = create_tree(mapping1, 0);
// This tree is:
// head1 = 0
//        / \
//       1   2
//      /\   /\
//     3  4 5  6

const mapping2 = { 
  5: [1, 4], 
  1: [3, 8], 
  4: [9, 2], 
  3: [6, 7] 
};
const head2 = create_tree(mapping2, 5);
// This tree is:
//  head2 = 5
//        /   \
//       1     4
//      /\    / \
//     3  8  9  2
//    /\
//   6  7

// console.log(lca(head1, 1, 5)); // should return 0
// console.log(lca(head1, 3, 1)); // should return 1
// console.log(lca(head1, 1, 4)); // should return 1
// console.log(lca(head1, 0, 5)); // should return 0
// console.log(lca(head2, 4, 7)); // should return 5
// console.log(lca(head2, 3, 3)); // should return 3
console.log(lca(head2, 8, 7)); // should return 1
// console.log(lca(head2, 3, 0)); // should return null