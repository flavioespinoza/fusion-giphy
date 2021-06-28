function solution(s) {
  const stack = [];
  const chars = [];
  const map = {
    '(': ')',
    '{': '}',
    '[': ']',
  }
  const open = new Set('({[');
  const closed = new Set(')}]');
  const valid = new Set([...open, ...closed]);

  // array from string
  const split = s.split('');

  // push brackets onto chars array
  for (let i = 0; i < split.length; i++) {
    if (valid.has(split[i])) {
      chars.push(split[i]);
    }
  }

  // if chars.length is odd exit
  if (chars.length % 2 !== 0) return false;

  for (let i = 0; i < chars.length; i++) {
    // push open brackets onto stack
    if (open.has(chars[i])) {
      stack.push(chars[i]);
    } else {
      // compare chars at index i with last char pushed
      // onto stack using map
      if (map[stack.pop()] !== chars[i]) return false;
    }
  }

  // if balanced all chars pushed onto stack will be removed
  // therefore length of stack will be 0
  return stack.length === 0;
}

console.log(solution('(')); // false
console.log(solution(')')); // false
console.log(solution('()')); // true
console.log(solution('())')); // false
console.log(solution('([](){})()')); // true