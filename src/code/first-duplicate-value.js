// time O(n) | space O(n)
function firstDuplicateValue(array) {
	// map = store seen inputs
	const map = {};
	// for const value of array
	// if map[value] does NOT exist map[value] equals value
	// else return value
	for (const value of array) {
		if (!map[value]) {
			map[value] = value;
		} else {
			return value;
		}
	}
  return -1;
}

// Do not edit the line below.
exports.firstDuplicateValue = firstDuplicateValue;
