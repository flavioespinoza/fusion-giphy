/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(input) {
  let start = 0;
  let end = input.length - 1;
  while (start < end) {
    let s = input.charCodeAt(start);
    let e = input.charCodeAt(end);

    if (!isLetter(s)) {
      start++;
      continue;
    }
    if (!isLetter(e)) {
      end--;
      continue;
    }

    if (toLowerCase(s) !== toLowerCase(e)) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

const isLetter = function(code) {
  if (
    (code >= 48 && code <= 57) || // numbers
    (code >= 65 && code <= 90) || // uppercase
    (code >= 97 && code <= 122)
  ) {
    // lowercase
    return true;
  } else {
    return false;
  }
};

const toLowerCase = function(code) {
  if (code >= 65 && code <= 90) {
    return code + 32;
  } else {
    return code;
  }
};
