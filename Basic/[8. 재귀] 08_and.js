function and(arr) {
  if (arr.length === 0) {
    return true;
  }
  let head = arr[0];
  let tail = arr.slice(1);
  return head && and(tail);
}

let output = and([true, true, true]);
console.log(output); // --> true

output = and([true, true, false]);
console.log(output); // --> false