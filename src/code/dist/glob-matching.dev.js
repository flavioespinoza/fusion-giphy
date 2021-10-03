"use strict";

function globMatching(fileName, pattern) {
  var p1 = 0;
  var f1 = 0;

  while (f1 < fileName.length) {
    var pchar = pattern[p1];
    var fchar = fileName[f1];
    if (pchar !== fchar && pchar !== "*") return false;

    if (pchar === fchar) {
      console.log(pchar, fchar);
      p1++;
      f1++;
    }

    if (pchar !== fchar) {
      if (pattern[p1 - 1]) {}
    }
  }

  return true;
}

var pattern = 'a*efg';
var fileName = 'abcdefg';
console.log(globMatching(fileName, pattern));