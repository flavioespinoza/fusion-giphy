/**
 * @url https://www.hackerrank.com/challenges/crush/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
 * @url https://dev.to/amyshackles/array-manipulation-javascript-solution-58bj
 * */
function arrayManipulation(n, queries) {
  let arr = new Array(n + 1).fill(0);
  queries.forEach(([a, b, k]) => {
    arr[a - 1] += k;
    arr[b] -= k;
  });
  let sum = 0;
  let max = 0;
  arr.forEach((val) => {
    sum += val;
    max = Math.max(sum, max);
  });
  return max;
}
