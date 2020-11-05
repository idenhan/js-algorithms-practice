const mixEvents = function (obj) {
  obj.on = (name, cb) => {
    if (obj[name]) {
      obj[name] = obj[name].concat([cb.bind(obj)]);
    } else {
      obj[name] = [].concat([cb.bind(obj)]);
    }
  };
  obj.trigger = (name, ...args) => {
    if (obj[name]) {
      obj[name].forEach(func => func(...args));
    }
  };
  return obj;
};


/*
주어진 객체에 .trigger() 메소드와 .on() 메소드를 추가하는 mixEvents 함수를 구현하세요.

예시:

let obj = mixEvents({ name: 'Alice', age: 30 });
obj.on('ageChange', function () {
  // .on()은 이벤트 이름과 콜백 함수를 받아 저장합니다.
  console.log('Age changed');
});
obj.age++;
obj.trigger('ageChange'); // .trigger()은 저장했던 콜백을 다시 불러옵니다. "Age changed"가 콘솔에 찍힙니다.
주의 사항:

mixEvents 함수는 주어진 기존 객체를 확장해서 리턴해야 합니다.
같은 이름으로 on()을 계속 실행해도, 새로운 콜백 함수가 기존 콜백을 지우고 덧씌워져서는 안 됩니다. trigger()를 실행하면 기존에 할당한 콜백도 새로운 콜백과 같이 실행되어야 합니다.
즉, 이벤트에 여러 개의 listener를 할당할 수 있어야 합니다. 어떤 방식으로든 listener를 제거할 필요는 없습니다.
trigger()가 실행될 때 함수 이름 이외의 인자가 주어질 경우, 추가로 들어온 인자들은 콜백 함수에게 전달해 줘야 합니다.
*/