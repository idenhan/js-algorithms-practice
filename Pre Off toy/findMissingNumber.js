function findMissingNumber(str) {
  let arr = str.split(' ').map(Number);
  let largest = arr.length + 1;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return largest * (largest + 1) / 2 - sum;
}
findMissingNumber('1 6 2 4 3') // => 5