function addObjectProperty(obj1, propertyName, obj2) {
  return (obj1[propertyName] = obj2);
}

let person1 = {
  name: "Joe",
  role: "Team Member",
};
let person2 = {
  name: "Steve",
  role: "CEO",
};

addObjectProperty(person1, "manager", person2);
console.log(person1.manager);
/*
{
  name: 'Steve',
  role: 'CEO'
}
*/
