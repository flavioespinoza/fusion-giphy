class Node {
  constructor(value, child = Node) {
    this.value = value;
    this.child = child;
  }
}

function nth_from_last(head, n) {
  let left = head;
  let right = head;
  for (let i = 0; i < n; i++) {
    if (right === null) {
      return null;
    }
    right = right.child;
  }
  while(right) {
    right = right.child;
    left = left.child;
  }
  return left.value;
}

function linked_list_to_string(head) {
  let current = head;
  let list = [];
  while(current) {
    list.push(current.value.toString());
    current = current.child;
  }
  list.push('null');
  return list.join(' -> ')
}

let head = new Node(1, null);
for (let i = 2; i < 8; i++) {
  head = new Node(i, head);
}

console.log(linked_list_to_string(head)); 
// 7 -> 6 -> 5 -> 4 -> 3 -> 2 -> 1 -> null

let head2 = new Node(4, null);
let len = 3;
for (var i = len - 1; i >= 0; i--) {
  head2 = new Node(i + 1, head2);
}

console.log(linked_list_to_string(head2));
// 1 -> 2 -> 3 -> 4 -> null

console.log(nth_from_last(head, 1)); // should return 1.
console.log(nth_from_last(head, 5)); // should return 5.
console.log(nth_from_last(head2, 2)); // should return 3.
console.log(nth_from_last(head2, 4)); // should return 1.
console.log(nth_from_last(head2, 5)); // should return None.
console.log(nth_from_last(null, 1)); // should return None.