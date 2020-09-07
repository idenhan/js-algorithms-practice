function getAllKeys(obj) {
  let result = [];
  for (let key in obj) {
    result.push(key);
  }
  return result;
}

let sample = {
  a: 'a',
  number: 11,
  hungry: true,
  grammyWins: 1,
};
let output = getAllKeys(sample);
console.log(output); // ['a', 'number', 'hungry', 'grammyWins'];