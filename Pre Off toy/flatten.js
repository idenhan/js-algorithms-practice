function flatten(array) {
  let newArray = array.flat();
  return newArray;
}
flatten([1, 2, [3], [4]]); // [1,2,3,4]