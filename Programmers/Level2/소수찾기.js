function solution(numbers) {
  let answer = 0;
  let n = numbers.split('');
  let nums = new Set();
  permutation(n,'');
  function permutation(a, s) {
    if (s.length > 0) {
      if (nums.has(Number(s))=== false) {
        nums.add(Number(s));
        if (chkPrime(Number(s))) {
          answer++;
        }
      }
    }
    if (a.length > 0) {
      for (let i = 0; i< a.length; i++) {
        let t = a.slice(0)
        t.splice(i,1);
        console.log(t,s + a[i]);
        permutation(t,s + a[i]);
      }
    }
  }
  function chkPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num%i===0) return false;
      }
    return true;
  }
  return answer;
}


/*
문제 설명
한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.

각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

제한사항
numbers는 길이 1 이상 7 이하인 문자열입니다.
numbers는 0~9까지 숫자만으로 이루어져 있습니다.
013은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.
입출력 예
numbers	return
17	3
011	2
입출력 예 설명
예제 #1
[1, 7]으로는 소수 [7, 17, 71]를 만들 수 있습니다.

예제 #2
[0, 1, 1]으로는 소수 [11, 101]를 만들 수 있습니다.

11과 011은 같은 숫자로 취급합니다.
*/