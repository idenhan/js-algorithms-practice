const binarySearch = function (array, target) {
  let searcher = 0;
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    searcher = Math.floor((min + max) / 2);
    if (array[searcher] === target) {
      return searcher;
    } else if (array[searcher] < target) {
      min = searcher + 1;
    } else {
      max = searcher - 1;
    }
  }
  return null;
};

let index = binarySearch([1, 2, 3, 4, 5], 4);
console.log(index); // [3]
