/*
A binary lock has N binary switches. The lock can be opened by flipping all switches to the “open” pattern. WARNING: only some switch patterns are safe. Any other pattern will cause the lock to be permanently locked.

Your task is to write a function that will accept a lock description: the current state of the switches, the safe patterns and the “open” pattern. Your function should return true if it’s possible to open the lock, and false otherwise. Time matters, so your function should be as fast as possible.
*/

Current pattern: 010
Open pattern:    111
Safe patterns:   000 001 010 101 111
Answer: true
010 -> 000 -> 001 -> 101 -> 111


011 -> 000 -> 001 -> 101 -> 110

hit hot cot cog


argument {
  current: 010,
  current: hit,
  safe: [ 000 -> 001 -> 101 -> 110 -> 111 ],
  safe: [ hot, dot, dog, log, cog ]
  open: 111
}

{
  start: 010,
  safeList: [ 000, 001, 101, 110, 111 ], set ?,
  target: 111,
}




// Breadth-first search
// 1. que = [['010', 0]]

// ---- sudo code: spitballing ----
for (const [current, count] of que)
  if (current === target) return count;
  if (dead.has(current)) continue;
  for (const next of getNextState(current) 
    if (seen.has(next)) contunue
    seen.add(next);
    que.push([next, count + 1)

return -1;

// 1.1 set called dead_ends 
// 2. Set called seen. tracks if safe[i] has seen before new
// 3. while que is not empty
// 4. check if safe[i] has been seen


start then move to adj combinations
start up 010 => 011 and check good
start down 001 or 110



function open(start, safeList, target) {
  const que = [ start ];
  const availble = new Array.from(new Set([...safeList.join('')])); // [ '0', '1' ];
  const dict = new Set(safeList); // Set { 000, 001, 101, 110, 111 }
  const seen = new Set(que); // Set { '010' }
  
  while (que.length > 0) {
    const next = [];
    
    // check if current === target
    for (const word of que) {
      if (word === target) return true;
      const arr = word.split('');
      for (let i = 0; i < arr.lenght; i++) {
        for (let d = 0; d < available.lenght; d++) {
          arr[i] = available[d];
          const nv = arr.join('');
          if (!seen.has(nv) && dict.has(nv) {
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


function getSortedIndex(array, value) {
  let low = 0;
  let high = array.length;
  while (low < high) {
    let mid = (low + high) >>> 1;
    if (array[mid] < value) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
}

Elements of Programming Interviews