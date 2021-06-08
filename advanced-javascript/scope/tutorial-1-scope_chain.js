// Scope:
// Case 1. Global Lexical Environment
var x = "x"; // All of these functions have access to the global scope.
function findName() {
  var b = "b";
  return printName();
}

function printName() {
  console.log("Function printName have access to the global scope.", x); // we have access to variable x
  //   console.log(a, b); //
  var c = "c";
  return "Peter Parker";
}

function sayMyName() {
  var a = "a";
  return findName();
}

console.log(sayMyName());

// Case 2. Function Lexical Environment
function sayMyName2() {
  var a = "a";
  return function findName() {
    var b = "b";
    console.log(a); //
    // console.log(c); // c is not defined
    return function printName() {
      console.log(a);
      console.log(b);
      var c = "c";
      return "Yuna Kim";
    };
  };
}

// How scope-chain works?
// 'findName' function is written inside of  'sayMyName' function.
// So 'findName' function's lexical environment is 'sayMyName' and 'printName' function's lexical environment is 'findName'.

console.log(sayMyName2()()());
