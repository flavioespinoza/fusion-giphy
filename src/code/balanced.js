
/**
 * Determine if a string is balanced.
 * 
 * @param {string} str A string of open and closed parenthesis, square brackets, and curly brackets
 * @returns {boolean} True or false.
 * 
 * @example
 * console.log(balanced('[()]{}{[()()]()}')); // true
 * console.log(balanced('[(()]{}{[()()]()}')); // false
 * console.log(balanced('[(])')); // false
 * 
 * console.log(balanced('[*()999]{}{[(22)(--)]()8}')); // true
 * console.log(balanced('[*(()999]{}{[(22)(--)]()8}')); // false
 * console.log(balanced('[(])')); // false
 * */

export default function balanced(str) {
  if (typeof str !== 'string') throw new Error('1st argument must be a string');
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

  // Create an array of characters from the 1st argument.
  const split = str.split('');

  // Push only valid characters on to the chars array.
  for (let i = 0; i < split.length; i++) {
    if (valid.has(split[i])) {
      chars.push(split[i]);
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
      // If the last item to be added to the stack does not equal the character at index of i return false.
      if (map[stack.pop()] !== chars[i]) {
        return false;
      }
    }
  }

  // If the string is balanced then all characters pushed onto the stack will be removed.
  // This will result in the length of the stack to equal 0, hence true, else false
  return stack.length === 0;
}
