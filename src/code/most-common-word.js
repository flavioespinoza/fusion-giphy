const paragraph = 'Bob hit a ball, the hit BALL flew far after it was hit.';
const banned = ['hit'];
// Output: "ball"

// const paragraph = 'a, a, a, a, b,b,b,c, c';
// const banned = ['a'];

function mostCommonWord(paragraph, banned) {
  const remove = paragraph.split(/[\!\?\'\,\;\.\s]/);
  const words = [];
  for (let i = 0; i < remove.length; i++) {
    if (remove[i] !== '') {
      words.push(remove[i].toLowerCase());
    }
  }
  const excluded = [];
  for (let i = 0; i < banned.length; i++) {
    excluded.push(banned[i].toLowerCase());
  }
  const set = new Set([...excluded]);
  const map = {};
  for (let i = 0; i < words.length; i++) {
    if (set.has(words[i].toLowerCase())) {
      // do nothing
    } else if (map[words[i]]) {
      map[words[i]] = map[words[i]] + 1;
    } else {
      map[words[i]] = 1;
    }
  }
  const sorted = Object.keys(map).sort((a, b) => {
    return map[b] - map[a];
  });
  return sorted[0];
}

console.log(mostCommonWord(paragraph, banned));
