function getLongestElement(arr) {
  if (arr.length === 0) {
    return '';
  }
  return arr.reduce(function (a, b) {
    if (a.length >= b.length) {
      return a;
    }
    return b;
  })
}

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'