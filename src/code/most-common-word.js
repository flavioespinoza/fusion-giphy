let paragraph = 'Bob  hit a ball, the hit BALL flew far after it was hit.';
let banned = ['HIT', 'hit', 'hat', 'cat'];
// Output: "ball"

// paragraph = 'a, a, a, a, b,b,b,c, c';
// banned = ['a'];

function mostCommonWord(paragraph, banned) {
  const regex = /[\!\?\'\,\;\.\s]/;
  const words = paragraph
    .split(regex)
    .filter((item) => {
      return item !== '';
    })
    .map((word) => {
      return word.toLowerCase();
    });
  const excluded = banned.map((item) => {
    return item.toLowerCase();
  });
  const map = {};
  for (let i = 0; i < words.length; i++) {
    if (excluded.includes(words[i])) {
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
