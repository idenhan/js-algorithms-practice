function findSmallestElement(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.reduce(function (a, b) {
    return Math.min(a, b);
  })
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1