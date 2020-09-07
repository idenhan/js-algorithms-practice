function square(num) {
  return num * num;
}

function getSquaredElementsAtProperty(obj, key) {
  if (Array.isArray(obj[key]) === false) {
    return [];
  }
  return obj[key].map(square);
}

let obj = {
  key: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]