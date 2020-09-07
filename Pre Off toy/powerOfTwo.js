function powerOfTwo(num) {
  return (Math.log(num) / Math.log(2)) % 1 === 0;
}
powerOfTwo(16) // true
powerOfTwo(22) // false