function my_reverse(array) {
	let start = 0;
	let end = array.length - 1;
	while(start < end) {
		const temp = array[start];
		array[start] = array[end];
		array[end] = temp;
		start++;
		end--;
	}
}

// Google_
function reverseWordsInString(string) {
	const words = [];
	let start = 0;
	for (let i = 0; i < string.length; i++) {
    const char = string[i];
    const whitespace = string[start];
		if (char === ' ') {
      words.push(string.slice(start, i));
      // console.log(words)
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

let a = 'Google is the best!';
console.log(reverseWordsInString(a));
// best! the is Google

let b = 'Is there     whitespace?';
console.log(reverseWordsInString(b))
// whitespace?    there is


let c = "this      string     has a     lot of   whitespace";
console.log(reverseWordsInString(c));
// whitespace   of lot     a has     string      this 
