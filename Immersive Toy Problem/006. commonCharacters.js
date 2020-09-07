// 두 개의 문자열을 매개변수로 받아 공통으로 가지고 있는 문자를
// 순서대로 return하는 함수를 작성하세요. (공백, 중복 제외)

const commonCharacters = function (string1, string2) {
  // Separate out multiple input strings
  let otherStrings = Array.prototype.slice.call(arguments, 1);

  // Use reduce to iterate over all collections of letters, narrowing down the pool of common characters.
  // Go look at the helper functions and figure out what they do!
  common = otherStrings.reduce(function (obj, string) {
    obj = intersection(obj, objectify(string));
    return obj;
  }, objectify(string1)); // An object representing all characters in string1 is passed in as a starting value

  // use reduce to create a string representing all common chars in the order seen in string1, and return it!
  return string1.split("").reduce(function (result, char) {
    if (common[char]) {
      result += char;
      common[char] = false;
    }
    return result;
  }, "");
};

// HELPER FUNCTIONS!

// Given two objects, intersection() uses reduce to create an object with only the common keys
let intersection = function (set1, set2) {
  return Object.keys(set1).reduce(function (out, val) {
    if (val in set2) {
      out[val] = true;
    }
    return out;
  }, {});
};

// Takes a string and makes an object with each  alphabetical character in the string represented by a key with the value 'true'
let objectify = function (string) {
  return string.split("").reduce(function (obj, char) {
    // this simple regex matches only alphabetical characters of either case
    if (char.match(/[a-z]/i)) {
      obj[char] = true;
    }
    return obj;
  }, {});
};

commonCharacters("acexivou", "aegihobu"); //결과 : 'aeiou'
