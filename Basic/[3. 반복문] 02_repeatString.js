function repeatString(string, num) {
  let result = "";

  for (let i = 0; i < num; i++) {
    result = result + string;
  }
  return result;
}

let output = repeatString("code", 3);
console.log(output); // --> 'codecodecode'
