let makeHashTable = function () {
  let result = {};
  let storage = [];
  let storageLimit = 4;
  let size = 0;
  result.insert = function () /*...*/

  {
    // TODO: 여기에 코드를 작성합니다.
  };

  result.retrieve = function () /*...*/

  {
    // TODO: 여기에 코드를 작성합니다.
  };

  result.remove = function () /*...*/

  {
    // TODO: 여기에 코드를 작성합니다.
  };

  return result;
};

// 아래는 '해쉬 함수 (hashing function)' 입니다. 건드리지 않고 사용만 하시면 됩니다.
// 주어진 문자열을 0 과 max - 1 사이에서 골고루 분포된 정수 하나로 변환된 값을 반환합니다.
const getIndexBelowMaxForKey = function (str, max) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

/*
insert(), retrieve(), 그리고 remove() 메서드(methods) 가
있는 해쉬 테이블(hash table) 을 작성해 주세요!

해쉬 충돌(hasing collisions) 들을 제대로 처리할 수 있도록 작성해 주세요.

해쉬 테이블의 자료가 저장 공간 배열의 3/4을 차지할 경우 저장 공간 한계를 두 배로 증가해야 합니다

예시 :
저장 공간 한계가 4일 때, 자료가 3이 되면 (3/4을 차지하므로) 한계를 8로 변경

마찬가지로 자료가 저장 공간의 1/4 이하로 줄어들 경우에는 저장 공간 한계를 반으로 줄여야 합니다

예시 :
저장 공간 한계가 8일 때, 자료가 3개에서 1개로 줄어들면 (1/4을 차지하므로) 한계를 4로 변경
*/