const firstNonRepeatedCharacter = function (string) {
  for (let i = 0; i < string.length; i++) {
    let nonRepeatedCharacter = string.charAt(i);
    if (
      string.indexOf(nonRepeatedCharacter) === i &&
      string.indexOf(nonRepeatedCharacter, i + 1) === -1
    ) {
      return nonRepeatedCharacter;
    }
  }
  return null;
};

/* firstNonRepeatedCharacter('ABA'); // => 'B'
firstNonRepeatedCharacter('AACBDB'); // => 'C' */
