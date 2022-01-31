function displayCountdown(array) {
  // index of i is set to zero; if (i <= length); add one to i and iterate
  for (let i = 1; i <= array.length; i++) {
    console.log(i); // 1, 2, 3
  }
}

displayCountdown([1, 2, 3]);