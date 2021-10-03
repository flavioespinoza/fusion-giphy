"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = balanced;

/**
 * Determine if a string is balanced.
 *
 * @param {string} s A string of open and closed parenthesis, square brackets, and curly brackets
 * @returns {boolean} True or false.
 *
 * @example
 * console.log(balanced('[()]{}{[()()]()}')); // true
 * console.log(balanced('[(()]{}{[()()]()}')); // false
 * console.log(balanced('[(])')); // false
 *
 * console.log(balanced('[*()999]{}{[(22)(--)]()8}')); // true
 * console.log(balanced('[*(()999]{}{[(22)(--)]()8}')); // false
 * console.log(balanced('[*(]999)')); // false
 * */
function balanced(string) {
  // stack - only opening brackets pushed onto. only pop off last item to compare
  // map - key opening brackets & values are closing brackets
  // set - set of opening brackets
  var stack = [];
  var map = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  var open = new Set('({[');
  var close = new Set(']})'); // for loop of string and compare the items
  // use sets to check if string[i] is an open or closed bracket

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = string[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _char = _step.value;

      // if open bracket
      if (open.has(_char)) {
        // push onto stack
        stack.push(_char);
      } // if close bracket


      if (close.has(_char)) {
        // pop item off of stack and use it as lookup key of map
        var key = stack.pop(); // if map[key] does not equal string[i] return false

        if (map[key] !== _char) {
          return false;
        }
      }
    } // if stack is empty return true else false

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return stack.length === 0;
}

console.log(balanced('[()]{}{[()()]()}')); // true

console.log(balanced('[(()]{}{[()()]()}')); // false

console.log(balanced('[(])')); // false

console.log(balanced('[*()999]{}{[(22)(--)]()8}')); // true

console.log(balanced('[*(()999]{}{[(22)(--)]()8}')); // false

console.log(balanced('[*(]999)')); // false

console.log(balanced('][')); // false

console.log(balanced('[]]')); // false
// 1) Create an empty stack and push -1 to it.
//    The first element of the stack is used
//    to provide a base for the next valid string.
// 2) Initialize result as 0.
// 3) If the character is '(' i.e. str[i] == '('),
//    push index[i] to the stack
// 4) Else (if the character is ')')
//    a) Pop an item from the stack (Most of the
//       time an opening bracket)
//    b) If the stack is not empty, then find the
//       length of current valid substring by taking
//       the difference between the current index and
//       top of the stack. If current length is more
//       than the result, then update the result.
//    c) If the stack is empty, push the current index
//       as a base for the next valid substring.
// 5) Return result.

function longestBalancedSubstring(string) {
  var n = string.length; // create stack

  var stack = []; // push -1 onto the stack as initial index

  stack.push(-1); // result is int

  var result = 0; // loop string for all chars

  for (var i = 0; i < n; i++) {
    // if string at i is opening bracket push onto stack
    if (string.charAt(i) === '(') {
      stack.push(i); // else closing bracket
    } else {
      if (stack.length !== 0) {
        stack.pop();
      } // check if current is longer than existing valid substring


      if (stack.length !== 0) {
        result = Math.max(result, i - stack[stack.length - 1]);
      } // else if stack is empty push current index as base
      // for the next valid substring
      else {
          stack.push(i);
        }
    }
  }

  return result;
} // Do not edit the line below.


exports.longestBalancedSubstring = longestBalancedSubstring;