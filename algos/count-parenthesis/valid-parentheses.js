const isValid = function(s) {
  const stack = [];
  const map = {
    '{': '}',
    '[': ']',
    '(': ')', 
  }
  const open = new Set('{[(')  
  for (const char of s) {
    if (open.has(char)) {
      stack.push(char);
    } else {
      const key = stack.pop();
      if (map[key] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValid('()')); // true
console.log(isValid('[()]{}{[()()]()}')); // true
console.log(isValid('[(()]{}{[()()]()}')); // false
console.log(isValid('[(])')); // false
console.log(isValid(')(')); // false
console.log(isValid('[]]')); // false
