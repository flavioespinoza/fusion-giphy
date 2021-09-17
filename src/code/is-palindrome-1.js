// if odd find index of center char
// arr_1 is values to the left
// arr_2 is values to the right reversed
// check if arrays match
// if even find index of center - 1
// arr_1 is values to the left
// arr_2 is values to the right reversed

// check if arrays match
function isEven(n) {
  return n % 2 == 0;
}

function isPalindrome(string) {
 // brute force
 // time O(n) | space O(n)
 // check if length is 1
 if (string.length === 1) {
   return true;
 }
 // check if length is odd or even
 if (isEven(string.length)) {
   const mid = string.length / 2;
   const a_string = string.slice(0, mid);
   const b_string = string.replace(a_string, '');
   const r_string = b_string.split('').reverse().join('');
   if (a_string === r_string) {
     return true;
   }
 } else {
   const mid = Math.floor(string.length / 2);
   const a_string = string.slice(0, mid);
   const b_string = string.slice(mid + 1, string.length);
   const r_string = b_string.split('').reverse().join('');
   if (a_string === r_string) {
     return true;
   }
 }
 return false;
}

function isPalindrome(string) {
  // mas eleganté
	return string === string.split('').reverse().join('');;
}


