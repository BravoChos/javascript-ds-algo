// Functions are first class citizens in JS

// Point 1
// Functions can be assigned to variables and properties of objects
// so that I can do variable 'stuff' equals to function such as the example code below.

var stuff = function () {};
// In some languages, we can't do that. It can just run functions to perform actions,
// but in JavaScript, we can assign it to a variable or even object property,
// which then becomes a method.

// Point 2
// We can also pass functions as arguments into a function.
function a(fn) {
  fn();
}

// Point 3
// We can return functions as a values from other functions.
function b() {
  return function c() {
    console.log("bye");
  };
}

var d = b();
d();
