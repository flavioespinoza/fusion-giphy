function memoize(fn) {
	const cache = {};
	return (...args) => {
		let n = args[0];
		if (n in cache) {
			return cache[n];
		} else {
			let result = fn(n);
			cache[n] = result;
			return result;
		}
	}
}

const factorialMemo = memoize((x) => {
	if (x === 0) return 1;
	return x * factorialMemo(x - 1);
});

console.log(factorialMemo(5));	// calculated for 0-5 => 120
console.log(factorialMemo(6));	// return cache for 5 (120) multiply by 6 => 720