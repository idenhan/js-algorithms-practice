function getProductOfAllElementsAtProperty(obj, key) {
  if (Array.isArray(obj[key]) === false) {
    return 0;
  }
  if (obj[key].length === 0) {
    return 0;
  }
  return obj[key].reduce(function (a, b) {
    return a * b;
  })
}

let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24