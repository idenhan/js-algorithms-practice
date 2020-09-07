const powerSet = function (str) {
  let result = [];
  if (str) {
    result.push("");
  }
  let recursion = function (prefix, str) {
    for (let i = 0; i < str.length; i++) {
      if (prefix !== str[i]) {
        // if statement satisfies the condition which
        // PowerSet should remove duplicates from the original set
        result.push(prefix + str[i]);
        recursion(prefix + str[i], str.slice(i + 1));
      }
    }
  };
  recursion("", str);
  return result;
};

powerSet("abc");
// [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
powerSet("jump");
// ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
