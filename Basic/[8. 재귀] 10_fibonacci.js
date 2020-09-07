function fibonacci(num) {
  if (num <= 1) {
    return num;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

let output = fibonacci(5);
console.log(output); // --> 5

output = fibonacci(9);
console.log(output); // --> 34