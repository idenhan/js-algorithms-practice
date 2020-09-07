function transformFirstAndLast(array) {
  let result = {};
  result[array[0]] = array[array.length - 1];
  return result;
}

let sample = ['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey'];
let output = transformFirstAndLast(sample);
console.log(output); // { Kevin: 'Spacy'};