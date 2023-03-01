// FP pattern - closure

/*
Currying is a technique used in JavaScript (and other programming languages)
that involves breaking down a function
that takes multiple arguments into a series of functions
that take one argument each.The resulting functions can be composed together
to build up the original function with all of its arguments.
*/

// Currying: f(a,b,c) => f(a)(b)(c)
// #01.
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

// #02.
const curried_add2 = (x) => (y) => x + y;
console.log(curried_add2(19)(1));

// #03, 04
function makeCoffee(roastType) {
  return function (sugar) {
    return function (cream) {
      return console.log(`coffee: ${roastType}, sugar: ${sugar}, cream: ${cream}`);
    };
  };
}

makeCoffee("dark chocolate")(18)(25);
// use case
const mediumRoast = makeCoffee("medium roast");

const order1 = mediumRoast(1)(2);
const order2 = mediumRoast(2)(3);
