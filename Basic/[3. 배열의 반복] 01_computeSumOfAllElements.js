function computeSumOfAllElements(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

let output = computeSumOfAllElements([1], [2], [3]);
console.log(output); // --> 6
