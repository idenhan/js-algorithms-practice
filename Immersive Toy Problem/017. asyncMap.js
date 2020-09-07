const asyncMap = function (tasks, callback) {
  let promises = [];
  for (let i = 0; i < tasks.length; i++) {
    let promise = new Promise(tasks[i]);
    promises.push(promise);
  }
  Promise.all(promises).then((value) => callback(value));
};

/* 
asyncMap([
  function(cb){
    setTimeout(function(){
      cb('one');
    }, 200);
  },
  function(cb){
    setTimeout(function(){
      cb('two');
    }, 100);
  }
  ],
  function(results){
    // the results array will equal ['one','two'] even though
    // the second function had a shorter timeout.
    console.log(results); // ['one', 'two']
  });
  */
