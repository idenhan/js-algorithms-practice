function getAllWords(str) {
  if (str === '') {
    return [];
  }
  return str.split(' ');
}

let output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']
