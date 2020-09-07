function isOdd(num) {
  if (num === 'number' || num % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}
let output1 = isOdd(42);
console.log(output1); // --> false

let output2 = isOdd(19);
console.log(output2); // --> true