let beginWord = 'hit';
let endWord = 'cog';
let wordList = ['hot', 'dot', 'dog', 'cot', 'log', 'cog'];

console.log(wordLadder(beginWord, endWord, wordList));


// Time Complexity: O(M^2 × N), where M is the length of each word and N is the total number of words in the input word list.
function wordLadder(beginWord, endWord, wordList) {
  let len = 1;
  
  let queue = [beginWord]; // [ 'hit' ], [ 'hot' ], [ 'dot', 'cot' ], [ 'dot', 'cot' ], [ 'dog', 'cog' ]
  
  const available = Array.from(new Set([...wordList.join('')]));  // [ 'h', 'o', 't', 'd', 'g', 'l', 'c' ]
  
  const dict = new Set(wordList);  // Set { 'hot', 'dot', 'dog', 'cot', 'log', 'cog' }
  
  const seen = new Set(queue);  // Set { hit }
  
  while (queue.length) {
    const next = [];

    for (let word of queue) {
      if (word === endWord) { // cog
        return len;
      }

      const arr = word.split(''); // ['h', 'i', 't'], ['h', 'o', 't'], etc...
      
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
    // Set { 'hit', 'hot', 'dot', 'cot' }
    // Set { 'hit', 'hot', 'dot', 'cot', 'dog', 'log' }
    // Set { 'hit', 'hot', 'dot', 'cot', 'dog', 'log', 'cog' }

    queue = next;

    

    len++;
  }
  return 0;
};
