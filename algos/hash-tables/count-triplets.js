/**
 * @url https://www.hackerrank.com/challenges/count-triplets-1/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps&h_r=next-challenge&h_v=zen
 * @url https://medium.com/@danromans/hashmap-code-challenge-breakdown-355565e8b4ca
 * */
function countTriplets(arr, r) {
  const hGram = {};
  const hGram2 = {};
  let count = 0;

  if (arr.length < 3) return 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    let t1 = arr[i];
    let t2 = t1 * r;
    let t3 = t2 * r;

    count += hGram2[t3] || 0;

    if (hGram2[t2]) {
      hGram2[t2] += hGram[t2] || 0;
    } else {
      hGram2[t2] = hGram[t2] || 0;
    }

    if (hGram[t1]) {
      hGram[t1]++;
    } else {
      hGram[t1] = 1;
    }
  }

  return count;
}
