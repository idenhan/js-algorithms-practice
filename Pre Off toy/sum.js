function sum(n) {
  let result = 0;

  if (typeof n === 'number') {
    for (let i = 0; i <= n; i++) {
      result += i;
    }
  }
  return result;
}
sum(3); // => 6
sum(4); // => 10
sum(5); // => 15