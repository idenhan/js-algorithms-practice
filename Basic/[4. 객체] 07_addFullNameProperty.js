function addFullNameProperty(obj) {
  obj.fullName = obj.firstName + " " + obj.lastName;
}

let person = {
  firstName: "Jade",
  lastName: "Smith",
};
addFullNameProperty(person);
console.log(person.fullName); // --> 'Jade Smith'
