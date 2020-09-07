function firstCharacter(str) {
  let initials = '';
  let newStr = str.split(' ');
  for (let i = 0; i < newStr.length; i++) {
    initials += newStr[i][0];
  }
  return initials;
}
firstCharacter("The community at Code States might be the biggest asset"); // => "TcaCSmbtba"