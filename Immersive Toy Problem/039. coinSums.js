const coins = [1, 2, 5, 10, 20, 50, 100, 200];

const makeChange = function (total) {
  let count = 0;
  const makeSum = (leftSum, index) => {
    if (index === 0) {
      if (leftSum >= 0) {
        count++;
      }
      return;
    }
    while (leftSum >=0) {
      makeSum(leftSum, index - 1);
      leftSum -= coins[index];
    }
  };
  makeSum(total, coins.length - 1);
  return count;
};

/*
영국의 화폐는 파운드 £, 펜스 p로 이루어져 있으며, 총 8개의 동전이 유통됩니다.

1p 페니
2p 2펜스
5p 5펜스
10p 10펜스
20p 20펜스
50p 50펜스
£1 1파운드 (100펜스)
£2 2파운드 (200펜스)

2파운드는 다음의 방식으로 만들 수 있습니다.

1 x £1 + 1 x 50p + 2 x 20p + 1 x 5p + 1 x 2p + 3 x 1p

8개의 동전으로 2파운드를 만들 수 있는 서로 다른 가짓수들이 얼마나 될까요?

makeChange 함수의 사용 예시:

1페니를 만들 수 있는 방법은 오직 1페니 동전 하나밖에 없습니다.

makeChange(1) === 1;
2펜스는 2펜스 동전 하나, 혹은 1페니 동전 2개로 만들 수 있습니다.

makeChange(2) === 2;
*/