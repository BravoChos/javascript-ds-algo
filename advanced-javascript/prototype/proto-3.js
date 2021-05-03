// Create our own prototypes:
var human = { mortal: true };
var socrates = Object.create(human);
human.isPrototypeOf(socrates); // true
socrates.age = 45;
console.log(socrates.age);
