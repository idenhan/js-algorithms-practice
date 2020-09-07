const rotatedArraySearch = function (rotated, target) {
  for (let i = 0; i < rotated.length; i++) {
    if (rotated[i] === target) {
      return i;
    }
  }
  return null;
};

rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5;
rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null;
