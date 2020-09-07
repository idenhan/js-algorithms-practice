function checkAge(name, age) {
  
  if (age >= 21) {
    return ('Welcome, ' + name + '!');
  }
  else {
    return ('Go home, ' + name + '!');
  }
}

let output = checkAge('Adrian', 22);
console.log(output);

let output2 = checkAge('John', 17);
console.log(output2);