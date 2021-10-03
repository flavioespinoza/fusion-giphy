const equals = (a, b) => {
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) return false;
  return JSON.stringify(a) === JSON.stringify(b)
};

const a = { name: 'John', age: 26 };
const b = { name: 'John', age: 26 };

console.log(equals(a, b)); // should be true

const c = { name: 'John' };
const d = { name: 'John', age: undefined };

console.log(equals(c, d)); // should be false

const e = { name: 'John', weight: 185 };
const f = { name: 'John', age: 26 };

console.log(equals(e, f)); // should be false

const g = { name: 'John', age: [] };
const h = { name: 'John', age: 26 };

console.log(equals(e, f)); // should be false