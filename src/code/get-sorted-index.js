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
    let mid = Math.floor((low + high) / 2);
    if (array[mid] < value) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
}

function comparator(a, b) {
  return a - b;
}
/**
 * Modified version of insertion sort. It uses binary search for finding
 * where the current element should be inserted. It's correct because
 * the binary search looks just in the first part of the array
 * which is actually sorted.<br><br>
 * Time complexity: O(N^2).
 *
 * @example
 * console.log(insertBinarySort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
 *
 * @public
 * @module sorting/insertion-binary-sort
 * @param {Array} array Input array.
 * @param {Function} cmp Optional. A function that defines an
 * alternative sort order. The function should return a negative,
 * zero, or positive value, depending on the arguments.
 * @return {Array} Sorted array.
 */
function insertBinarySort(array, cmp) {
  cmp = cmp || comparator;
  var current;
  var middle;
  var left;
  var right;
  for (var i = 1; i < array.length; i += 1) {
    current = array[i];
    left = 0;
    right = i;
    middle = Math.floor((left + right) / 2);
    while (left <= right) {
      if (cmp(array[middle], current) <= 0) {
        left = middle + 1;
      } else if (cmp(array[middle], current) > 0) {
        right = middle - 1;
      }
      middle = Math.floor((right + left) / 2);
    }
    for (var j = i; j > left; j -= 1) {
      array[j] = array[j - 1];
    }
    array[j] = current;
  }
  return array;
}

let array;
array = [5, 4, 3, 2, 1];
console.log(insertBinarySort(array)); // [ 1, 2, 3, 4, 5 ]

array = [ 47, 4, 0, 12, 47, 31, 15, 49, 29, 33, 7, 22, 26, 24, 16 ]
console.log(insertBinarySort(array)); // [ 0, 4, 7, 12, 15, 16, 22, 24, 26, 29, 31, 33, 47, 47, 49 ]

module.exports = {
  getSortedIndexOfObject,
  getSortedIndex,
  insertBinarySort,
};
