function reverseWords(s) {
  const words = s.trim().split(' ');
  let result = '';
  for (let i = words.length - 1; i >= 0; i--) {
    if (words[i].length !== 0) {
      result += `${words[i]} `;
    }
  }
  return result.trim();
}

