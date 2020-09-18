const testingTransform = (array) => {
  const transform = [];

  for (let i = 0; i < array.length; i++)
    transform.push({ value: array[i], i: i });

  return transform;
};

const sortInAscending = (a, b) => {
  if (a.value !== b.value) {
    return a.value - b.value;
  } else {
    return a.i - b.i;
  }
};

var insertionSort = function (array) {
  let args = Array.from(arguments);
  if (args[1]) {
    array.sort(args[1]);
  } else {
    array.sort(sortInAscending);
  }
  return array;
};

/* 
삽입 정렬은 기본 정렬 알고리즘 중의 하나입니다.
삽입 정렬은 배열을 반복하여, 반복 중인 현재 위치 뒤에 정렬된 원소들을 위치시킵니다.

주어진 배열을 반복하면서, 정렬되지 않은 부분 중 첫 번째 원소를 선택합니다.
이 원소는 다른 배열의 원소와 비교된 후, "적절한 위치"에 넣어집니다.
이때 비교되는 원소들은 이미 정렬된 상태의 배열 부분의 원소입니다.

삽입 정렬은 안정적인 정렬이어야 합니다. 이는 값이 같은 원소들도 처음에 들어왔을 때와
같은 순서를 유지해야 함을 의미합니다. 숫자와 같은 원시 타입은 그 순서를 확인할 수 없지만,
객체의 배열(array of objects)과 같은 경우 순서를 유지시켜 정렬하는지 확인할 것입니다.
예시:

// 입력
[{ value: 10 }, { value: 5, order: 1 }, { value: 5, order: 2 }]
// 리턴값
[({ value: 5, order: 1 }, { value: 5, order: 2 }, { value: 10 })];
*/
