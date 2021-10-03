"use strict";

function my_reverse(array) {
  var start = 0;
  var end = array.length - 1;

  while (start < end) {
    var temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
  }
} // Google_


function reverseWordsInString(string) {
  var words = [];
  var start = 0;

  for (var i = 0; i < string.length; i++) {
    var _char = string[i];
    var whitespace = string[start];

    if (_char === ' ') {
      words.push(string.slice(start, i)); // console.log(words)

      start = i;
    } else if (whitespace === ' ') {
      words.push(whitespace);
      start = i;
    }
  }

  words.push(string.slice(start));
  my_reverse(words);
  return words.join('');
}

var a = 'Google is the best!';
console.log(reverseWordsInString(a)); // best! the is Google

var b = 'Is there     whitespaces?';
console.log(reverseWordsInString(b)); // whitespaces?----there is

var c = "this      string     has a     lot of   whitespace";
console.log(reverseWordsInString(c)); // whitespaces?----there is