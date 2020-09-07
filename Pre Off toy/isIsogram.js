let isIsogram = function (str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str.indexOf(str[i], i + 1) !== - 1) {
      return false;
    }
    return true;
  }
}
isIsogram("Dermatoglyphics"); // true
isIsogram("aba"); // false
isIsogram("moOse"); // false // -- ignore letter case