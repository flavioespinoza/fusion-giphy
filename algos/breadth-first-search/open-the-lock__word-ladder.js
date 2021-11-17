function openTheLock_1(start, target, safeList) {
  let len = 1;
  let que = [start];
  const availble = Array.from(new Set([...safeList.join('')])); // [ '0', '1' ];
  const dict = new Set(safeList); // Set { 000, 001, 101, 110, 111 }
  const seen = new Set(que); // Set { '010' }
  while (que.length > 0) {
    const next = [];
    for (const word of que) {
      console.log(que);
      if (word === target) {
        console.log('len', len);
        return true;
      }
      const arr = word.split('');
      for (let i = 0; i < arr.length; i++) {
        for (let d = 0; d < availble.length; d++) {
          arr[i] = availble[d];
          const nv = arr.join('');
          if (!seen.has(nv) && dict.has(nv)) {
            next.push(nv);
            seen.add(nv);
          }
        }
        arr[i] = word[i];
      }
    }
    que = next;
    len++;
  }
  return false;
}

function openTheLock(start, target, safeList) {
  let len = 1;
  let que = [start];
  const availble = Array.from(new Set([...safeList.join('')])); // [ '0', '1' ];
  const dict = new Set(safeList); // Set { 000, 001, 101, 110, 111 }
  const seen = new Set(que); // Set { '010' }
  while (que.length > 0) {
    const next = [];
    for (let q = 0; q < que.length; q++) {
      let word = que[q];
      if (word === target) {
        console.log('len', len);
        return true;
      }
      const arr = word.split('');
      for (let i = 0; i < arr.length; i++) {
        for (let d = 0; d < availble.length; d++) {
          arr[i] = availble[d];
          const nv = arr.join('');
          if (!seen.has(nv) && dict.has(nv)) {
            next.push(nv);
            seen.add(nv);
          }
        }
        arr[i] = word[i];
      }
    }
    que = next;
    len++;
  }
  return false;
}


let start;
let target;
let list;

start = '010';
target = '111';
list = ['000', '001', '101', '111'];
console.log(openTheLock(start, target, list)); // true | 5 | 010 -> 000 -> 001 -> 101 -> 111

start = '010';
target = '111';
list = ['000', '001', '101', '110', '111'];
console.log(openTheLock(start, target, list)); // true | 3 | 010 -> 110 -> 111

start = '011';
target = '111';
list = ['000', '001', '101', '110', '111'];
console.log(openTheLock(start, target, list)); // true | 2 | 011 -> 111

let beginWord = 'hit';
let endWord = 'cog';
let wordList = ['hot', 'dot', 'dog', 'lot', 'log', 'cog'];
console.log(openTheLock(beginWord, endWord, wordList)); // true | 5 | hit -> hot -> dot -> dog -> cog

beginWord = 'hit';
endWord = 'cog';
wordList = ['hot', 'dot', 'dog', 'lot', 'cot', 'log', 'cog'];
console.log(openTheLock(beginWord, endWord, wordList)); // true | 4 | hit -> hot -> cot -> cog
