function firstReverse(str) {
  let reservedStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reservedStr += str[i];
  }
  return reservedStr;
}
/* Reference
return str.spli(').reverse().join(); */

firstReverse("codestates"); // "setatsedoc"
firstReverse("I love codestates"); // "setatsedoc evol I"