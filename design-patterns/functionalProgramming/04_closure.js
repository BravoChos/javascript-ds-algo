// FP pattern - closure

// 1. define another function within a function. This is called a "nested function" or "inner function.
// 2. returns an inner function
// 3. remember Scope

// #01.
let y = 100;
function fn() {
  let x = 10;
  console.log(x, y);
}
fn();

// Lexical Environment
// execution environment(or context) including the variables, functions,
// and scope chains that are accessible within that context

function outer() {
  let x = 10;
  function inner() {
    console.log(x);
  }
  return inner;
}

const testFn = outer();

testFn();

// 1. hide data and make it private
// 2. persist state
// 3. FP: Currying and partial application
