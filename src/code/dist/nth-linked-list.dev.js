"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(value) {
  var child = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Node;

  _classCallCheck(this, Node);

  this.value = value;
  this.child = child;
};

function nth_from_last(head, n) {
  var left = head;
  var right = head;

  for (var _i = 0; _i < n; _i++) {
    if (right === null) {
      return null;
    }

    right = right.child;
  }

  while (right) {
    right = right.child;
    left = left.child;
  }

  return left.value;
}

function linked_list_to_string(head) {
  var current = head;
  var list = [];

  while (current) {
    list.push(current.value.toString());
    current = current.child;
  }

  list.push('null');
  return list.join(' -> ');
}

var head = new Node(1, null);

for (var _i2 = 2; _i2 < 8; _i2++) {
  head = new Node(_i2, head);
}

console.log(linked_list_to_string(head)); // 7 -> 6 -> 5 -> 4 -> 3 -> 2 -> 1 -> null

var head2 = new Node(4, null);
var len = 3;

for (var i = len - 1; i >= 0; i--) {
  head2 = new Node(i + 1, head2);
}

console.log(linked_list_to_string(head2)); // 1 -> 2 -> 3 -> 4 -> null

console.log(nth_from_last(head, 1)); // should return 1.

console.log(nth_from_last(head, 5)); // should return 5.

console.log(nth_from_last(head2, 2)); // should return 3.

console.log(nth_from_last(head2, 4)); // should return 1.

console.log(nth_from_last(head2, 5)); // should return None.

console.log(nth_from_last(null, 1)); // should return None.