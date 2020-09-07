function getLastElementOfProperty(obj, key) {
  let prop = obj[key];
  if (Array.isArray(prop) === false) {
    return undefined;
  }
  return prop[prop.length - 1];
}

let obj = {
  key: [1, 2, 5]
};
let output = getLastElementOfProperty(obj, 'key');
console.log(output); // --> 5