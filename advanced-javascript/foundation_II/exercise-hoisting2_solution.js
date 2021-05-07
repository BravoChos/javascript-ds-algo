// Solution
var foodThoughts = undefined;
var favouriteFood = undefined;

favouriteFood = "grapes";

foodThoughts = function () {
  var favouriteFood = undefined;
  console.log("Original favourite food: " + favouriteFood); // undefined!!! Why?!!
  // Hoisting happens on every execution context.
  // Any time when you run a function, a new execution context gets created
  // and we have to go through the creation phase and execution phase again!!!
  favouriteFood = "sushi";

  console.log("New favourite food: " + favouriteFood);
};

foodThoughts();

// P.s. when you change the 'var' to 'const' technically there is still hoisting happening.
// That is why you get a reference error instead of looking at the global favouriteFood variable.
// let and const hoist but you cannot access them before the actual declaration is evaluated at runtime. 
// So the engine says, "ya there is a favouriteFood variable here but you can't access it yet"
