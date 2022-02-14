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

// breadth first traversal

let expected = ['a', 'b', 'c', 'd', 'e', 'f'];

// que

function bfs__breadthFirstPrint(root) {
  const result = [];
  const que = [ root ];
  while (que.length > 0) {
    const current = que.shift();
    console.log(current.val);
    result.push(current.val);
    if (current.left !== null) {
      que.push(current.left);
    }
    if (current.right !== null) {
      que.push(current.right);
    }
  }
  return result;
}
console.log(bfs__breadthFirstPrint(a)); // ['a', 'b', 'c', 'd', 'e', 'f']


function bfs__hasPath(root, target) {
  const que = [ root ];
  while(que.length > 0) {
    const current = que.shift();
    if (current.val === target) {
      return true;
    }
    if (current.left !== null) {
      que.push(current.left);
    }
    if (current.right !== null) {
      que.push(current.right);
    }
  }
  return false;
}
console.log(bfs__hasPath(a, 'e')); // true
console.log(bfs__hasPath(a, 'z')); // false


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

function bfs_sumTree(root) {
  let sum = 0;
  const que = [ root ];
  while(que.length > 0) {
    const current = que.shift();
    sum += current.val;
    if (current.left !== null) {
      que.push(current.left);
    }
    if (current.right !== null) {
      que.push(current.right);
    }
  }
  return sum;
}
console.log(bfs_sumTree(a)); // 19