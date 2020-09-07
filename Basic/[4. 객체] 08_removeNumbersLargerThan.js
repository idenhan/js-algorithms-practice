function removeNumbersLargerThan(num, obj) {
  for (let i in obj) {
    if (obj[i] > num) {
      delete obj[i];
    }
  }
  return obj;
}

let obj = {
  a: 8,
  b: 2,
  c: "montana",
};
removeNumbersLargerThan(5, obj);
console.log(obj); // --> { b: 2, c: 'montana' }
