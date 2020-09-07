function convertDoubleSpaceToSingle(str) {
  let result = str.split('  ');
  result = result.join(' ');
  return result;
}

let output = convertDoubleSpaceToSingle('string  with  double  spaces');
console.log(output); // --> "string with double spaces"