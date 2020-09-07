function arrProduct(arr) {
  if (arr.length === 0) {
    return 1;
  }

  let head = arr[0];
  let tail = arr.slice(1);
  return head * arrProduct(tail);
}

let output = arrProduct([1, -2, 1, 3]);
console.log(output); // --> -6