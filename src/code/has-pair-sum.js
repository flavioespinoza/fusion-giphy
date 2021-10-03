function hasPairSum(arr, target) {
  const res = [];
  const compliments = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (compliments.has(arr[i])) { 
      res.push([arr[i], target - arr[i]])
    } 
    compliments.add(target - arr[i])
  }
  return res;
}

let input;

input = [0, 1, 2, 4, 4]; // fail
console.log(hasPairSum(input, 5)); // [ [4, 4], [4, 4] ]

input = [1, 2, 4, 4, 4]; // fail
console.log(hasPairSum(input, 8)); // [ [4, 4], [4, 4] ]

input = [1, 2, 4, 4];
console.log(hasPairSum(input, 8)); // [ [4, 4] ]

input = [1, 2, 5, 7];
console.log(hasPairSum(input, 8)); // [ [7, 1] ]

input = [0, 2, 5, 8];
console.log(hasPairSum(input, 8)); // [ [8, 0] ]

input = [1, 2, 5, 9];
console.log(hasPairSum(input, 8)); // []

input = [1, 2, 4, 4, 5, 6, 7];
console.log(hasPairSum(input, 8)); // [ [ 4, 4 ], [ 6, 2 ], [ 7, 1 ] ]
