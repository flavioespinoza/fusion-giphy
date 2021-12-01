/**
 * @url https://www.hackerrank.com/challenges/minimum-swaps-2/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
 * */
function minimumSwaps(arr) {
  let swapCount = 0;
  for (let index = 0; index < arr.length; index++) {
    const currentInt = arr[index];
    const position = index + 1;
    if (currentInt !== position) {
      let indexToSwap;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === position) {
          indexToSwap = i;
          break;
        }
      }
      arr[indexToSwap] = currentInt;
      arr[index] = position;
      swapCount++;
    }
  }
  return swapCount;
}
