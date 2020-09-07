function or(expression1, expression2) {
  if (typeof expression1 === "boolean" && typeof expression2 === "boolean") {
    if (expression1 !== expression2) {
      return true;
    } else if (expression1 === true && expression2 === true) {
      return true;
    } else {
      return false;
    }
  }
}

let output = or(true, false);
console.log(output);
