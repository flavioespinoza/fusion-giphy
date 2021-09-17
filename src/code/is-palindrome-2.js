function isPalindrome(string) {
  // mas eleganté
	return string === string.split('').reverse().join('');;
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome;