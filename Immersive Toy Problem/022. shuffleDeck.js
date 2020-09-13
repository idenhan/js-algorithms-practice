const shuffleDeck = function (deck) {
  const swap = (a, b) => {
    let temp = deck[a];
    deck[a] = deck[b];
    deck[b] = temp;
  };
  for (let i = 0; i < deck.length; i++) {
    let pick = i + Math.floor(Math.random() * (deck.length - i));
    swap(i, pick);
  }
  return deck;
};

// 테스트의 편의를 위해 "정렬 상태 카드덱 생성기"를 제공해 드리겠습니다!
// (이 함수를 마음껏 변경하셔도 됩니다. 이 함수의 원본이 테스트 파일에도 또 있으니까요)
const orderedDeck = function () {
  let suits = ["♥", "♣", "♠", "♦"];
  let values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let deck = [];

  suits.forEach(function (suit) {
    values.forEach(function (value) {
      deck.push(value + suit);
    });
  });

  return deck;
};

/*
shuffleDeck
트럼프 카드로 이루어진 배열이 주어졌을 때, 그 카드들을 섞는 함수를 작성하세요.

예시:

const deck = orderedDeck();
// ["A♥","2♥","3♥",...,"J♦","Q♦","K♦"]
shuffleDeck(deck);
// ["2♠","J♣","A♦", ... ,"7♣","8♣","K♠"]
참고: 카드 덱은 완전히 무작위로 섞여져야 합니다. 즉 주어진 모든 카드는 각자 입력되었을 때 가지고 있던 인덱스와 상관없는 완전히 독립적인 인덱스 번호에 해당하는 자리에 나타날 가능성이 있어야 합니다. 여러분의 알고리즘은 덱을 제대로 섞고 있나요? 알고리즘 편향이 일어나고 있진 않나요?

Advanced:

아주 간단한 알고리즘조차도 선형적인(linear time) 시간 복잡도를 가집니다. 여러분의 알고리즘은 배열이 N만큼 늘어나도 여전히 비편향을 유지할 수 있나요?
선형적인 시간 복잡도를 가지는 비편향적인 무작위 알고리즘을 만드는 데 성공했다면, 공간 복잡도(https://en.wikipedia.org/wiki/Space_complexity)를 한번 생각해 보시겠어요? O(N) 시간 복잡도와 O(1) 공간 복잡도를 가지는 알고리즘을 한번 설계해 보세요.
무작위성에 대한 참고 설명: 컴퓨터가 만드는 난수는 주로 의사난수일 가능성이 높습니다. (의사난수 : https://ko.wikipedia.org/wiki/%EC%9C%A0%EC%82%AC%EB%82%9C%EC%88%98 , https://ko.wikipedia.org/wiki/%EB%82%9C%EC%88%98) 정말 무작위로 정해진 난수와 의사난수의 차이점은 아주 작아서 테스트로 판별하기가 어렵습니다. 그러나 차이점은 있습니다. 여러분은 주로 Math.random()을 이용해서 난수를 생성하셨을 것입니다. 이 함수는 현재 시간 millisecond를 이용해서 난수를 생성하기 때문에 컴퓨터 시간을 난수를 생성했던 시간으로 되돌릴 경우 이전과 똑같은 난수를 생성하게 됩니다.
*/
