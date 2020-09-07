function letterCapitalize(str) {
  let newStr = str.split(' ');

  for (let i = 0; i < newStr.length; i++) {
    newStr[i] = newStr[i][0].toUpperCase() + newStr[i].substr(1);
  }
  str = newStr.join(' ');

  return str;
}
letterCapitalize("hello world"); // "Hello World"
letterCapitalize("javascript is sexy") // "Javascript Is Sexy"