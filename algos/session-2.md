https://github.com/flavioespinoza/fusion-giphy/tree/master/algos

Arrays
problems to get exposed to the topics:

- https://www.interviewbit.com/problems/add-one-to-number/
- https://www.interviewbit.com/problems/wave-array/

* https://www.interviewbit.com/problems/hotel-bookings-possible/
  // O(n \* log(n))
  // O(n)

* https://www.interviewbit.com/problems/first-missing-integer/

Linked List

- https://www.interviewbit.com/problems/partition-list/
- https://www.interviewbit.com/problems/remove-duplicates-from-sorted-list/
- https://www.interviewbit.com/problems/merge-two-sorted-lists/

Patterns problems:

## Sliding window

How to recognize the pattern: Any subarray/substring problem where there’s a constraint (e.g. no repeating characters, product less than k, etc.) might be solvable with Sliding Window.

**Key Point**: In order to use Sliding Window, we just need to keep track of whether we currently meet the constraint.

### Template

```js
slidingWindow(string) {
  // Define variables to keep track of the constraint and the final result.

  // Main routine
  for (let left = 0, right = 0; j < string.length(); right++) {
    // Keep track of the constraint as we open the window to the right.

    // Inner while loop to close the window from the left once we’ve violated the constraint

    // Compute the result
  }
  // return result
}
```

- https://leetcode.com/problems/longest-substring-without-repeating-characters/


```js
const lengthOfLongestSubstring = function(s) {
  const map = {};
  let l = 0;
  return s.split('').reduce((p, v, c) => {
    if (map[v] >= l) l = map[v] + 1;
    map[v] = c;
    const u = c - l + 1;
    return Math.max(u, p);
  }, 0);
};
```

```js
function lengthOfLongestSubstring(s) {
  // ASCII: 128 characters | Constant Space O(1)
  const counts = new Array(128).fill(0);
  let max = 0;
  for (let left = 0, right = 0; right < s.length; right++) {
    counts[s.charCodeAt(right)]++;
    while (counts[s.charCodeAt(right)] > 1) {
      counts[s.charCodeAt(left)]--;
      left++;
    }
    max = Math.max(max, right - left + 1);
  }
  return max;
}
```

https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/

```js
function lengthOfLongestSubstringTwoDistinct(s) {
  // ASCII: 128 characters | Constant Space O(1)
  const counts = new Array(128).fill(0);
  let max = 0;
  let distinct = 0;
  for (let left = 0, right = 0; right < s.length; right++) {
    if (counts[s.charCodeAt(right)] === 0) {
      distinct++;
    }
    counts[s.charCodeAt(right)]++;
    while (distinct > 2) {
      counts[s.charCodeAt(left)]--;
      if (counts[s.charCodeAt(left)] === 0) {
        distinct--;
      }
      left++;
    }
    max = Math.max(max, right - left + 1);
  }
  return max;
}
```

Given a string s, return the length of the longest substring that contains at most two distinct characters.

Example 1:

Input: s = "eceba"
^
Output: 3
Explanation: The substring is "ece" which its length is 3.
Example 2:

Input: s = "ccaabbb"
Output: 5
Explanation: The substring is "aabbb" which its length is 5.

const lengthOfLongestSubstring = function(s) {
const map = {}; => O(n)
let left = 0; // left
return s.split('').reduce((p, v, c) => {
// left=0
// p=1, v="e" c=2
// p-prevIndex, v:value, c:currentIndex
if (map[v] >= left) left = map[v] + 1;
map[v] = c;
const u = c - left + 1;
return Math.max(u, p);
}, 0);
};

https://leetcode.com/problems/subarray-product-less-than-k/

Closing window (2 pointers)

How to recognize the pattern: Any subarray/substring problem with condition based-on sum or some attribute that can be converted to sum (e.g. equal number of 0s and 1s)
Key Point: In order to use Prefix Sum, we just need to know how to convert the attribute to sum.

- https://leetcode.com/problems/3sum/
- https://leetcode.com/problems/4sum/
- https://leetcode.com/problems/trapping-rain-water

```js
prefixSum() {
  // Define prefix sum hashmap with key = sum and value = end index

  // Main routine
  for (let j = 0; j < nums.length; j++) {
    // Calculate the current prefix sum

    // Use previous prefix sums to compute index i

    // Update prefix sum map
  }
}
```

Maximum sum subarray

https://www.interviewbit.com/problems/flip/
https://www.interviewbit.com/problems/max-sum-contiguous-subarray/

```js
function maxSubArray(A) {
  let prev = 0;
  let max = A[0];

  for (let i = 0; i < A.length; i++) {
    prev = Math.max(prev + A[i], A[i]);
    max = Math.max(max, prev);
  }
  return max;
}

let input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(input)); // 6
```

Sum subarray = k
https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/

```java
class Solution {
    public int maxSubArrayLen(int[] nums, int k) {
        int sum = 0, max = 0;
        HashMap < Integer, Integer > map = new HashMap < Integer, Integer > ();
        for (int i = 0; i < nums.length; i++) {
            sum = sum + nums[i];
            if (sum == k) max = i + 1;
            else if (map.containsKey(sum - k)) max = Math.max(max, i - map.get(sum - k));
            if (!map.containsKey(sum)) map.put(sum, i);
        }
        return max;
    }
}
```

Monotonic Queue and Monotonic Stack
https://leetcode.com/problems/next-greater-element-i/

The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

Example 1:

Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation: The next greater element for each value of nums1 is as follows:

- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.

Stack<Integer> stack = 3,4,-1,-1
Map<Integer, Integer> hm

```java
class Solution {
    public int[] nextGreaterElement(int[] nums1, int[] nums2) {
        int[] res = new int[nums1.length];

        Map < Integer, Integer > hm = new HashMap < > ();
        Stack < Integer > s = new Stack < > ();
        for (int i: nums2) {
            while (!s.isEmpty() && s.peek() < i) {
                hm.put(s.pop(), i);
            }
            s.push(i);
        }

        for (int i = 0; i < nums1.length; i++) {
            res[i] = hm.getOrDefault(nums1[i], -1);
        }
        return res;
    }
}
```

```js
monotonicStack(nums) {
  // Define stack
  const stack = [];
  // Main routine
  for (let i = 0; i < nums.length; i++) {
    // Check against top of the stack and repeated pop smaller items
    let peek = stack[stack.length - 1];
    if (stack.length > 0 && peek )

    // Compute the results while popping items or after we’re done popping.
  }
}
```

https://leetcode.com/problems/largest-rectangle-in-histogram/

Bucketing (aka Counting sort)

- https://leetcode.com/problems/top-k-frequent-words/ \*

```js
function topKFrequent(words, k) {
  // create hash map to track counts
  const map = {};
  for (const word of words) {
    if (!(word in map)) {
      map[word] = 1;
    } else {
      map[word]++;
    }
  }
  // create an array of keys
  const keys = Object.keys(map);
  // sort keys using count difference or keyA locale-compare keyB
  keys.sort((keyA, keyB) => {
    const diff = map[keyB] - map[keyA];
    if (diff === 0) return keyA.localeCompare(keyB);
    else return diff;
  });
  // return results array
  return keys.slice(0, k);
}
```

https://www.bigocheatsheet.com/

Strings & Binary Search
~Problems to get exposed to the topics:
https://leetcode.com/problems/binary-search/
https://www.interviewbit.com/problems/sorted-insert-position/
https://www.interviewbit.com/problems/search-for-a-range/
https://www.interviewbit.com/problems/square-root-of-integer/
https://www.interviewbit.com/problems/palindrome-string/
https://www.interviewbit.com/problems/longest-common-prefix/
https://www.interviewbit.com/problems/reverse-the-string/
https://www.interviewbit.com/problems/roman-to-integer/
https://www.interviewbit.com/problems/add-binary-strings/
https://www.interviewbit.com/problems/zigzag-string/

Pattern problems
Trie
https://leetcode.com/problems/implement-trie-prefix-tree/
https://www.interviewbit.com/problems/hotel-reviews/
https://www.interviewbit.com/problems/shortest-unique-prefix/

Count Parentheses
https://leetcode.com/problems/valid-parentheses/
https://leetcode.com/problems/remove-invalid-parentheses/

Binary search - K Closest elements
https://leetcode.com/problems/find-k-closest-elements/

Binary search with non-exact conditions
https://leetcode.com/problems/peak-index-in-a-mountain-array/
https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/

Guess by binary search
https://www.interviewbit.com/problems/allocate-books/
