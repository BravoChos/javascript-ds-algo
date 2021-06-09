// function currying
function multiply(a, b) {
  return a * b;
}

var multipleByTwo = multiply.bind(this, 2); // this is global execution.
// var multipleByTwo = multiply.bind(multiply, 2); // same result.
// what if multiply function was inside the certain class as a method?
// => refer to excercise.js
console.log(multipleByTwo(4));

var multipleByThree = multiply.bind(this, 3);
console.log(multipleByThree(4));
