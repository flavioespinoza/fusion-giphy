let number;
let arrLength = 5;
for (var i = 0; i < arrLength; i++) {
  number = i;
  setTimeout(() => {
    console.log(number); // 4, 4, 4, 4, 4
  }, 0);
} 
for (let i = 0; i < arrLength; i++) {
  number = i;
  setTimeout(() => {
    console.log(number); // 4, 4, 4, 4, 4
  }, 0);
}
for (var i = 0; i < arrLength; i++) {
  setTimeout(() => {
    console.log(i); // 5, 5, 5, 5, 5
  }, 0);
}
for (let i = 0; i < arrLength; i++) {
  setTimeout(() => {
    console.log(i); // 0, 1, 2, 3, 4
  }, 0);
}
