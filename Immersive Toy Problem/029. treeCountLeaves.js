const Tree = function (value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.countLeaves = function () {
  let count = 0;
  const countChildren = (node) => {
    if (node.children.length === 0) {
      count++;
      return;
    }
    for (let i = 0; i < node.children.length; i++) {
      countChildren(node.children[i]);
    }
  };
  countChildren(this);
  return count;
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
    throw new Error("That child is already a child of this tree");
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
    throw new Error("That node is not an immediate child of this tree");
  }
};

/*
Tree 객체 안에 countLeaves 메소드를 구현하세요.

잎 노드(leaf node)는 트리 객체에서 자식 노드가 없는 노드를 지칭합니다. 
countLeaves 메소드는 트리 객체를 순회하여 트리가 가지고 있는 잎 노드의 개수를 리턴합니다.

2개의 잎 노드를 가진 트리 객체의 예시:

   1 <- root
  / \
 2   3 <- leaf
/
4  <- leaf
참고로, 루트 노드도 자식 노드가 없다면 잎 노드가 될 수 있습니다!

예시:

var root = new Tree();
root.countLeaves(); // 1
root.addChild(new Tree());
root.countLeaves(); // still 1
root.addChild(new Tree());
root.children[0].addChild(new Tree());
root.children[0].addChild(new Tree());
root.children[0].children[0].addChild(new Tree());
root.countLeaves(); // 3
*/
