const bind = function (func, context, ...args) {
  return function () {
    return func.apply(context, [...args, ...arguments])
  }
};
Function.prototype.bind = function (context, ...args) {
  let that = this;
  return function () {
    return that.apply(context, [...args, ...arguments])
  };
};

/*서로 다른 방식 2개로 bind 함수를 구현하세요.

function bind()
예시 1:

let alice = {
  name: 'alice',
  shout: function () {
    alert(this.name);
  },
};
let boundShout = bind(alice.shout, alice);
boundShout(); // alerts 'alice'
boundShout = bind(alice.shout, { name: 'bob' });
boundShout(); // alerts 'bob'
예시 2:

let func = function (a, b) {
  return a + b;
};
let boundFunc = bind(func, null, 'foo');
let result = boundFunc('bar');
result === 'foobar'; // true
Function.prototype.bind
예시 1:

let alice = {
  name: 'alice',
  shout: function () {
    alert(this.name);
  },
};
let boundShout = alice.shout.bind(alice);
boundShout(); // alerts 'alice'
boundShout = alice.shout.bind({ name: 'bob' });
boundShout(); // alerts 'bob'
예시 2:

let func = function (a, b) {
  return a + b;
};
let boundFunc = func.bind(null, 'foo');
let result = boundFunc('bar');
result === 'foobar'; // true
*/
