function computeAverageLengthOfWords(word1, word2) {
  if (typeof word1 === "string" && typeof word2 === "string") {
    return (word1.length + word2.length) / 2;
  } else {
    return 0;
  }
}

let output = computeAverageLengthOfWords("code", "programs");
console.log(output);
