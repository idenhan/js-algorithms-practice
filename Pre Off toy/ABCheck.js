function ABCheck(str) {
  if (str === undefined) {
    return false;
  }
  let newStr = str.toLowerCase();
  for (let i = 0; i < newStr; i++) {
    if ((newStr[i] === 'a' && newStr[i + 4] === 'b') || (newStr[i] === 'b' && newStr[i + 4] === 'a')) {
      return true;
    }
  }
  return false;
}