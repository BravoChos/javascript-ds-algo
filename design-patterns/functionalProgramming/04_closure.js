// FP pattern - closure

/*
Currying is a technique used in JavaScript (and other programming languages)
that involves breaking down a function
that takes multiple arguments into a series of functions
that take one argument each.The resulting functions can be composed together
to build up the original function with all of its arguments.
*/

// Currying: f(a,b,c) => f(a)(b)(c)

function add(x, y) {
  return x + y;
}

// using currying, we can break down this function into a series of functions
// that each take one argument:

function curried_add(x) {
  return function (y) {
    return x + y;
  };
}

console.log(curried_add(7)(3));
