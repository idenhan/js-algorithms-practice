function removeOddValues(obj) {
  for (let i in obj) {
    if (typeof (obj[i]) === 'number') {
      if (obj[i] % 2 !== 0) {
        delete obj[i];
      }
    }
  }
  return obj;
}
removeOddValues({ a: 1, b: 2, c: 3, d: 'hello' }); // => { b: 2, d: 'hello' }
removeOddValues({ a: 1, b: 2, c: '3' });           // => { b: 2, c: '3' }