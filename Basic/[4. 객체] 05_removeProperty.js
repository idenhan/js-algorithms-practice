function removeProperty(obj, propertyName) {
  return delete obj[propertyName];
}

let obj = {
  name: "Sam",
  age: 20,
};
removeProperty(obj, "name");
console.log(obj.name); // --> undefined
