function printObject(obj) {
  let result = "";

  for (let i in obj) {
    result = result + i + ": " + obj[i] + "\n";
  }
  return result;
}

let obj = { name: "Steve", age: 13, sex: "Male" };
let output = printObject(obj);
console.log(output);
/*
name: Steve
age: 13
sex: Male
*/
