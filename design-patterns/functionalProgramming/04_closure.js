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
