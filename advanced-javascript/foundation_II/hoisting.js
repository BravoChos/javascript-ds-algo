console.log("1");
console.log(teddy); // var teddy = undefined; => variables are partially hoisted
console.log(sing()); // functions are fully hoisted
// console.log(sing2()); // sing2 is not a function
var teddy = "bear";

// function declaration
function sing() {
  console.log("ooh la la");
}

// function expression
var sing2 = function () {
  console.log("puh ha ha");
};

// var vs let
// console.log(dark); // Cannot access 'datk' before initialization. No hoising!!
// let dark = "templer";
