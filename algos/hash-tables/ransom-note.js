/**
 * @url https://www.hackerrank.com/challenges/ctci-ransom-note/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
 * */
function checkMagazine(magazine, note) {
  let no = false;
  for (const word of note) {
    let index = magazine.indexOf(word);
    if (index > -1) {
      magazine.splice(index, 1);
    } else {
      no = true;
    }
  }
  if (no) {
    console.log('No');
  } else {
    console.log('Yes');
  }
}
