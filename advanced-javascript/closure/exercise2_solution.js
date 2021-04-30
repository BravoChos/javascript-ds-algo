// Solution 1 Using 'let'
const array = [10, 20, 30, 40];
for (let i = 0; i < array.length; i++) {
  setTimeout(function () {
    console.log("I am at index " + i);
    console.log(array[i]);
  }, 3000);
}
// 'let' allows us to use block scoping so that this block line 3 to 7, which
// is these curly brackets over here, creates a scope for each 'i',
// so that 'i' is scoped within here.

// Solution 2 Using Closure
const array2 = [10, 20, 30, 40];
for (var i = 0; i < array.length; i++) {
  (function (closureI) {
    setTimeout(function () {
      console.log("I am at index " + closureI);
      console.log(array[closureI]);
    }, 3000);
  })(i);
}
