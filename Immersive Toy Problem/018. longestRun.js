const longestRun = function (string) {
  let result = [0, 0];
  let temp = [0, 0];
  for (let i = 1; i < string.length; i++) {
    if (string[i] !== string[i - 1]) {
      if (temp[1] - temp[0] > result[1] - result[0]) {
        result = temp;
      }
      temp = [i, i];
    } else {
      temp[1] = i;
    }
  }
  return result;
};

// 여러분들을 위해 무작위 문자열 생성기를 제공해 드리겠습니다!
// (해답을 작성하는 데 꼭 필요하진 않지만, 테스트할 때 유용할 것입니다)
const randomString = function (len) {
  let text = "";
  let possible = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

longestRun("abbbcc"); // [1, 3]
longestRun("aabbc"); // [0, 1]
longestRun("abcd"); // [0, 0]
