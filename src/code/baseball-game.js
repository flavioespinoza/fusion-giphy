// An integer x - Record a new score of x.
// "+" - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores.
// "D" - Record a new score that is double the previous score. It is guaranteed there will always be a previous score.
// "C" - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.
const ops = ['5', '2', 'C', 'D', '+'];
// Output: 30

function calPoints(ops) {
  const record = [];
  for (let i = 0; i < ops.length; i++) {
    if (isNaN(ops[i])) {
      if (ops[i] === 'C') {
        record.pop();
      }
      if (ops[i] === 'D') {
        let x = 2 * record[record.length - 1];
        record.push(x);
      }
      if (ops[i] === '+') {
        let x = record[record.length - 1] + record[record.length - 2];
        record.push(x);
      }
    } else {
      record.push(parseInt(ops[i]));
    }
  }
  let count = 0;
  for (let i = 0; i < record.length; i++) {
    count += record[i];
  }
  return count;
}

console.log(calPoints(ops));
