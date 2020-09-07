const bubbleSort = function (array) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let tmp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);
  return array;
};

bubbleSort([2, 1, 3]); // [1, 2, 3]을 반환해야 합니다.
