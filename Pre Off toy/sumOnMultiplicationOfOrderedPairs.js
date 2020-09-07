function sumOnMultiplicationOfOrderedPairs(...arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (i !== j) {
        sum += arr[i] * arr[j];
      }
    }
  }
  return sum;
}
sumOnMultiplicationOfOrderedPairs(2, 3, 4) // 26