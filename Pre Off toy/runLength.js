function runLength(str) {
  let i = 0;
  let rle = "";
  while (i < str.length) {
    let c = str[i];
    let j = i + 1;
    let compressed = [1, c];

    while (j < str.length) {
      if (str[j] === c) {
        compressed[0] += 1;
      } else {
        break;
      }
      j++;
    }

    rle += compressed.join('');
    i = j;
  }
  return rle;
}