function getProperty(obj, propertyName) {
  return obj[propertyName];
}

let person = {
  name: "Steve",
  age: 16,
};
let output = getProperty(person, "name");
console.log(output); // --> 'Steve'

let output2 = getProperty(person, "age"); // --> 16
