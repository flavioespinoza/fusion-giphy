# Flavio's Background Info

architecture > 2011 start coding (front end focus on JS, HTML/CSS) >> 9 YOE

## Fundamental Knowledge Required

- phone screen w GG 2 weeks ago

coding interview (DS, Algo)

### 1. Problem solving

- pick the right data structure & algo (running time + space complexity)
- ideal/optimal **`>`** brute force

- big O complexity: [cheat sheet](https://bigocheatsheet.com)

### 2. Implementation (coding skills)

- clean code, short **`+`** concise **`+`** easy to understand and maintain

## Data structures & Algo

Arrays (excellent)
Sets  (excellent)
Maps  (excellent)

Stacks  (good)
Queues  (good)

Trees (ok)
Graph (ok)

Strings and Binary Search (problem)
Matrixes and Linked Lists (problem)
Intervals (problem)
Heaps (problem)

Recursion/Backtracking (good, but don't know where to use it or where NOT to use it)
Dynamic Programming (problem)
Greedy (problem)

## Interview Strategy

Planed approach to prepare for Google or FANG interview

### Past interviews

- Spotify
- Uber
- Overview.ai

### Preparation Schedule

- **`3`** months of study and preparation

#### Lists of companies

**Don't care about**:

Non start-up companies: standard interview => ds + algo

- Asana
- Snapchat
- ...etc

**`IMPORTANT`**: Helps when negotiating competing offers

**Target companies**:

- Google

## Practice Problems

### Longest Substring

<https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/>

Given a string **`s`**, return the **`length`**:`number` of the `longest substring`

- Distinct characters **`<=`** 2.

**Example 1**:

Input: `s` = `"eceba"`

Output: `3`

Explanation: The substring is "ece" which its length is 3.

**Example 2**:

Input: s = "cc aabbb"
Input: s = "ccaa bbb"

Input: s = "ccaa bbbccc"
Output: 5
Explanation: The substring is "aabbb" which its length is 5.

#### Manual Solution

Illustration of thought process

```shell
Input: s = "eceba" => ece, eb, ba
              ^^^

Input: s = "eceba" => ece, eb, ba
            01234     0 2, 2,3 3,4

start = 0
end = 1
```

## Homework 1

Problems to get exposed to the topics

**Arrays**:

[Add one to number](https://leetcode.com/problems/plus-one/) | [My solution](arrays/plus-one.js)

[Wave array](https://www.interviewbit.com/problems/wave-array/) | [My solution](arrays/wave-array.js)

<https://www.interviewbit.com/problems/hotel-bookings-possible/>
<https://www.interviewbit.com/problems/first-missing-integer/>
<https://www.interviewbit.com/problems/partition-list/>
<https://www.interviewbit.com/problems/remove-duplicates-from-sorted-list/>
<https://www.interviewbit.com/problems/merge-two-sorted-lists/>

**Patterns problems**:

Sliding window
<https://leetcode.com/problems/longest-substring-without-repeating-characters/>
<https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/>
<https://leetcode.com/problems/subarray-product-less-than-k/>

Closing window (2 pointers)
<https://leetcode.com/problems/3sum/>
<https://leetcode.com/problems/4sum/>
<https://leetcode.com/problems/trapping-rain-water>

**Maximum sum subarray**:

<https://www.interviewbit.com/problems/flip/>
<https://www.interviewbit.com/problems/max-sum-contiguous-subarray/>

Sum subarray = k
<https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/>

**Monotonic Queue**:

<https://leetcode.com/problems/next-greater-element-i/>
<https://leetcode.com/problems/largest-rectangle-in-histogram/>

**Bucketing (aka Counting sort)**:

<https://leetcode.com/problems/top-k-frequent-words/>
