"use strict";

var paragraph = 'Bob  hit a ball, the hit BALL flew far after it was hit.';
var banned = ['HIT', 'hit', 'hat', 'cat']; // Output: "ball"
// paragraph = 'a, a, a, a, b,b,b,c, c';
// banned = ['a'];

function mostCommonWord(paragraph, banned) {
  var regex = /[\!\?\'\,\;\.\s]/;
  var words = paragraph.split(regex).filter(function (item) {
    return item !== '';
  }).map(function (word) {
    return word.toLowerCase();
  });
  var excluded = banned.map(function (item) {
    return item.toLowerCase();
  });
  var map = {};

  for (var i = 0; i < words.length; i++) {
    if (excluded.includes(words[i])) {// do nothing
    } else if (map[words[i]]) {
      map[words[i]] = map[words[i]] + 1;
    } else {
      map[words[i]] = 1;
    }
  }

  var sorted = Object.keys(map).sort(function (a, b) {
    return map[b] - map[a];
  });
  return sorted[0];
}

console.log(mostCommonWord(paragraph, banned));