function sortLinear(array) {
  // response array
  let sorted = [];
  // ordered Map of frequencies
  const map = {};
  // loop 1
  for (let i = 0; i < array.length; i++) {
    if (!map[array[i]]) {
      map[array[i]] = 1;
    } else {
      map[array[i]]++;
    }
  }
  // loop 2
  for (const [key, val] of Object.entries(map)) {
    if (val > 1) {
      sorted = [...sorted, ...new Array(val).fill(Number(key))];
    } else {
      sorted.push(Number(key));
    }
  }
  return {
    frequencies: map,
    sorted,
  };
}

console.log(sortLinear([5, 4, 3, 2, 1, 0, 0, 0]));
