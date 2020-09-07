function getType(anything) {
  if (Array.isArray(anything)) {
    return "array";
  } else {
    return typeof anything;
  }
}

let output = getType("hello");
console.log(output); // --> 'string'

let output2 = getType(10);
console.log(output2); // --> 'number'

let output3 = getType(true);
console.log(output3); // --> 'boolean'

let output4 = getType({ name: "Steve" });
console.log(output4); // --> 'object'

let output5 = getType([100, 200, 300]);
console.log(output5); // --> 'array'
