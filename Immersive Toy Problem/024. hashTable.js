const makeHashTable = function () {
  let result = {};
  let storage = [];
  let storageLimit = 1000;
  let size = 0;

  result.insert = function (key, value) {
    let index = getIndexBelowMaxForKey(key, storageLimit);
    if (storage[index]) {
      storage[index][key] = value;
    } else {
      storage[index] = {};
      storage[index][key] = value;
      size++;
    }
    if (size >= (storageLimit * 3) / 4) {
      storageLimit *= 2;
    }
  };
  result.retrieve = function (key) {
    let index = getIndexBelowMaxForKey(key, storageLimit);
    if (storage[index]) {
      let value = storage[index][key];
      return value;
    }
    return undefined;
  };
  result.remove = function (key) {
    let index = getIndexBelowMaxForKey(key, storageLimit);
    delete storage[index][key];
    if (storage[index] === {}) {
      size--;
      storage[index] === undefined;
    }
    if (size < storageLimit / 4) {
      storageLimit /= 4;
    }
  };
  return result;
};

// 이 함수는 "해시 함수" 입니다. 지금은 이 함수에 대해 걱정할 필요가 없습니다.
// 해시 함수는 문자열과 숫자 max를 인자로 받아, 문자열을 0에서 max-1 사이에 분포된 정수로 바꿔 리턴합니다.
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
insert(), retrieve(), remove() 메소드를 가진 해시 테이블을 만드세요. 
resize를 구현하지 않아도 테스트는 통과하지만, 충돌은 처리할 수 있어야 합니다.
*/
