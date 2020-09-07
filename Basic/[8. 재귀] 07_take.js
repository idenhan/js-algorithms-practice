function take(num, arr) {
  if (num === 0 || arr.length === 0) {
    return [];
  }

  let head = arr[0];
  let tail = arr.slice(1);

  return [head].concat(take(num - 1, tail));
}

let output = take(2, [1, -2, 1, 3]);
console.log(output); // --> [1, -2]

output = take(5, [1, -2, 1, 3]);
console.log(output); // --> [1, -2, 1, 3]