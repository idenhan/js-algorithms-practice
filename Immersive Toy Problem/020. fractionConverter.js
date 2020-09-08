const toFraction = function (fraction) {
  let isNegative = fraction < 0;
  if (isNegative) {
    fraction = fraction * -1;
  }
  let fractionString = fraction.toString();
  let decimal = fractionString.split(".")[1];
  let whole = fractionString.split(".")[0];
  let output;
  // If we have a decimal value of 0, just return it formatted
  // properly as a fraction string
  if (decimal === undefined) {
    return `${whole}/1`;
  }

  // Helper function to simplify a fraction to it's least value
  function reduce(numerator, denominator) {
    let lowerNum = Math.min(numerator, denominator);
    for (let i = lowerNum; i > 0; i--) {
      if (i > numerator || i > denominator) {
        return [numerator, denominator];
      }

      if (numerator % i === 0 && denominator % i === 0) {
        numerator = numerator / i;
        denominator = denominator / i;
      }
    }
    return [numerator, denominator];
  }

  let length = decimal.length;
  let denom = Math.pow(10, length);
  let reduced = reduce(+decimal, denom);
  let top = +whole * reduced[1] + +reduced[0];
  let bottom = reduced[1];
  output = isNegative ? `-${top}/${bottom}` : `${top}/${bottom}`;
  return output;
};

/*
숫자를 매개변수로 받아서 문자열 형태의 분수로 리턴하는 함수를 작성하세요.

Example: toFraction(0.5) === '1/2'
정수와 대분수들은 가분수로 바꿔서 리턴해야 합니다. (가분수 : 분자가 분모보다 크거나 같은 분수)

Example: toFraction(3.0) === '3/1'

Example: toFraction(2.5) === '5/2'
*/
