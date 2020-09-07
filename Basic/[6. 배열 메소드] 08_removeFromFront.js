function removeFromFront(array) {
  return array.slice(1);
}

let output = removeFromFront([1, 2, 3]);
console.log(output); // --> [2, 3]