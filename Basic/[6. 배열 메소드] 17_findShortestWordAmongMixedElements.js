function findShortestWordAmongMixedElements(arr) {
  if (arr.length === 0) {
    return '';
  }
  return arr.reduce((acc, val) => {
    if (typeof acc !== 'string') {
      if (typeof val === 'string') {
        return val;
      }
      return '';
    }
    if (typeof val === 'string') {
      if (val.length < acc.length) {
        return val;
      }
      return acc;
    }
    return acc;
  })
}

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'