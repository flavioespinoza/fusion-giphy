function getAlphabetK(char) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return alphabet.indexOf(char) + 1;
}

module.exports = getAlphabetK;