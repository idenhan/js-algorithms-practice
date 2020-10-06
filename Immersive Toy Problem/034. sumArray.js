const sumArray = function (array) {
  let sums = [];
  const greatestSum = (x) => {
    let sum = 0;
    for (let i = x; i < array.length; i++) {
      sum += array[i];
      if (!sums[x] || sums[x] < sum) {
        sums[x] = sum;
      }
    }
    if (x === array.length - 1) {
      return;
    }
    greatestSum(x + 1);
  };
  greatestSum(0);
  return Math.max.apply(null, sums);
};

/* 숫자들의 배열이 주어졌을 때, 배열 안의 "연속되는" 원소들을 더해서 얻을 수 있는 최대 값을 계산하십시오.

단일 배열 원소도 "연속되는" 원소로 간주합니다.

참고로, 구현한 함수의 시간 복잡도는 O(n)이며 공간(메모리) 복잡도는 O(1)입니다.*/

sumArray([1, 2, 3]); // => 6

sumArray([1, 2, 3, -4]); // [1, 2, 3]의 합 === 6

sumArray([1, 2, 3, -4, 5]); // [1, 2, 3, -4, 5]의 합 === 7

sumArray([4, -1, 5]); // => [4, -1, 5]의 합 === 8

sumArray([10, -11, 11]); // => 11 (단일 배열 원소)
