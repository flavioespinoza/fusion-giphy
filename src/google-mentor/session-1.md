architecture > 2011 start coding (front end focus on JS, HTML/CSS) >> 9 YOE

fundamental knowledge:

- phone screen w GG 2 weeks ago

coding interview (DS, Algo)

1. problem solving: pick the right data structure & algo < ideal/optimal (running time + space complexity) < brute force

- big O complexity (bigocheatsheet.com)

2. implementation (coding skills): JS

- clean code, short + concise + easy to understand/ maintain

Data structures & Algo:

Arrays (excellent)

Matrixes and linked lists (problems)

Strings and Binary Search (good)

Heaps, (problem)
Sets, (excellent)
Maps, (excellent)
Stacks, (good)
Queues, (good)

Intervals (problem)

Trees (good)
Graph (good)

Recursion/Backtracking (good, but don't know where to use it or where NOT to use it)
Dynamic Programming (problem)
Greedy (problem)

Upcoming interviews: Sportify, Uber, Overview.ai
3 months

2 lists of companies

1. dont care about (not start up companies): standard itnerview => ds + algo
asana
snapchat
...
=> competing offers

2. target companies:

<https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/>

Given a string s, return the length of the longest substring that contains at most two distinct characters.

Example 1:

Input: s = "eceba"
Output: 3
Explanation: The substring is "ece" which its length is 3.

Example 2:

Input: s = "cc aabbb"
Input: s = "ccaa bbb"

Input: s = "ccaa bbbccc"
Output: 5
Explanation: The substring is "aabbb" which its length is 5.

// Strategy ------------
// set "longestSubString" = "";
// set "lastSeen" = {}

function longestSubString(string) {
  
}

Input: s = "eceba" => ece, eb, ba
              ^^^

Input: s = "eceba" => ece, eb, ba
            01234     0 2, 2,3 3,4

start = 0
end = 1

Arrays
problems to get exposed to the topics:
<https://www.interviewbit.com/problems/add-one-to-number/>
<https://www.interviewbit.com/problems/wave-array/>
<https://www.interviewbit.com/problems/hotel-bookings-possible/>
<https://www.interviewbit.com/problems/first-missing-integer/>
<https://www.interviewbit.com/problems/partition-list/>
<https://www.interviewbit.com/problems/remove-duplicates-from-sorted-list/>
<https://www.interviewbit.com/problems/merge-two-sorted-lists/>

Patterns problems:

Sliding window
<https://leetcode.com/problems/longest-substring-without-repeating-characters/>
<https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/>
<https://leetcode.com/problems/subarray-product-less-than-k/>

Closing window (2 pointers)
<https://leetcode.com/problems/3sum/>
<https://leetcode.com/problems/4sum/>
<https://leetcode.com/problems/trapping-rain-water>

Maximum sum subarray
<https://www.interviewbit.com/problems/flip/>
<https://www.interviewbit.com/problems/max-sum-contiguous-subarray/>

Sum subarray = k
<https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/>

Monotonic Queue
<https://leetcode.com/problems/next-greater-element-i/>
<https://leetcode.com/problems/largest-rectangle-in-histogram/>

Bucketing (aka Counting sort)
<https://leetcode.com/problems/top-k-frequent-words/>
