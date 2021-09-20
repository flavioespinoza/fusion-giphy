// time O(n(log(n)) | space O(n)
function sortedSquaredArray(array) {
  // response - array of original integers squared sorted in ascending order
	const res = [];
	// loop 
	for (const value of array) {
		// push value^2 onto response array
		res.push(Math.pow(value, 2));
	}
	// return response as sorted in ascending order
  return res.sort((a, b) => a - b);
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;