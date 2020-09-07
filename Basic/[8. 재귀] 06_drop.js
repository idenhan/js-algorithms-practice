function drop(num, arr) {

  if (num === 0 || arr.length === 0) {
    return arr;
  }

  let tail = arr.slice(1);
  return drop(num - 1, tail);
}

let output = drop(2, [1, -2, 1, 3]);
console.log(output); // --> [1, 3]

output = drop(5, [1, -2, 1, 3]);
console.log(output); // --> [ ]