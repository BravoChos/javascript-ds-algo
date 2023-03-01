// Function Composition

const title = "Learning Function Composition 1";

// slug -> 'learning-function-composition-1'

// Plan
// 1. string -> array
// 2. array (word) -> lowercase
// 3. array -> string, ("-")

const strToArr = (str) => str.split(" ");
const toLower = (arr) => arr.map((w) => w.toLowerCase());

const joinWithDash = (arr) => arr.join("-");

const pipe =
  (...functions) =>
  (input) =>
    functions.reduce((acc, fn) => fn(acc), input);

const slug = pipe(strToArr, toLower, joinWithDash)(title);

console.log(slug);
