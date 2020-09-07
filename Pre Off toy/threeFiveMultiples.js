function threeFiveMultiples(num) {
  let arr = [];

  for (let i = 0; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      arr.push(i);
    }
  }
  return arr.reduce((acc, cur) => {
    return acc + cur;
  });
}