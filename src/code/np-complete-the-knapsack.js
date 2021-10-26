/**
 * @name The_Knapsack
 * @name Bounded Items cannot be repeated
 * @url https://learnersbucket.com/examples/algorithms/knapsack-problem-in-javascript/
 * */

// Dynamic Programming (DP)
// As this problem is exhibiting both the properties of DP,
// i.e optimal substructure and overlapping sub-problems,
// which means we can break down the problems in sub-problems
// and store their result so that we can reuse them.

// Top-down approach (Recursive)
// We use Hashmap to cache the result of the already solved sub-problems
// using a key and then before solving the sub-problems first check if
// it is already solved then use that value, else solve it and store it.

// Time: O(n * m) | Space: O(n * m)
// Where n is the length of the values array and m is the target
function knapSack(values, weights, i, target, map) {
  // base case: when we cannot have take more items
  if (target < 0) {
    return Number.MIN_SAFE_INTEGER;
  }

  // base case: when no items are left or capacity becomes 0
  if (i < 0 || target == 0) {
    return 0;
  }

  // form a unique key from the inputs for memoization
  const key = `${i}|${target}`;

  // If the sub-problem is appearing for first time, solve it and
  // store its result in the map
  if (!map.has(key)) {
    // Include current item i in knapSack and recurse
    // for remaining items (i-1) with reduced capacity (target - weights[n]).
    let include = values[i] + knapSack(values, weights, i - 1, target - weights[i], map);

    // Exclude current item i from knapSack and recurse for
    // remaining items (i-1).
    let exclude = knapSack(values, weights, i - 1, target, map);

    // Assign max value we get by picking or leaving the current item.
    map.set(key, Math.max(include, exclude));
  }

  // Return the value of key the hashmap
  return map.get(key);
}

// Input:
const values = [12, 2, 1, 4, 1];
const weights = [4, 2, 1, 10, 2];
const target = 15;
let map = new Map();

console.log(knapSack(values, weights, values.length - 1, target, map)); // 17
