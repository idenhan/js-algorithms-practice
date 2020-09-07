function getStringLength(str) {
  let index = 0;

  while (str[index]) {
    index += 1;
  }
  return index;
}

let output = getStringLength('hello');
console.log(output); // --> 5