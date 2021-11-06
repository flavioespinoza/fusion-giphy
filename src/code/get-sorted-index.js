function getSortedIndexOfObject(array, obj, prop) {
  let low = 0;
  let high = array.length;
  while (low < high) {
    let mid = (low + high) >>> 1;
    if (array[mid][prop] < obj[prop]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
}

function getSortedIndex(array, value) {
  let low = 0;
  let high = array.length;
  while (low < high) {
    let mid = (low + high) >>> 1;
    if (array[mid] < value) low = mid + 1;
    else high = mid;
  }
  return low;
}

module.exports = {
  getSortedIndexOfObject,
  getSortedIndex,
}
