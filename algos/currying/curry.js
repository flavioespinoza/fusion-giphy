// // Requires a function with a fixed number of arguments
// const curry = (fn) => {
//   return curried = (...args) => {
//     if (fn.length !== args.length) {
//       return curried.bind(null, ...args);
//     }
//     return fn(...args);
//   };
// };

// const total = (x, y, z) => x + y + z;

// const curriedTotal = curry(total);

// console.log(curriedTotal(10)(20)(30)); // 60


// const arr = [0, 1, 2, 3, 4]
// for (let i = 0; i < arr.length; i++) {
    
//   arr.pop();
//   console.log(i)
     
// }


// console.log('a')

// for (let i = 0; i < 3; i++) {
    
//   setTimeout(() => {
//     console.log(i)
//   }, 0);
     
// }

// console.log('b')

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i)
//   }, 1);
// }

// console.log('c')


function isJohn(person) {
  if (person == { name: 'John' }) {
    return true
  } else {
    return false
  }
}

const john  = {name: 'John'};
console.log(isJohn(john))