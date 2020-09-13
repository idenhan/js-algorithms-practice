const DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const translateRomanNumeral = function (romanNumeral) {
  if (typeof romanNumeral !== "string") {
    return null;
  }
  let result = 0;
  let splitedArr = romanNumeral.split("");
  for (let i = 0; i < splitedArr.length; i++) {
    if (
      i < splitedArr.length - 1 &&
      DIGIT_VALUES[splitedArr[i]] < DIGIT_VALUES[splitedArr[i + 1]]
    ) {
      result -= DIGIT_VALUES[splitedArr[i]];
    } else {
      result += DIGIT_VALUES[splitedArr[i]];
    }
  }
  return result;
};

/*
romanNumeralTranslator
로마 숫자가 주어졌을 때, 이 로마 숫자를 아라비아 숫자로 바꿔 출력하는 함수를 작성하세요.

예시:
translateRomanNumeral("LX"); // 60
로마 숫자에서는 큰 수 앞에 작은 수를 놓았을 때 큰 수에서 작은 수를 뺀 값을 표시한 것으로 판단합니다. (감산 표기법) 큰 수 앞에는 작은 수가 오직 하나만 올 수 있다고 가정합니다.

예시:
translateRomanNumeral("IV"); // 4
로마 숫자 이외의 것들이 인자로 주어졌을 때는 null을 리턴해야 합니다.
*/
