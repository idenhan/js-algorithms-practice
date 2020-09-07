function thirdGreatest(arr) {
  arr.sort(function (a, b) {
    return b.length - a.length;
  });
  return arr[2];
}