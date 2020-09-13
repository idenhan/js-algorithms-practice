const LinkedList = function () {
  this.stroage = {};
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.addToTail = function (value) {
  let newTail = this.makeNode(value);
  const addTail = (node) => {
    if (node.next) {
      addTail(node.next);
    } else {
      node.next = newTail;
    }
  };
  if (this.tail) {
    addTail(this.storage);
    this.tail = newTail;
  } else {
    this.storage = newTail;
    this.head = newTail;
    this.tail = newTail;
  }
};

LinkedList.prototype.removeHead = function () {
  if (!this.storage.next) {
    this.storage = {};
    this.head = null;
    this.tail = null;
  } else {
    let newHead = this.storage.next;
    this.head = newHead;
    this.storage = newHead;
  }
};

LinkedList.prototype.contains = function (target) {
  let isContained = false;
  const retrieve = (node) => {
    if (node.value === target) {
      isContained = true;
      return;
    } else if (!node.next) {
      return;
    } else {
      retrieve(node.next);
    }
  };
  retrieve(this.storage);
  return isContained;
};

LinkedList.prototype.makeNode = function (value) {
  let node = {
    value: value,
    next: null,
  };
  return node;
};

/*
연결 리스트를 pseudoclassical 방식으로 구현하세요.

여러분의 연결 리스트는 "addToTail", "removeHead", "contains" 메소드를 가져야 합니다.

메소드 사용 예시:

let list = new LinkedList();
list.tail; // 'null'
list.addToTail(4);
list.addToTail(5);
list.head.value; // '4';
list.contains(5); // 'true';
list.contains(6); // 'false';
list.removeHead(); // '4'
list.tail.value; // '5';
*/
