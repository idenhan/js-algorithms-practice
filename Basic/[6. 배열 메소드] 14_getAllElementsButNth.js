function getAllElementsButNth(arr, n) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== n) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']