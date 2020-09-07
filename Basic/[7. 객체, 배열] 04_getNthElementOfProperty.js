function getNthElementOfProperty(obj, key, n) {
  if (Array.isArray(obj[key]) === false) {
    return undefined;
  }
  return obj[key][n];
}

let obj = {
  key: [1, 2, 6]
};
let output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); // --> 2