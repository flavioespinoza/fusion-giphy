let ssn = '111-55-8888';
console.log(ssn.slice(-4)); // 8888

function splitString(str, separator) {
  let low = 0;
  let high;
  let res = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === separator) {
      if (low > 0) {
        ++low;
      }
      high = i;
      let slice = str.slice(low, high);
      res.push(slice);
      low = high;
    }
  }
  high = str.length;
  res.push(str.slice(++low, high));
  return res;
}

const str = 'The quick brown fox jumps over the lazy dog.';

console.log(splitString(str, ' '));
const output = [
  'The',
  'quick',
  'brown',
  'fox',
  'jumps',
  'over',
  'the',
  'lazy',
  'dog.',
];
