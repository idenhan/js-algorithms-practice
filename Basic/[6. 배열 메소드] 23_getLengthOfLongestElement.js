function getLengthOfLongestElement(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.reduce(function (a, b) {
    if (a.length >= b.length) {
      return a;
    }
    return b;
  }).length;
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5