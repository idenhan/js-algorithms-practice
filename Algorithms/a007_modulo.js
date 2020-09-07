function modulo(num1, num2) {
  if (isNaN(num2) || num2 === 0) {
    return NaN;
  }

  let plusMinus = num1 > 0 ? 1 : -1;

  num1 = Math.abs(num1);
  num2 = Math.abs(num2);

  while (num1 >= num2) {
    num1 = num1 - num2;
  }
  return num1 * plusMinus;
}

let output = modulo(25, 4);
console.log(output); // --> 1