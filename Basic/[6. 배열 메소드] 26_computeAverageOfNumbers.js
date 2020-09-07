function computeAverageOfNumbers(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let total = 0;
  total = arr.reduce(function (a, b) {
    return a + b;
  })
  return (total / arr.length);
}

let input = [1, 2, 3, 4, 5];
let output = computeAverageOfNumbers(input);
console.log(output); // --> 3