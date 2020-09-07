const longestRun = function(string) {
  // TODO: 여기에 코드를 작성합니다.
};

// 여러분들을 위해 무작위 문자열 생성기를 제공해 드리겠습니다!
// (해답을 작성하는 데 꼭 필요하진 않지만, 테스트할 때 유용할 것입니다)
var randomString = function(len) {
  var text = '';
  var possible = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

longestRun("abbbcc") // [1, 3]
longestRun("aabbc")  // [0, 1]
longestRun("abcd")   // [0, 0]
