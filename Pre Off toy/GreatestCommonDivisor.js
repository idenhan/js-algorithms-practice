function gcd(num1, num2) {
  return num2 ? gcd(num2, num1 % num2) : num1;
}
gcd(22, 24) // 2