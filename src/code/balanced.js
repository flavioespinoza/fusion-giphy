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
      if (map[stack.pop()] !== chars[i]) {
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
