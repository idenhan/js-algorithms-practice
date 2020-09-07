function getLengthOfWord(word) {
  if (word) {
    return word.length;
  } else {
    return 0;
  }
}

let output = getLengthOfWord("some");
console.log(output);
