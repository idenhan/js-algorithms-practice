function fromListToObject(array) {
  let result = {};
  for (let i = 0; i < array.length; i++) {
    result[array[i][0]] = array[i][1];
  }
  return result;
}

let sample = [
  ['make', 'Ford'],
  ['model', 'Mustang'],
  ['year', 1964],
];

let output = fromListToObject(sample);
console.log(output);
/* {
  make : 'Ford'
  model : 'Mustang',
  year : 1964
} */