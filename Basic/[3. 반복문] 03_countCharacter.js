function countCharacter(str, char) {
  let finder = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      finder = finder + 1;
    }
  }
  return finder;
}

let output = countCharacter("I am a hacker", "a");
console.log(output); // --> 3
