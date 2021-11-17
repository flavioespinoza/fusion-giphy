/**
 * @param {string} s
 * @return {string[]}
 */
const removeInvalidParentheses = function(s) {
  /**
        Concept:
            -- Since we have to remove minimum number of invalid parentheses, 
               the problem can be looked at as considering every invalid string and trying to remove a parentheses at each
               position and trying to see if all those strings are valid. This can be thought as similar to BFS.
            -- Every time an invalid string is present, we repeat the above process.
            -- If a valid string is found, that's the string with minimum removes. We should be looking
               for more such valid strings in our que, but not creating substrings anymore.
        
        Approach:
            -- Push input string on a que and also mark it as seen, so we don't look at it again.
            -- For each string removed from que front, check if it is a valid string.
               -- If valid, keep looking for other valid strings in the que.
               -- If invalid and a valid string is already found, don't do anything.
               -- If invalid and no valid string is found, do the following:
                  -- For each character of the string, create a substring with all characters but that.
                  -- If the substring is not seen before, add it to seen and push to que
    */

  // Time Complexity: O(2^N) since each one of N characters can be included in string or not.
  // Space Complexity: O(N^2) since there is worst case N recursion depth, with O(N) space to store string at each level

  if (!s || s.length === 0) return [''];

  const result = [];
  const que = [];
  const seen = new Set();
  let validFound = false;
  
  que.push(s);
  seen.add(s);

  while (que.length > 0) {
    let current = que.shift();

    // if current is valid
    if (isValid(current)) {
      result.push(current); // Push to result
      validFound = true;
    }

    if (validFound) continue; // If at least one valid string found, don't do anything

    for (let i = 0; i < current.length; i++) {
      if (current[i] !== '(' && current[i] !== ')') {
        continue; // If current's i-th character is anything but one of ( or ), continue
      }

      // calculate next string for consideration
      // characters 0 to i-th (not including) + Characters (i + 1)th (including) to end
      let next = current.substring(0, i) + current.substring(i + 1);
      if (!seen.has(next)) {
        seen.add(next);
        que.push(next);
      }
    }
  }
  return result;
};


function isValid(s) {
  let open = 0;
  for (const c of s) {
    if (c === '(') {
      open++;
    } else if (c === ')') {
      if (open === 0) {
        return false;
      }
      open--;
    }
  }
  return open === 0;
}
