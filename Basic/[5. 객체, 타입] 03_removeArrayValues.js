function removeArrayValues(obj) {
  for (let prop in obj) {
    if (Array.isArray(obj[prop])) {
      delete obj[prop];
    }
  }
  return obj;
}

let obj = {
  a: [1, 3, 4],
  b: 2,
  c: ['hi', 'there']
};
removeArrayValues(obj);
console.log(obj); // --> { b: 2 }