function or(arr) {
  if (arr.length === 0) {
    return false;
  }
  let head = arr[0];
  let tail = arr.slice(1);

  return head || or(tail);
}

let output = or([true, true, false]);
console.log(output); // --> true

output = or([false, false, false]);
console.log(output); // --> false
