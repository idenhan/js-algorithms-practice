const compose = function () {
  let args = Array.from(arguments).reverse();
  return value => {
    return args.reduce((acc, curr) => curr(acc), value);
  }
}

const pipe = function () {
  let args = Array.from(arguments);
  return value => {
    return args.reduce((acc, curr) => curr(acc), value);
  }
}

let greet = function(name){ return 'hi: ' + name;}
let exclaim = function(statement) { return statement.toUpperCase() + '!';}
let welcome = compose(greet, exclaim);
welcome('phillip'); // 'hi: PHILLIP!'

let add2 = function (number) { return number + 2; }
let multiplyBy3 = function (number) { return number 3; }
pipe(add2, multiplyBy3)(5) // 21
pipe(add2, multiplyBy3, multiplyBy3)(5) // 63