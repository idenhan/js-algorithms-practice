function longestWord(string) {
  let words = string.split(' ');

  return words.reduce(function (acc, curr) {
    if (acc.length < curr.length) {
      return curr
    }
    return acc
  }, '')
}
longestWord("Teamwork skills will take you anywhere"); // => "Teamwork"