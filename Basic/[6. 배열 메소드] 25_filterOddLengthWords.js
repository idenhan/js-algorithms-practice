function filterOddLengthWords(arr) {
  return arr.filter(function (element) {
    return (element.length % 2 !== 0);
  })
}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']