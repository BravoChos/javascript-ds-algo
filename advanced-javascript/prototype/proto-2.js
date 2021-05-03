// Every Prototype chain links to a prototype object{}
// Test it on Google Chrome developer tool.
function multiplyBy5(num) {
  return num * 5;
}

console.log(multiplyBy5.__proto__); // If we go up the prototype chain. We'll have our base function.
Function.prototype;
multiplyBy5.__proto__.__proto__;
Object.prototype;
multiplyBy5.__proto__.__proto__.__proto__;
typeof Object;
typeof {};

// Function is a callable object where we have code that can be invoked, we have an optional name field,
// and we also have properties that we can add to the function.
// We also have call, apply, and bind as properties by default.

// '.__proto__' is simply a reference or a pointer to up the chain prototype object.
// We get the base array, so Array Proteau is pointing to the father.
// Let's review. Arrays and functions are objects in JavaScript.
// 'multiplyBy5' is a special type of object that is a callable object.

// Instead of having a call, apply and bind directly as its properties, use this prototype inheritance
// to actually inherit from the base function. And the key here is that __proto__ points to the prototype up the chain.
// And keep in mind that this __proto__ property actually lives on the prototype.
