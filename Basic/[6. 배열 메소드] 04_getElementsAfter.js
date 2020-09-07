function getElementsAfter(array, n) {
  let newArray = [];
  for (let i = n + 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2);
console.log(output); // --> ['d', 'e']