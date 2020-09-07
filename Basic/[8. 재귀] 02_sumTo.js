function sumTo(num) {
  if (num === 0) {
    return 0;
  }
  num += sumTo(num - 1);
  return num;
}

let output = sumTo(10);
console.log(output); // --> 55