const phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ',
};

// TODO: return every combination that can be spelled on a phone with these digits
const telephoneWords = function (digitString) {
  let wordsArr = [];
  const addDigitLetter = (letter, digit) => {
    if (letter.length === digitString.length) {
      wordsArr.push(letter);
      return;
    }
    let digitLetter = phoneDigitsToLetters[digitString[digit]];
    for (let i = 0; i < digitLetter.length; i++) {
      addDigitLetter(letter + digitLetter[i], digit + 1);
    }
  };
  addDigitLetter("", 0);
  return wordsArr;
};

/* 
일반적으로 여러분들이 쓰는 휴대전화 키패드는 각 숫자 키마다 대응되는 라틴 문자들을 가지고 있습니다. (무슨 소리냐고요? 다음 그림을 참고하세요!)

가끔 어떤 기업들은, 사람들이 기업의 전화번호를 더 잘 기억할 수 있게 특정한 철자를 전화번호로 설정하는 경우가 있습니다. 기업 이름 같은 것 말이죠!
여러분이 구현하실 함수는 4자리의 전화번호를 받아, 키패드에서 그 번호에 해당하는 철자의 경우수들을 조합한 모든 단어를 반환해야 합니다.

예시:
telephoneWords('2745');

// 2: 'A', 'B', 'C'
// 7: 'P', 'Q', 'R', 'S'
// 4: 'G', 'H', 'I'
// 5: 'J', 'K', 'L'

// 실행 결과 : ['APGJ', 'APGK', 'APGL', ... 'CSIL']
참고:
전화번호는 문자열입니다. (전화번호는 0으로 시작할 수 있습니다)
0과 1은 연관된 키패드의 철자가 없으므로 숫자로 남겨두어야 합니다.
전화번호의 숫자 순서를 유지하세요. (철자로 변환한 후 순서를 무시한 채로 모든 조합을 돌리지 마세요!)
Advanced:
macOS에는 사전상의 모든 영단어가 들어 있는 /usr/share/dict/words 라는 파일이 존재합니다.
이 파일을 이용해서, 여러분이 구현한 함수가 만들어낸 단어 중 실제 뜻이 있는 영단어인 것들만 필터링해 보세요!
*/
