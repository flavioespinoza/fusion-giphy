class Node {
  constructor(value, left = {}, right = {}) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function create_tree(mapping, head_value) {
  let head = new Node(head_value);
  let nodes = { 0: head };
  for (const [key, value] of Object.entries(mapping)) {
    nodes[value[0]] = new Node(value[0]);
    nodes[value[1]] = new Node(value[1]);
  }
  for (const [key, value] of Object.entries(mapping)) {
    if (!nodes[key]) {
      break;
    }
    nodes[key].left = nodes[value[0]];
    nodes[key].right = nodes[value[1]];
  }
  return head;
}

// The mapping we're going to use for constructing a tree.
// {0: [1, 2]} means that 0's left child is 1, and its right
// child is 2.
let mapping0 = { 0: [1, 2] };
let mapping1 = { 0: [1, 2], 1: [3, 4], 2: [5, 6] };
let mapping2 = { 3: [1, 4], 1: [0, 2], 4: [5, 6] };

let mapping3 = {
  3: [1, 5],

  1: [0, 2],
  5: [4, 6],

  
};
// This tree is:
//  head3 = 3
//        /   \
//       1     5
//      /\    / \
//     0  2  4   6

let mapping4 = { 3: [1, 5], 1: [0, 4] };

let head0 = create_tree(mapping0, 0);
// This tree is:
//  head0 = 0
//        /   \
//       1     2
let head1 = create_tree(mapping1, 0);
console.log(JSON.stringify(head1, null, 2));
// This tree is:
//  head1 = 0
//        /   \
//       1     2
//      /\    / \
//     3  4  5   6
let head2 = create_tree(mapping2, 3);
// This tree is:
//  head2 = 3
//        /   \
//       1     4
//      /\    / \
//     0  2  5   6
let head3 = create_tree(mapping3, 3);
// This tree is:
//  head3 = 3
//        /   \
//       1     5
//      /\    / \
//     0  2  4   6
let head4 = create_tree(mapping4, 3);
// This tree is:
//  head4 = 3
//        /   \
//       1     5
//      /\
//     0  4
