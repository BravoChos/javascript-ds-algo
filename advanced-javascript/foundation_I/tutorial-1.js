// call stack + Memory Heap
const number = 610; // allocate memory for number
const string = "some text"; // allocate memory for a string
const human = {
  // allocate memory for an object ... and it's value.
  first: "Captin",
  last: "America",
};

function subtractTwo(num) {
  return num - 2;
}

function calculate() {
  const sumTotal = 4 + 5;
  return subtractTwo(sumTotal);
}

calculate();

// Call stack

// 2. substractTwo()
// 1. calculate()
// 0. global execution context ..