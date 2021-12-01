/**
 * @url https://www.hackerrank.com/challenges/max-array-sum/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dynamic-programming
 * @url https://iawale.medium.com/max-array-sum-hackerrank-medium-using-inplace-dynamic-programming-215a620d7705
 * */
function maxSubsetSum(arr) {
  let max = Math.max(arr[0], arr[1]);
  arr[1] = max;
  for (let i = 2; i < arr.length; i++) {
    max = Math.max(arr[i - 2] + arr[i], max);
    max = Math.max(arr[i], max);
    arr[i] = max;
  }
  return max;
}
