function wordsFromPhoneNumber(phoneNumber, words) {
  const res = [];
  for (const word of words) {
    let nums = '';
    for (const char of word) {
      if ('abc'.includes(char)) nums += '2';
      if ('def'.includes(char)) nums += '3';
      if ('ghi'.includes(char)) nums += '4';
      if ('jkl'.includes(char)) nums += '5';
      if ('mno'.includes(char)) nums += '6';
      if ('pqrs'.includes(char)) nums += '7';
      if ('tuv'.includes(char)) nums += '8';
      if ('wxyz'.includes(char)) nums += '9';
    }
    if (phoneNumber.includes(nums)) {
      res.push(word);
    }
  }
  return res;
}

let phoneNumber = '3662277';
let words = ['foo', 'bar', 'baz', 'foobar', 'emo', 'cap', 'car', 'cat'];

console.log(wordsFromPhoneNumber(phoneNumber, words));

let output = ['foo', 'bar', 'foobar', 'emo', 'cap', 'car'];
