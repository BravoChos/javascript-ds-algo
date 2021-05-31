// Function Expression
var canada = () => console.log("cold");
// Function Declaration
function india() {
  console.log("warm");
}

// Function Invocation, Calling, Execution
canada();
india();

function india() {
  console.log("this is arguments: ", arguments);
  console.log("warm");
}

india();

//arguments
function marry(person1, person2) {
  console.log(arguments); // arguments is array
  console.log(Array.from(arguments));
  return `${person1} is now married to ${person2}`;
}

function marry2(...args) {
  console.log(args);
  console.log(Array.from(arguments));
  //   return `${person1} is now married to ${person2}`;
}

marry("Tim", "Tina");
