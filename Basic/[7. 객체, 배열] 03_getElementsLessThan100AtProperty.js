function lessThan100(number) {
  return number < 100;
}

function getElementsLessThan100AtProperty(obj, key) {
  let array = obj[key];

  if (Array.isArray(array) === false) {
    return [];
  }
  return array.filter(lessThan100);
}

let obj = {
  key: [1000, 20, 50, 500]
};
let output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]