function addProperty(obj, propertyName) {
  return (obj[propertyName] = true);
}

let steve = [];
addProperty(steve, "isMale");
console.log(steve.isMale); // --> true

addProperty(steve, "isProgrammer");
console.log(steve.isProgrammer); // --> true

let jessica = {};
addProperty(jessica, "isSmart");
console.log(jessica.isSmart); // --> true
