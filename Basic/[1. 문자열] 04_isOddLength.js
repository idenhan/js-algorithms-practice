function isOddLength(word) {
  if (typeof word === "string" && word.length % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

let output = isOddLength("special");
console.log(output); // --> true
