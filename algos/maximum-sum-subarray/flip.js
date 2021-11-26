function flip(A) {
  let ans = [];
  if (A.length === 0) return ans;
  let a = 1;
  let b = 1;
  let sum = 0;
  let m = 0;
  let x = 1;
  let n = 0;
  let max_sum = -1;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === '0') {
      sum += 1;
      n = 1;
    } else {
      sum += -1;
      m = 1;
    }
    if (sum < 0) {
      sum = 0;
      x = i + 2;
      continue;
    }
    if (sum > max_sum) {
      a = x;
      b = i + 1;
      max_sum = sum;
    }
  }
  if (!m) {
    a - 1;
    b = A.length;
  }
  if (!n) return ans;
  ans.push(a);
  ans.push(b);
  return ans;
}