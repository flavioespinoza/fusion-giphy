function fizzBuzz(n) {
    // set result's initial value to template literal n (string).
    // the template literal allows string.replace() and string.trim() to work on the initial value of result.
    // this also allows n to remain a Number for all math calculations.
    let result = `${n}`;
    if (n % 3 === 0) {
        // if mod 3 remove template literal n
        let temp = result.replace(`${n}`, '');
        // add fizz to temp
        temp += `fizz `;
        // set result to temp
        result = temp;
    }
    if (n % 5 === 0) {
        // if mod 5 remove template literal n
        let temp = result.replace(`${n}`, '');
        // add buzz to temp
        temp += `buzz`;
        // set result to temp
        result = temp;
    }
    // trim off any whitespace: "fizz " => "fizz"
    let trim = result.trim();
    console.log(trim);
    // check if trim worked
    console.log(trim.length);
}

fizzBuzz(15);