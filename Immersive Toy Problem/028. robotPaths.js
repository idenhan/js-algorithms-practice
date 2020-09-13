const makeBoard = function (n) {
  let board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function (i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function (i, j) {
    return !!this[i][j];
  };
  return board;
};

const robotPaths = function (n, board, i, j) {
  // Initialize these if not provided
  if (!board) {
    board = makeBoard(n);
    i = 0;
    j = 0;
  }
  // No possible paths if you’re off the board
  // or on a piece you shouldn’t be on
  if (!(i >= 0 && i < n && j >= 0 && j < n) || board.hasBeenVisited(i, j)) {
    return 0;
  }
  // One possible path if you’re at the
  // end point (the path that led there)
  if (i === n - 1 && j === n - 1) return 1;
  board.togglePiece(i, j);
  let result =
    robotPaths(n, board, i, j + 1) +
    robotPaths(n, board, i, j - 1) +
    robotPaths(n, board, i + 1, j) +
    robotPaths(n, board, i - 1, j);
  // !!Return the board to its original state!!
  // Toggling the piece back to its original state
  // is vital to this solution, as it allows the
  // algorithm to 'backtrack' from this position for
  // subsequent recursive calls.
  board.togglePiece(i, j);
  return result;
};

/*
5x5 격자의 맨 위 왼쪽 모서리에 있는 로봇이, 맨 아래 오른쪽 모서리로 이동하려고 합니다.
로봇은 위, 아래, 왼쪽, 오른쪽으로 이동할 수 있지만, 같은 장소를 두 번 방문할 수는 없습니다.
로봇이 맨 아래 오른쪽 모서리로 이동할 수 있는 경로의 총 가짓수를 구해 보세요. 경로에 중복이 있어선 안 됩니다!
격자의 크기에 상관없이 당신의 코드가 정답을 찾아내도록 만들어 보세요.
(NxN 격자를 만들 수 있는 makeBoard 함수를 제공해 드리겠습니다!)
*/
