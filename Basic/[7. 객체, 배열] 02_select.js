function select(arr, obj) {
  let newObj = {};
  for (let key in obj) {
    for (let i = 0; i < arr.length; i++) {
      if (key === arr[i]) {
        newObj[key] = obj[key];
      }
    }
  }
  return newObj;
}

let arr = ['a', 'c', 'e'];
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
let output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }
