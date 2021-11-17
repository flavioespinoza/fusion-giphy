function openTheLock(start, target, safeList) {
  let que = [ start ];
  const availble = Array.from(new Set([...safeList.join('')])); // [ '0', '1' ];
  const dict = new Set(safeList); // Set { 000, 001, 101, 110, 111 }
  const seen = new Set(que); // Set { '010' }
  while (que.length > 0) {
    const next = [];
    for (const word of que) {
      if (word === target) return true;
      const arr = word.split('');
      for (let i = 0; i < arr.length; i++) {
        for (let d = 0; d < availble.length; d++) {
          arr[i] = availble[d];
          const nv = arr.join('');
          if (!seen.has(nv) && dict.has(nv)) {
            next.push(nv);
            seen.add(nv)
          }
        }
        arr[i] = word[i];
      }
    }
    que = next;
  }
  return false;
}

let start;
let target;
let list;

start = '010';
target = '111'; 
list = ['000', '001','101', '110', '111'];
console.log(openTheLock(start, target, list)); // true

start = 'bbb';
target = '111';
list = ['000', '001', '101', '110', '111'];
console.log(openTheLock(start, target, list)); // false
