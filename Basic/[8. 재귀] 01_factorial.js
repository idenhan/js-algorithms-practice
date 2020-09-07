function factorial(num) {
  if (num <= 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

let output = factorial(10);
console.log(output); // --> 3628800