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

export default function balanced(s) {
  if (typeof s !== 'string') throw new Error('1st argument must be a string');
  const stack = [];
  const chars = [];
  const map = {
    '{': '}',
    '[': ']',
    '(': ')',
  };
  const open = new Set('([{');
  const closed = new Set('}])');
  const valid = new Set([...open, ...closed]);

  // Push only valid characters on to the chars array.
  for (let i = 0; i < s.length; i++) {
    if (valid.has(s[i])) {
      chars.push(s[i]);
    }
  }

  // If the length of the chars array is not an even number return false.
  if (chars.length % 2 !== 0) return false;

  // Iterate through the chars array
  for (let i = 0; i < chars.length; i++) {
    // If the character at index of i is part of the open set push it onto the stack.
    if (open.has(chars[i])) {
      stack.push(chars[i]);
    } else {
      // If the last item to be added to the stack does not deep-equal 
      // the character at index of i return false.
      const last = stack.pop()
      if (map[last] !== chars[i]) {
        return false;
      }
    }
  }

  // If the string is balanced then all characters pushed onto the stack will be removed.
  // Hence, the length of the stack will be 0.
  // If length of stack deep-equals 0 return true.
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
  let n = string.length;
	// create stack 
	const stack = [];
	// push -1 onto the stack as initial index
	stack.push(-1);
	
	// result is int
	let result = 0;
	
	// loop string for all chars
	for (let i = 0; i < n; i++) {
		// if string at i is opening bracket push onto stack
		if (string.charAt(i) === '(') {
      stack.push(i);      
      // else closing bracket
		} else {	
			if (stack.length !== 0) {
				stack.pop();
      }
      
			// check if current is longer than existing valid substring
			if (stack.length !== 0) {
				result = Math.max(result, i - stack[stack.length - 1])
			}
			// else if stack is empty push current index as base
			// for the next valid substring
			else {
				stack.push(i)
			}
		}
	}
	
	return result;
}

// Do not edit the line below.
exports.longestBalancedSubstring = longestBalancedSubstring;
