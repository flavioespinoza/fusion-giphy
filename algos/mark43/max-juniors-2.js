// You are given a collection of person objects (in a natural manner for the
// language you're writing in) with three fields:

// {firstName, lastName, age} e.g. {Jane, Smith, 14}

// We want to know which family has the longest line of "juniors".
// A family has "juniors" when multiple family members have the same full name.

// Consider the following example.
const input = [
  { firstName: 'John', lastName: 'Doe', age: 13 },
  { firstName: 'John', lastName: 'Doe', age: 32 },
  { firstName: 'John', lastName: 'Doe', age: 62 },

  { firstName: 'Janet', lastName: 'Doe', age: 14 },

  { firstName: 'Jenny', lastName: 'Smith', age: 34 },
  { firstName: 'Jenny', lastName: 'Smith', age: 12 },
  { firstName: 'Jenny', lastName: 'Smith', age: 12 },
  { firstName: 'Jenny', lastName: 'Smith', age: 12 },

  { firstName: 'Flavio', lastName: 'Espinoza', age: 12 },
  { firstName: 'Flavio', lastName: 'Espinoza', age: 12 },
  { firstName: 'Flavio', lastName: 'Espinoza', age: 12 },
  { firstName: 'Flavio', lastName: 'Espinoza', age: 12 },
  { firstName: 'Flavio', lastName: 'Espinoza', age: 12 },
];

// create fullName from firstName_lastName
// create hash map to track occurrences of full name
// return max firstName_lastName.split(_)[1]

function maxJuniors(array) {
  const map = {};
  let max = 0;
  let maxFamily = '';
  for (const item of array) {
    const key = `${item.firstName}_${item.lastName}`;
    if (!(key in map)) {
      map[key] = 1;
    } else {
      map[key]++;
    }
    if (map[key] > max) {
      maxFamily = item.lastName;
      max = map[key];
    }
  }
  return maxFamily;
}

console.log(maxJuniors(input));
