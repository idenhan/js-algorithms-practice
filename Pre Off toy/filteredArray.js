function filteredArray(array, testFunction) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (testFunction(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

let isOdd = function (num) {
  if (num % 2) {
    return true;
  } else {
    return false;
  }
}
filteredArray([1, 2, 3], isOdd) // [1, 3]