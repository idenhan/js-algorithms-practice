function greetCustomer(customerData, firstName) {
  let greeting = '';
  if (!customerData[firstName]) {
    greeting = 'Welcome! Is this your first time?';
  }
  else if (customerData[firstName] && customerData[firstName].visits === 1) {
    greeting = 'Welcome back, ' + firstName + '! We\'re glad you liked us the first time!';
  }
  else if (customerData[firstName] && customerData[firstName].visits === 2) {
    greeting = 'Welcome back, ' + firstName + '! So glad to see you again!';
  }
  return greeting;
}

let input = {
  Joe: {
    visits: 1
  },
  Carol: {
    visits: 2
  },
  Howard: {
    visits: 3
  },
  Carrie: {
    visits: 4
  }
};

let output = greetCustomer(input, 'Terrance');
console.log(output); // --> 'Welcome! Is this your first time?'
/* let output = greetCustomer(input, 'Joe');
console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'
let output = greetCustomer(input, 'Carol');
console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'
*/