function isPalindrome(string) {
  // 2 pointers
  let left = 0;
  let right = string.length - 1;
  while (left < right) {
    let charLeft = string[left];
    let charRight = string[right];
    if (charLeft !== charRight) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
const tieFighters = {
  fighter: '|-o-|',
  bomber: '|-=oø=-|',
  interceptor: '|-=8=o=8=-|',
  heavy_bomber: '|-=o=8=-|',
  experimental: 'ø-=|=-o',
  raptor: 'ø',
  droid: 'oø',
  t_wing: 'oø=--|',
  empty: '',
};

const result = [];

for (const [type, drawing] of Object.entries(tieFighters)) {
  result.push({
    drawing,
    is_palindrome: isPalindrome(drawing),
    type,
  });
}

console.log(JSON.stringify(result, null, 2));

const output = [
  {
    drawing: '|-o-|',
    is_palindrome: true,
    type: 'fighter',
  },
  {
    drawing: '|-=oø=-|',
    is_palindrome: false,
    type: 'bomber',
  },
  {
    drawing: '|-=8=o=8=-|',
    is_palindrome: true,
    type: 'interceptor',
  },
  {
    drawing: '|-=o=8=-|',
    is_palindrome: false,
    type: 'heavy_bomber',
  },
  {
    drawing: 'ø-=|=-o',
    is_palindrome: false,
    type: 'experimental',
  },
  {
    drawing: 'ø',
    is_palindrome: true,
    type: 'raptor',
  },
  {
    drawing: 'oø',
    is_palindrome: false,
    type: 'droid',
  },
  {
    drawing: 'oø=--|',
    is_palindrome: false,
    type: 't_wing',
  },
  {
    drawing: '',
    is_palindrome: true,
    type: 'empty',
  },
]; 
