function findShortestOfThreeWords(word1, word2, word3) {
  let wordsArray = [word1, word2, word3];
  let shortestWord = word1;

  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length < shortestWord.length) {
      shortestWord = wordsArray[i];
    }
  }
  return shortestWord;
}

let output = findShortestOfThreeWords("a", "two", "three");
console.log(output); // ---> 'a'
