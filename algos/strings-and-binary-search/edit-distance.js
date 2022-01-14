const minDistance = function(word1, word2) {
  
  const memo = new Map();

  function run(w1, w2) {
    // check memoization
    if (memo.has(`${w1}-${w2}`)) {
      return memo.get(`${w1}-${w2}`);
    }

    if (w1 >= word1.length && w2 >= word2.length) {
      return 0;
    }

    // if it's a match
    if (word1[w1] === word2[w2]) {
      return run(w1 + 1, w2 + 1);
    }

    let insert = Infinity;
    let del = Infinity;
    let replace = Infinity;

    // insert
    if (w2 < word2.length) {
      insert = run(w1, w2 + 1);
    }

    // delete
    if (w1 < word1.length) {
      del = run(w1 + 1, w2)
    }

    // replace
    if (w1 < word1.length && w2 < word2.length) {
      replace = run(w1 + 1, w2 + 1);
    };

    // result
    const res = Math.min(insert, del, replace) + 1;

    // memoize result
    memo.set(`${w1}-${w2}`, res);

    // return result
    return res;
  }

  return run(0, 0);
};
