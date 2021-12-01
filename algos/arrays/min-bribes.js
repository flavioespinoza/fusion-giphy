/**
 * @url https://www.hackerrank.com/challenges/new-year-chaos/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
 * */
function minimumBribes(que) {
  let chaotic = false;
  let bribes = 0;
  for (let i = 0; i < que.length; i++) {
    if (que[i] - (i + 1) > 2) {
      chaotic = true;
    }
    for (let j = que[i] - 2; j < i; j++) {
      if (que[j] > que[i]) {
        bribes++;
      }
    }
  }
  if (chaotic) {
    console.log('Too chaotic');
  } else {
    console.log(bribes);
  }
}
