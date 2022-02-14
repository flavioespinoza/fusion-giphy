class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');

//      a
//     / \
//    b   c
//   / \   \
//  d  e    f

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

let expected = ['a', 'b', 'd', 'e', 'c', 'f'];

function dfs__depthFirstPrint(root) {
  const result = [];
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current.val);
    result.push(current.val);
    if (current.right !== null) {
      stack.push(current.right);
    }
    if (current.left !== null) {
      stack.push(current.left);
    }
  }
  return result;
}
console.log(dfs__depthFirstPrint(a)); // [ 'a', 'b', 'd', 'e', 'c', 'f' ]

function dfs__recursive(root, result = []) {
  // if tree is empty
  if (root === null) return result;
  result.push(root.val);
  dfs__recursive(root.left, result);
  dfs__recursive(root.right, result);
  return result;
}
console.log(dfs__recursive(a)); // [ 'a', 'b', 'd', 'e', 'c', 'f' ]

// PRE-ORDER TRAVERSAL
// self, left, right
function dfs__preOrder(root, result = []) {
  // if tree is empty
  if (root === null) return result;
  result.push(root.val);
  dfs__preOrder(root.left, result);
  dfs__preOrder(root.right, result);
  return result;
}
console.log(dfs__preOrder(a)); // [ 'a', 'b', 'd', 'e', 'c', 'f' ]

// POST-ORDER TRAVERSAL
// left, right, self
function dfs__postOrder(root, result = []) {
  // if tree is empty
  if (root === null) return result;
  dfs__postOrder(root.left, result);
  dfs__postOrder(root.right, result);
  result.push(root.val);
  return result;
}
console.log(dfs__postOrder(a)); // [ 'd', 'e', 'b', 'f', 'c', 'a' ]

// IN-ORDER TRAVERSAL
// left, self, right
function dfs__inOrder(root, result = []) {
  // if tree is empty
  if (root === null) return result;
  dfs__inOrder(root.left, result);
  result.push(root.val);
  dfs__inOrder(root.right, result);
  return result;
}
console.log(dfs__inOrder(a));

// SUM TREE
a = new Node(3);
b = new Node(2);
c = new Node(7);
d = new Node(4);
e = new Node(-2);
f = new Node(5);

//      3
//     / \
//    2   7
//   / \   \
//  4  -2   5

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

function dfs__sumTree(root) {
  if (root === null) return 0;
  return dfs__sumTree(root.left) + root.val + dfs__sumTree(root.right);
}
console.log(dfs__sumTree(a)); // 19
