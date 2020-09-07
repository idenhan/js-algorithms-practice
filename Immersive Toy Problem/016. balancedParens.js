const balancedParens = function (input) {
  let parens = ["(", ")", "[", "]", "{", "}"];
  let parensOnly = input
    .split("")
    .filter((char) => parens.includes(char))
    .join("");
  let isBalanced = true;
  const parensFilter = (str) => {
    if (str.includes("()")) {
      let filteredStr = str.split("()").join("");
      parensFilter(filteredStr);
    } else if (str.includes("[]")) {
      let filteredStr = str.split("[]").join("");
      parensFilter(filteredStr);
    } else if (str.includes("{}")) {
      let filteredStr = str.split("{}").join("");
      parensFilter(filteredStr);
    } else if (str.length > 0) {
      isBalanced = false;
      return;
    } else {
      return;
    }
  };
  parensFilter(parensOnly);
  return isBalanced;
};

/* 
balancedParens('(');  // false
balancedParens('()'); // true
balancedParens(')(');  // false
balancedParens('(())');  // true

balancedParens('[](){}'); // true
balancedParens('[({})]');   // true
balancedParens('[(]{)}'); // false

balancedParens(' let wow  = { yo: thisIsAwesome() }'); // true
balancedParens(' let hubble = function() { telescopes.awesome();'); // false
*/
