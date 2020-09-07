function getFullName(firstName, lastName) {
  if (typeof firstName === "string" && typeof lastName === "string") {
    return firstName + " " + lastName;
  }
}

let output = getFullName("Joe", "Smith");
console.log(output); // --> 'Joe Smith'
