function computeSquareRoot(num) {
  let value = 1;

  while (value * value < num) {
    value++;
  }
  if (value * value === num) {
    return value;
  }
  for (let i = 0; i < 3; i++) {
    value = (value + (num / value)) / 2;
  }
  return Number(value.toFixed(2));
}

let output = computeSquareRoot(9);
console.log(output); // --> 3

let output2 = computeSquareRoot(6);
console.log(output2); // --> 2.45