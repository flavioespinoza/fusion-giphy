/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
const validSquare = function(p1, p2, p3, p4) {
  //get distance for each line
  let ds = (a, b) => Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2);
  //store unique distance
  let dsSet = new Set();
  dsSet.add(ds(p1, p2));
  dsSet.add(ds(p2, p3));
  dsSet.add(ds(p3, p4));
  dsSet.add(ds(p1, p4));
  dsSet.add(ds(p1, p3));
  dsSet.add(ds(p2, p4));
  //return if set not has 0 and length is equal to 2
  return !dsSet.has(0) && dsSet.size === 2;
};


