const Stack = function () {
  let storage = [];
  let length = 0;

  // add an item to the top of the stack
  this.push = function () {
    storage[length++] = arguments[0];
  };

  // remove an item from the top of the stack
  this.pop = function () {
    if (length) {
      let value = storage[--length];
      delete storage[length];
      return value;
    }
  };

  // return the number of items in the stack
  this.size = function () {
    return length;
  };
};

/**
 * Queue Class
 */
const Queue = function () {
  // Use two `stack` instances to implement your `queue` Class
  const inbox = new Stack();
  const outbox = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function () {
    inbox.push.apply(inbox, arguments);
    // TODO: implement `enqueue`
  };

  // called to remove an item from the `queue`
  this.dequeue = function () {
    if (outbox.size() === 0) {
      while (inbox.size() !== 0) {
        outbox.push(inbox.pop());
      }
    }
    return outbox.pop();
    // TODO: implement `dequeue`
  };

  // should return the number of items in the queue
  this.size = function () {
    return inbox.size() + outbox.size();
    // TODO: implement `size`
  };
};

/* 
원하는 instantiation 패턴을 이용해서 Stack을 구현하세요. (pseudoclassical, es6 등...) 
자바스크립트 기본 배열 메소드를 사용하지 마세요! (예: push, pop, length 등...) 
Stack 구현이 끝나면, 2개의 Stack을 이용해서 Queue도 구현해 보세요.
*/
