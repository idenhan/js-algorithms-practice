function getElementOfArrayProperty(obj, key, index) {
  let array = obj[key];
  if (Array.isArray(array) === false) {
    return undefined;
  } else {
    return array[index];
  }
}

let obj = {
  key: ['Jamil', 'Albrey']
};
let output = getElementOfArrayProperty(obj, 'key', 0);
console.log(output); // --> 'Jamil'