let beginWord = 'hit';
let endWord = 'cog';
let wordList = ['hot', 'dot', 'dog', 'lot', 'log', 'cog'];

console.log(wordLadder(beginWord, endWord, wordList));

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
function wordLadder(beginWord, endWord, wordList) {
  let len = 1;
  
  let queue = [beginWord];
  
  const available = Array.from(new Set([...wordList.join('')]));  // [ 'h', 'o', 't', 'd', 'g', 'l', 'c' ]
  
  const dict = new Set(wordList);  // Set { 'hot', 'dot', 'dog', 'lot', 'log', 'cog' }
  
  const seen = new Set(queue);  // Set { hit }
  
  while (queue.length) {
    const next = [];
    console.log(queue); // [ 'hit' ], [ 'hot' ], [ 'dot', 'lot' ], [ 'dog', 'log' ], [ 'cog' ]
    for (let word of queue) {
      if (word === endWord) {
        return len;
      }

      const arr = word.split('');
      console.log(arr);
      // ['h', 'o', 't']

      for (let i = 0; i < arr.length; i++) {
        for (let d = 0; d < available.length; d++) {
          arr[i] = available[d]; // 126 combinations vs 468 if you use the entire alphabet
          
          const nv = arr.join('');
          console.log(nv); // hit, oit, tit, dit

          if (!seen.has(nv) && dict.has(nv)) {
            next.push(nv);
            seen.add(nv);
          }
          arr[i] = word[i];
        }
      }
    }

    console.log(seen); 
    // Set { 'hit', 'hot' }
    // Set { 'hit', 'hot', 'dot' }
    // Set { 'hit', 'hot', 'dot', 'lot' }
    // Set { 'hit', 'hot', 'dot', 'lot', 'dog', 'log' }
    // Set { 'hit', 'hot', 'dot', 'lot', 'dog', 'log', 'cog' }

    queue = next;

    

    len++;
  }
  return 0;
};
