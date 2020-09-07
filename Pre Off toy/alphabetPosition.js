let alphabetPosition = function (str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    let code = str.toUpperCase().charCodeAt(i);
    if (code > 64 && code < 91) {
      result += (code - 64) + ' ';
    }
  }
  return result.slice(0, result.length - 1);
}
alphabetPosition("The sunset sets at twelve o' clock."); // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"