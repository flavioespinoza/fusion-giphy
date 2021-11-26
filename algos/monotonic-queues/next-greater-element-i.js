const nextGreaterElement = function(nums1, nums2) {
  const map = {};
  const stack = [];
  // for every n in nums2, fill the stack starting at n, 
  // and ending with (but not pushing) the first number in nums2 (after n) that is >= n (or > since all numbers are unique)
	// once a number is found that passes this condition, add it to a hashmap as a value, with its key being the top of the stack (aka a value found earlier in nums2)
  for (const n of nums2) {
    while (stack.length > 0 && stack[stack.length - 1] < n) {
      // map has "next largest element below it in nums2" as keys, 
      // and the "next greater elements" as the values
      map[stack.pop()] = n;
    }
    stack.push(n);
  }
  return nums1.map(n => map[n] || -1);
};