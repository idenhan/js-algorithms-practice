function BinaryHeap() {
  this._heap = [];
  // this compare function will result in a minHeap, use it to make comparisons between nodes in your solution
  this._compare = function (i, j) {
    return i < j;
  };
}

// This function works just fine and shouldn't be modified
BinaryHeap.prototype.getRoot = function () {
  return this._heap[0];
};

BinaryHeap.prototype.insert = function (value) {
  this._heap.push(value);
  function compareNumbers(a, b) {
    return a - b;
  }
  this._heap.sort(compareNumbers);
};

BinaryHeap.prototype.removeRoot = function () {
  if (!this._heap.length) {
    return undefined;
  }
  let removeOne = this._heap[0];
  this._heap = this._heap.slice(1);
  return removeOne;
};

/* 
이번 과제에서 여러분들이 구현하셔야 할 것은 "노드가 정수인 이진 최소 힙" 입니다. 
storage는 배열이며 getRoot 메소드는 이미 구현되어 있습니다.

O(log n) 시간 복잡도를 지니도록 insert 와 removeRoot 메소드를 구현하세요. 
이 메소드들은 BinaryHeap 객체에서 값을 추가하거나 제거하고, 변경된 값에 따라 내부 노드들을 정렬합니다. 
메소드들이 실행된 후에도, 부모/자식 노드들은 여전히 이진 힙의 조건을 만족해야 합니다. 자세한 것은 "배경 설명"을 참조하세요.

BinaryHeap 객체의 this._compare 메소드는 전달된 첫 번째 인자가 두 번째 인자보다 
작으면 true, 크면 false를 리턴합니다. 노드들을 비교할 때 사용하세요.

Advanced:
BinaryHeap 객체의 this._compare은 최소 힙을 구현하는 데 사용되도록 만들어져 있습니다. 
this._compare이 3번째 인자를 받아서 힙의 정렬 메커니즘을 구현할 수 있도록 만드세요. 
이 방식을 활용해 여러분이 BinaryHeap 객체로 최소 힙, 최대 힙을 구현할 수 있게 만드세요.

Nightmare:
heapSort 메소드를 구현하세요. heapSort 메소드는 배열을 인자로 받아서 정렬된 배열을 리턴합니다. 
먼저 heapSort 메소드는 주어진 배열을 BinaryHeap 객체로 재구성합니다. 그리고 BinaryHeap 객체의 
root 값을 제거하면 BinaryHeap 객체의 내부에서 노드들이 정렬되므로, BinaryHeap 객체가 빌 때까지 
root 값을 뽑아내면 결과적으로 정렬된 배열의 값들이 순차적으로 나오게 됩니다.

배경 설명
힙(Heap)은 부모 노드가 직계 자식과의 비교로 정렬되는 특성이 있는 트리 객체입니다. 
전체 트리가 정렬되는 이진 검색 트리와 달리 힙에서는 노드와 부모 사이의 순서만 보장됩니다.

이진 힙(Binary Heap)은 이진 트리의 형태를 지니는 힙입니다.

이번 과제에서 구현해야 할 것은 이진 힙의 종류 중 하나인 "이진 최소 힙(binary min heap)" 
입니다. 이진 최소 힙은 다음과 같은 특성이 있습니다.

한 노드는 최대 2개의 하위 노드만 가질 수 있습니다.
모든 노드에 자식이 2개 있어야, 가장 마지막에 추가된 노드들이 자식을 가질 수 있습니다.
모든 노드는, 자신의 하위 노드보다 작은 값을 지닙니다.
따라서 0번 노드는 1번과 2번 노드의 상위 노드가 되고, 1번 노드는 3번과 4번 노드의 상위 노드가 되며, 
2번 노드는 5번과 6번 노드의 상위 노드가 됩니다.

    0
   / \
  1   2
 / \ / \
3  4 5  6
이진 힙에 새로운 값을 넣을 때, 그 값이 들어갈 수 있는 곳은 오직 한 자리밖에 없습니다. 
위의 예에서, 7번째 값을 넣는다면 그 노드는 3의 첫 번째 자식으로 삽입됩니다.

      0
     / \
    1   2
   / \ / \
  3  4 5  6
 /
7
그리고 값을 하나 제거한다면, 7번째 노드가 제거됩니다. 이는 스택(Stack)의 동작과 비슷한데, 
이러한 로직을 통해 힙을 효율적으로 관리할 수 있습니다. 그러므로 힙은 항상 마지막 자리에 값이 
추가되거나 제거되는 배열으로 표현될 수 있게 됩니다. (자바스크립트 코드 안에서 말이죠!)

예를 들어, 위의 힙은 이런 배열 형태로 표현 가능합니다.

[0, 1, 2, 3, 4, 5, 6, 7];
배열으로 표현된 이진 힙의 장점은 인덱스 숫자를 사용하여 노드의 부모 혹은 자식 인덱스를 계산할 수 있다는 것입니다.

parentIndex = Math.floor((index - 1) / 2);
childrenIndices = [index * 2 + 1, index * 2 + 2];
이진 힙에 새로운 노드를 추가할 때, 이 새로운 노드의 값이 추가된 부모 노드의 값보다 작다면, 
이진 힙의 속성에 맞지 않게 됩니다. 이 경우 이진 힙의 속성에 맞지 않기 때문에 
다음과 같은 작업을 통해서 노드들의 위치를 수정해야 합니다.

부모 노드의 값이 신규 노드의 값보다 작다면, 신규 노드와 부모 노드의 위치를 서로 바꿉니다.
바뀐 부모 노드의 값이 신규 노드보다 작을 때까지 계속해서 반복합니다.
또한 루트 노드를 제거할 때도 비슷한 일이 일어납니다. 위에서 설명한 것처럼, 
이진 힙은 배열의 끝에서만 값을 제거할 수 있기 때문입니다.

마지막 노드와 루트 노드의 위치를 바꾸고, 루트 노드를 제거합니다. (마지막 노드는 새로운 루트 노드가 됩니다)
새로운 루트 노드의 값을 자식 노드와 비교하고, 자식 노드가 더 작다면 서로 위치를 바꿉니다.
자신보다 큰 값을 가진 자식 노드를 가지게 될 때까지 계속해서 반복합니다.
https://www.cs.usfca.edu/~galles/visualization/Heap.html

이진 힙의 훌륭한 시각화 자료 하나를 제공해 드리겠습니다. 
한번 값을 삽입하고 제거하면서, 이진 힙이 어떻게 작동하는지 이해해 보세요.
*/
