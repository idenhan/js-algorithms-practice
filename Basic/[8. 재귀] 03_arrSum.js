function arrSum(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let head = arr[0];
  let tail = arr.slice(1);
  return head + arrSum(tail);
}

let output = arrSum([-1, -2, 1, 3]);
console.log(output); // --> 1