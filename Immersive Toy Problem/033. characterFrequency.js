const characterFrequency = function (string) {
  let arr = string.split("").sort();
  let result = [];
  let temp = [arr[0], 1];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      temp[1] += 1;
    } else {
      result.push(temp);
      temp = [arr[i + 1], 1];
    }
  }

  result.sort((a, b) => {
    if (a[1] > b[1]) return -1;
    if (a[1] < b[1]) return 1;
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
  });
  return result;
};

/* 문자열을 받아서 그 문자열 안의 문자들을 똑같은 문자가 나오는 빈도수에 따라
"문자", "빈도수" 형식의 원소로 만들고, 그 원소들을 빈도수가 많은 순서대로 정렬한 배열을 리턴하세요.

예시:

characterFrequency('mississippi');

  [
    ["i", 4],
    ["s", 4],
    ["p", 2],
    ["m", 1]
  ];

characterFrequency('miaaiaaippi');

  [
    ["a", 4],
    ["i", 4],
    ["p", 2],
    ["m", 1]
  ];


characterFrequency('mmmaaaiiibbb');

  [
    ["a", 3],
    ["b", 3],
    ["i", 3],
    ["m", 3]
  ];

13141516121110917181920212223
const characterFrequency = function (string) {
  let arr = string.split("").sort();
  let result = [];
  let temp = [arr[0], 1];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i+1]) {
      temp[1] += 1;
    } else {
      result.push(temp);
…  return result;
};

실행 결과
테스트 결과가 없습니다. */
