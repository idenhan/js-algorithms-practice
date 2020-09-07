function findMinByBracket(str) {
  let devidedPattern = /-|[\w\+]+/g;
  /* “-”이거나 “[\w\+]+”이면 추출
  [\w\+]+의 의미는 character나 +를 추출하는데 그 갯수는 1~多
  그러므로 -는 하나를 추출하고 나머지 식은 -를 만나기전까지 추출 */

  let devidedStrArray = str.match(devidedPattern);

  for (let i = 0; i < devidedStrArray.length; i++) {
    if (devidedStrArray[i] !== '-') {
      devidedStrArray[i] = '(' + devidedStrArray[i] + ')';
    }
  }
  return eval(devidedStrArray.join(''));
}
findMinByBracket('55-50+40') // -35