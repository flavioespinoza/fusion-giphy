function isPalindrome(string) {
  // 2 pointers
	let left = 0;
	let right = string.length - 1;
	while (left < right) {
		let s_left = string[left];
		let s_right = string[right];
		if (s_left !== s_right) {
			console.log('FAIL');
			console.log('s_left', s_left);
			console.log('s_right', s_right);
			return false;
		} else {
      // do nothing
      // iterate and check again
			console.log('WIN');
			console.log('r_left', s_left);
			console.log('r_right', s_right);
		}
		left++;
		right--;
	}
	return true;
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome;
