// 4 Ways To Invoke / Create Functions

// Method 1.
function one() {
  return 1;
}
console.log(one());

// Method 2.
const obj = {
  two: function () {
    return 2;
  },
  // In ECMAScript6, you can also do this
  twoTwo() {
    return 22;
  },
};
console.log(obj.two());
// console.log(obj.twoTwo());

// Method 3
function three() {
  return 3;
}
console.log(three.call());

// Method 4
const four = new Function("return 4");
console.log(four());
