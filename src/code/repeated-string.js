/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
  let total = 0;
  let extra = 0;
  const size = s.length;
  const repeat = Math.floor(n / size); 
  const remainder = n % size;
  for(let i = 0; i < size; i++){
    if (s[i] === 'a') {
      total++;
      if (i < remainder) {
        console.log(i);
        extra++;
      }
    }
  }
  return (total * repeat) + extra;
}


let string = `abbabba`;
let number = 20;

console.log(repeatedString(string, number));

let expected = 8;