function getAllLetters(str) {
  let result = [];
  let array = str.split('');

  for (let i = 0; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
}

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']