function arrLength(arr) {
  if (arr.isEmpty()) {
    return 0;
  }

  let tail = arr.slice(1);
  return 1 + arrLength(tail);
}

let output = arrLength([1, -2, 1, 3]);
console.log(output); // --> 4