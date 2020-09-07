function convertObjectToList(obj) {
  let result = [];
  for (let key in obj) {
    result.push([key, obj[key]])
  }
  return result;
}

let input = {
  name: 'Holly',
  age: 35,
  role: 'producer'
};
let output = convertObjectToList(input);
console.log(output);
/* [['name', 'Holly'], ['age', 35], ['role', 'producer']]; */
