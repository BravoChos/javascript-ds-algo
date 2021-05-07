a(); // 'bye'
console.log(one); // undefined => var one is partially hoisted as undefined
var one = 1;
var one = 2;

function a() {
  console.log("hi");
}

// it is going to rewrite the function a() as following
function a() {
  console.log("bye");
}
