function isOneAway(string1, string2) {
	if (string1.length === string2.length) {
		let differences = 0;
		for (let i = 0; i < string1.length; i++) {
			if (string1[i] !== string2[i]) {
				differences++;
			}
		}
		if (differences > 1) return false;
	} else {
    
  }
	return true;
}

console.log(isOneAway("abcde", "abcd"));  // should return True
console.log(isOneAway("abde", "abcde"));  // should return True
console.log(isOneAway("a", "a"));  // should return True
console.log(isOneAway("abcdef", "abqdef"));  // should return True
console.log(isOneAway("abcdef", "abccef"));  // should return True
console.log(isOneAway("abcdef", "abcde"));  // should return True
console.log(isOneAway("aaa", "abc"));  // should return False
console.log(isOneAway("abcde", "abc"));  // should return False
console.log(isOneAway("abc", "abcde"));  // should return False
console.log(isOneAway("abc", "bcc"));  // should return False
