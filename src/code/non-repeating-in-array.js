function nonRepeatingPairs(array) {
  let agg = 0;
  for (let i = 0; i < array.length; i++) {
    let xor = agg ^ array[i];
    console.log(array[i]);
    console.log(agg);
    console.log(xor); // 2, 0, 4, 0, 6, 0, 9

    agg = xor;
  }
  return agg;
}
console.log(nonRepeatingPairs([2, 2, 4, 4, 6, 6, 9]));

function nonRepeating(array) {
  const map = {};
  for (let i = 0; i < array.length; i++) {
    if (!map[array[i]]) {
      map[array[i]] = 1;
    } else {
      map[array[i]]++;
    }
  }
  console.log(map);
  for (const [key, val] of Object.entries(map)) {
    if (val === 1) return Number(key);
  }
}
console.log(nonRepeating([2, 2, 4, 4, 6, 6, 9])); // 9
console.log(nonRepeating([2, 2, 3, 3, 3, 4, 4, 6, 6, 9])); // 9

function allNonRepeaters(array, type = 'all') {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    const temp = [...array];
    temp.splice(i, 1);
    const set = new Set(temp);
    if (!set.has(array[i])) {
      if (type === 'all') {
        res.push(array[i]);
      } else {
        return array[i];
      }
    }
  }
  return res;
}
console.log(allNonRepeaters([2, 2, 3, 3, 3, 4, 4, 5, 6, 6, 9, 10], 'all')); // [5, 9, 10]
console.log(allNonRepeaters([2, 2, 3, 3, 3, 4, 4, 5, 6, 6, 9, 10], 'first')); // 5