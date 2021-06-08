// 'use strict'
// => 'use strict' allows us to avoid these pitfalls that shouldn't happen.

// Weird Javascript #1
// : it asks global scope for height. Global scope says: ummm... no but here I just created it for you.
// ps this isn't allowed in strict mode. We call this leakage of global variables.
function weird() {
  height = 50;
  return height;
}

console.log(weird()); // it works!!!? but not good practice! /Make sure you declare variables using let or const

// Weird Javascript #2
var heyhey = function doodle() {
  console.log("hey hey");
};

heyhey();
// doodle(); // Error! because it is enclosed in its own scope.
