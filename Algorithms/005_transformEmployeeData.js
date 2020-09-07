function transformEmployeeData(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let info = {};
    for (let j = 0; j < array[i].length; j++) {
      info[array[i][j][0]] = array[i][j][1];
    }
    result.push(info);
  }
  return result;
}

let input = [
  [
    ['firstName', 'Joe'],
    ['lastName', 'Blow'],
    ['age', 42],
    ['role', 'clerk']
  ],
  [
    ['firstName', 'Mary'],
    ['lastName', 'Jenkins'],
    ['age', 36],
    ['role', 'manager']
  ]
];

let output = transformEmployeeData(input);
console.log(output);
/* [
  { firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' },
  { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' }
]; */