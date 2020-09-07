function numberSearch(str) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= '1' && str[i] <= '9') {
      sum += parseInt(str[i]);
    } else if ((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z')) {
      count++;
    }
  }
  return Math.round(sum / count);
}