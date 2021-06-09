// call, apply, bind
function a() {
  console.log("hi");
}
a(); // a.call() shorthandss

// Example 2)
const wizard = {
  name: "Merlin",
  health: 100,
  heal: function (num1, num2) {
    this.health += num1 + num2;
  },
};
// console.log(wizard.health);
// wizard.heal(10, 20); // this will update wizard.health value to 130 not 100.

// what if we want to borrow a heal function from the wizard?
const infantry = {
  name: "King Richard",
  health: 1000,
};

// The first parameter of call will be what this should be bound to.
// And it can optionally receive arguments as a parameters.

wizard.heal.call(infantry, 50, 50);
// Notice that 'this' keyword refers to archer object not wizard!
console.log("call", infantry); // archer.health = (1000) + 50 + 50 = 1100
wizard.heal.apply(infantry, [10, 10]);
console.log("apply", infantry); // archer.health = (1100) + 10 + 10 = 1120

// The only difference between call and apply is that instead of call just takes parameters,
// apply takes parameters as an array.

const archer = {
  name: "Robin Hood",
  health: 50,
};
archer;
// function borrowing
const healArcher = wizard.heal.bind(archer, 50, 60);
console.log(archer); // It should be 50.
healArcher();
console.log(archer); // 50 + 50 + 60 = 160

// Call, Reply are useful for borrowing methods from an object,
// while Bind is useful for us to call functions later on with a certain context.
