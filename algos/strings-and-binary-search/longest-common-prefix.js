const longestCommonPrefix = function(strings) {
  if (strings === undefined || strings.length === 0) {
    return '';
  }

  return strings.reduce((prev, next) => {
    let i = 0;
    while (prev[i] && next[i] && prev[i] === next[i]) i++;
    return prev.slice(0, i);
  });
};
