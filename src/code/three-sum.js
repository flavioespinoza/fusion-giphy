function threeNumberSum(array, targetSum) {
  // time O(n^2) | space O(n)
	array.sort((a, b) => a - b);
	const triplets = [];
	
	// loop by 3s
	for (let i = 0; i < array.length - 2; i++) {
		let left = i + 1;
		let right = array.length - 1;
		while (left < right) {
			const currentSum = array[i] + array[left] + array[right];
			if (currentSum === targetSum) {
				triplets.push([array[i], array[left], array[right]]);
				left++;
				right--;
			} else if (currentSum < targetSum) {
				left++;
			} else if (currentSum > targetSum) {
				right--;
			}
		}
	}
	return triplets;
}

