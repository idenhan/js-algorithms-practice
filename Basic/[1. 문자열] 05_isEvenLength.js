function isEvenLength(word) {
  if (typeof word === "string" && word.length % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let output = isEvenLength("wow");
console.log(output); // --> false
