function isOddWithoutModulo(num) {
  if (num === 0) {
    return false;
  }
  if (num === 1) {
    return true;
  }
  if (num < 0) {
    return isOddWithoutModulo(-num);
  }
  return isOddWithoutModulo(num - 2);
}

let output = isOddWithoutModulo(17);
console.log(output); // --> true