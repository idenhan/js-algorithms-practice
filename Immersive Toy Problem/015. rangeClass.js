let Range = function (start, end, step) {
  /* START SOLUTION */
  if (start === undefined) {
    return null;
  }

  this.start = start;

  if (end === undefined) {
    this.end = this.start;
  } else {
    this.end = end;
  }

  if (step === undefined) {
    this.step = this.start < this.end ? 1 : -1;
  } else {
    this.step = step;
  }

  return this;
  /* END SOLUTION */
};

Range.prototype.size = function () {
  /* START SOLUTION */
  return Math.floor((this.end - this.start) / this.step) + 1;
  /* END SOLUTION */
};

Range.prototype.each = function (callback) {
  /* START SOLUTION */
  if (this.step > 0) {
    for (let i = this.start; i <= this.end; i += this.step) {
      callback(i);
    }
  } else {
    for (let i = this.start; i >= this.end; i += this.step) {
      callback(i);
    }
  }
  /* END SOLUTION */
};

Range.prototype.includes = function (val) {
  /* START SOLUTION */
  return (
    val >= this.start && val <= this.end && (this.start - val) % this.step == 0
  );
  /* END SOLUTION */
};

let range = new Range(1);

/* 
let myRange = new Range(0, 10); // 0과 10 사이의 새로운 range를 의미합니다.
let evenNumbers = new Range(2, 8, 2); // evenNumbers라는 range가 포함하는 값은 2, 4, 6, 8 입니다.
evenNumbers.each(function(val){
  console.log(val+"!");
});
console.log("Who do we appreciate!?");

evenNumbers.size() // 4
evenNubmers.includes(2) // true
evenNumbers.includes(3) // false */
