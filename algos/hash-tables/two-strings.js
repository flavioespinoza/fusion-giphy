/**
 * @url https://www.hackerrank.com/challenges/two-strings/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps&h_r=next-challenge&h_v=zen
 * */
function twoStrings(s1, s2) {
  return s1.split('').filter((item) => s2.indexOf(item) > -1).length > 0
    ? 'YES'
    : 'NO';
}
