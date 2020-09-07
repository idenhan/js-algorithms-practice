function removeElement(array, discarder) {
  return array.filter(function (element) {
    if (element === discarder) {
      return false;
    }
    return true;
  })
}

let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]