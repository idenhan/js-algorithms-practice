function dashInsert(string) {
  let result = '';

  for (let i = 0; i < string.length; i++) {
    result = result + string[i];

    if (string[i] % 2 && string[i + 1] % 2) {
      result = result + '-';
    }
  }

  return result;
}