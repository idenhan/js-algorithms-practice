function listAllValues(obj) {
  let result = [];
  for (let key in obj) {
    result.push(obj[key]);
  }
  return result;
}

let sample = {
  a: 'a',
  number: 11,
  hungry: true,
  grammyWins: 1,
};
let output = listAllValues(sample);
console.log(output); //['a', 11, true, 1];