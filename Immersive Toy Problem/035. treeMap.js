const Tree = function (value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.map = function (callback) {
  const retreiveTree = (node, newTree) => {
    if (node.children.length === 0) {
      return;
    }
    for (let i = 0; i < node.children.length; i++) {
      let newChild = new Tree(callback(node.children[i].value));
      newTree.children.push(newChild);
      retreiveTree(node.children[i], newTree.children[i]);
    }
  };
  let newTree = new Tree(callback(this.value));
  retreiveTree(this, newTree);
  return newTree;
};

Tree.prototype.mapInPlace = function (callback) {
  const retreiveTree = (node) => {
    node.value = callback(node.value);
    if (node.children.length > 0) {
      for (let i = 0; i < node.children.length; i++) {
        retreiveTree(node.children[i]);
      }
    } else return;
  };
  retreiveTree(this);
  return this;
};

/**
 * 이 밑의 코드들을 수정할 필요는 없습니다. 그러나 마음껏 참고하셔도 됩니다!
 */

/**
 * child를 추가합니다.
 * (Tree가 아닌 값이 들어올 경우, Tree 객체로 변환 후 추가합니다)
 */
Tree.prototype.addChild = function (child) {
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child);
  }

  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  // 편의를 위해 추가된 child node를 return합니다.
  return child;
};

/**
 * 주어진 tree가 이미 해당 tree 혹은 sub tree의 child인지 확인합니다.
 */
Tree.prototype.isDescendant = function (child) {
  if (this.children.indexOf(child) !== -1) {
    // `child`는 해당 트리와 연결된 하위 노드를 의미합니다.
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        return true;
      }
    }
    return false;
  }
};

/**
 * child를 삭제합니다.
 */
Tree.prototype.removeChild = function (child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // child를 삭제합니다.
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};

/* 
Tree 클래스 객체의 map 메소드를 구현하세요.

map 메소드는 매핑 함수를 인자로 받은 다음, Tree 객체를 반복하여
각 노드의 value가 매핑 함수에 전달된 결과를 value로 하는 새 Tree를 생성합니다.

즉, map은 기존 Tree와 같은 구조, 다른 값을 가진 Tree를 반환해야 합니다. (이 과정에서 기존 Tree를 수정하면 안 됩니다!)

예시:

let root1 = new Tree(1);
let branch2 = root1.addChild(2);
let branch3 = root1.addChild(3);
let leaf4 = branch2.addChild(4);
let leaf5 = branch2.addChild(5);
let leaf6 = branch3.addChild(6);
let leaf7 = branch3.addChild(7);
let newTree = root1.map(function (value) {
  return value * 2;
});
newTree.value; // 2
newTree.children[0].value; // 4
newTree.children[1].value; // 6
newTree.children[0].children[1].value; // 10
newTree.children[1].children[1].value; // 14
root1.value; // 여전히 1
*/
