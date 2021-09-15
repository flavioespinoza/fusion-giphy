/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength = function (beginWord, endWord, wordList) {
    let len = 1;
    let queue = [beginWord];
    const available = Array.from(new Set([...wordList.join('')]));
    console.log(available)
    const dict = new Set(wordList);
    console.log(dict)
    const seen = new Set(queue);
    console.log(seen)
    while (queue.length) {
      const next = [];
      
      for (let v of queue) {
        if (v === endWord) {
          return len;
        }
        
        const arr = v.split('');
        console.log(arr)
        // ['h', 'o', 't']
        
        for (let i = 0; i < arr.length; i++) {
          for (let d = 0; d < available.length; d++) {
            arr[i] = available[d]; // 126 combinations vs 468 if you use the entire alphabet
        
            const nv = arr.join('');

            console.log(nv)

            
            if (!seen.has(nv) && dict.has(nv)) {
              next.push(nv);
              seen.add(nv);
            }
            arr[i] = v[i];
          }
        }
      }
      queue = next;
      len++;
    }
    return 0;
  };


  let beginWord = "hit"
  let endWord = "cog"
  let wordList = ["hot","dot","dog","lot","log","cog"]

  console.log(ladderLength(beginWord, endWord, wordList));