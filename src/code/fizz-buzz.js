function fizzBuzz(n) {
    // set result's initial value to template literal n (string).
    // the template literal allows string.replace() and string.trim() to work on the initial value of result.
    // this also allows n to remain a Number for all math calculations.
    let result = `${n}`;
    if (n % 3 === 0) {
        // if mod 3 has no remainder remove template literal n
        let temp = result.replace(`${n}`, '');
        // add fizz to temp
        temp += `fizz `;
        // set result to temp
        result = temp;
    }
    if (n % 5 === 0) {
        // if mod 5 has no remainder remove template literal n
        let temp = result.replace(`${n}`, '');
        // add buzz to temp
        temp += `buzz`;
        // set result to temp
        result = temp;
    }
    // trim off any whitespace: "fizz " => "fizz"
    return result.trim();
}

console.log(fizzBuzz(33)); // fizz
console.log(fizzBuzz(55)); // buzz
console.log(fizzBuzz(15)); // fizz buzz
console.log(fizzBuzz(16)); // 16