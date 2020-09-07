/* 배열이 주어졌을 때, 이 중 3개의 숫자를 곱하여 나올 수 있는 최대값을 return하는 함수를 작성하세요. */

const largestProductOfThree = function (array) {
  let len = array.length;
  array.sort((a, b) => {
    return a - b;
  });
  return array[len - 1] * array[len - 2] * array[len - 3];
};
// 음수가 포함되었을 때, 작동하지 못한다.
largestProductOfThree([2, 1, 3, 7]); // 42

/* START SOLUTION
// Create a convenience function that sorts arrays ascending numerically
Array.prototype.sortAscending = function () {
  this.sort(function (a, b) {
    return a - b;
  });
  return this;
};
/* END SOLUTION

const largestProductOfThree = function (array) {
  // Make a copy of the input array and sort it numerically
  array = array.slice().sortAscending();

  var secondFromLast = array[array.length - 2],
    thirdFromLast = array[array.length - 3];

  return Math.max(
    array[array.length - 1] * secondFromLast * thirdFromLast,
    array[array.length - 1] * array[0] * array[1]
  );
}; */
