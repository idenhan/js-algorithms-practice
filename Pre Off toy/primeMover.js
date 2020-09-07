let primeMover = function (n) {
  let result = [];
  for (let i = 1; i < 50000; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }
  return result[n];
}

function isPrime(num) {
  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}