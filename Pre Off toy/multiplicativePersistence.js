function multiplicativePersistence(num) {

  function multiply(n) {
    return n.reduce(function (a, b) { return a * b; });
  }
  let count = 0;
  while (num.toString().length > 1) {
    num = num.toString.split('');
    num = multiply(num);
    count++;
  }
  return count;
}