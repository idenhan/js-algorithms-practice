function getAllElementsButLast(array) {
  return array.slice(0, array.length - 1);
}

let output = getAllElementsButLast([1, 2, 3, 4]);
console.log(output); // --> [1, 2, 3]