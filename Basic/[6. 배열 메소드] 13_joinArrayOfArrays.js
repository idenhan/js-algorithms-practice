function joinArrayOfArrays(arr) {
  let newArr = arr.reduce(function (acc, val) {
    return acc.concat(val);
  })
  return newArr;
}

let output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']