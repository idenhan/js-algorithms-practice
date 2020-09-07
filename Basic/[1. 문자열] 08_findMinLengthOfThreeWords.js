function findMinLengthOfThreeWords(word1, word2, word3) {
  let wordsArr = [word1, word2, word3];
  let shortestWord = word1;

  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i].length < shortestWord.length) {
      shortestWord = wordsArr[i];
    }
  }
  return shortestWord.length;
}

let output = findMinLengthOfThreeWords("a", "be", "see");
console.log(output); // --> 1
