function isPalindrome(string) {
  // mas eleganté
  return string === string.split('').reverse().join('');
}

console.log(isPalindrome('abcdcba')); // true
console.log(isPalindrome('abcdefg')); // false

// Do not edit the line below.
exports.isPalindrome = isPalindrome;
