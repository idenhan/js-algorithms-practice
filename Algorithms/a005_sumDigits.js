function sumDigits(num) {
  let sum = 0;
  let digitArr = num.toString().split('');

  for (let i = 0; i < digitArr.length; i++) {
    if (digitArr[0] === '-' && i === 1) {
      sum = -Number(digitArr[1]);
    } else {
      sum += Number(digitArr[i]);
    }
  }
  return sum;
}

let output = sumDigits(-316);
console.log(output); // --> 4