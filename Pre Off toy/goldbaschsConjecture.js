function goldbachsConjecture(num) {
  for (let j = 2; j < num; j++) {
    if (primeNumber(j) && primeNumber(num - j)) {
      return num + ' = ' + j + ' + ' + (num - j);
    }
  }
}

function primeNumber(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
goldbachsConjecture(5892) // "5892 = 11 + 5881"
goldbachsConjecture(12) // "12 = 7 + 5"