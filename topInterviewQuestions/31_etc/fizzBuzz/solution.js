/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let result = [];

  for (var i = 1; i < n + 1; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else {
      result.push(String(i));
    }
  }
  return result;
};
console.log(fizzBuzz(1));
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));

const fizzBuzz2 = (n, output = []) => {
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0) {
      if (i % 3 === 0) output.push("FizzBuzz");
      else output.push("Buzz");
    } else {
      if (i % 3 === 0) output.push("Fizz");
      else output.push(`${i}`);
    }
  }
  return output;
};
console.log(fizzBuzz2(1));
console.log(fizzBuzz2(3));
console.log(fizzBuzz2(5));
console.log(fizzBuzz2(15));
