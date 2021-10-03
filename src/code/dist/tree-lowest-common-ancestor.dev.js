"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(value) {
  var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var right = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  _classCallCheck(this, Node);

  this.value = value;
  this.left = left;
  this.right = right;
};

function create_tree(mapping, head_value) {
  var head = new Node(head_value);

  var nodes = _defineProperty({}, head_value, head);

  for (var _i = 0, _Object$entries = Object.entries(mapping); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    nodes[value[0]] = new Node(value[0]);
    nodes[value[1]] = new Node(value[1]);
  }

  for (var _i2 = 0, _Object$entries2 = Object.entries(mapping); _i2 < _Object$entries2.length; _i2++) {
    var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
        _key = _Object$entries2$_i[0],
        _value = _Object$entries2$_i[1];

    nodes[_key].left = nodes[_value[0]];
    nodes[_key].right = nodes[_value[1]];
  }

  return head;
}

function path_to_x(root, x) {
  var res = [];
  if (!root) return null;

  if (root.value === x) {
    res.push(root.value);
    return res;
  }

  res = path_to_x(root.left, x);

  if (res) {
    res.push(root.value);
    return res;
  }

  res = path_to_x(root.right, x);

  if (res) {
    res.push(root.value);
    return res;
  }

  return null;
}

function lca(root, j, k) {
  var path_to_j = path_to_x(root, j);
  var path_to_k = path_to_x(root, k);
  if (!path_to_j || !path_to_k) return null;
  var res = null;

  while (path_to_j.length && path_to_k.length) {
    var j_pop = path_to_j.pop();
    var k_pop = path_to_k.pop();

    if (j_pop === k_pop) {
      res = j_pop;
    } else {
      break;
    }
  }

  return res;
}

var mapping1 = {
  0: [1, 2],
  1: [3, 4],
  2: [5, 6]
};
var head1 = create_tree(mapping1, 0); // This tree is:
// head1 = 0
//        / \
//       1   2
//      /\   /\
//     3  4 5  6

var mapping2 = {
  5: [1, 4],
  1: [3, 8],
  4: [9, 2],
  3: [6, 7]
};
var head2 = create_tree(mapping2, 5); // This tree is:
//  head2 = 5
//        /   \
//       1     4
//      /\    / \
//     3  8  9  2
//    /\
//   6  7

console.log(lca(head1, 1, 5)); // should return 0

console.log(lca(head1, 3, 1)); // should return 1

console.log(lca(head1, 1, 4)); // should return 1

console.log(lca(head1, 0, 5)); // should return 0

console.log(lca(head2, 4, 7)); // should return 5

console.log(lca(head2, 3, 3)); // should return 3

console.log(lca(head2, 8, 7)); // should return 1

console.log(lca(head2, 3, 0)); // should return null