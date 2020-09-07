function findMaxOnMultiplesOfThirty(num) {
  let sum = 0;
  let str = String(num);
  let splitStr = str.split('');

  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }
  if (str.includes(0) === false || str % 3 !== 0) {
    return -1;
  } else if (str.includes(0) === true || str % 3 === 0) {
    splitStr.sort(function (a, b) {
      return b - a;
    });
    return Number(splitStr.join(''));
  }
}