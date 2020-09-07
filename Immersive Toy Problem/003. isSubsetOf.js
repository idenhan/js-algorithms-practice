Array.prototype.isSubsetOf = function (array) {
  for (let val of this) {
    if (!array.includes(val)) {
      return false;
    }
  }
  return true;
};

/* let a = ["commit", "push"];
a.isSubsetOf(["commit", "rebase", "push", "blame"]); // true
let b = ["merge", "reset", "reset"];
b.isSubsetOf(["reset", "merge", "add", "commit"]); // true */
