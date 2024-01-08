/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  let result = s.split("");
  let stack = [];

  for (i = 0; i < result.length; i++) {
    if (result[i] === "(") {
      stack.push(i);
    } else if (result[i] === ")" && stack.length) {
      stack.pop();
    } else if (result[i] === ")") {
      result[i] = "";
    }
  }

  while (stack.length) {
    const currentIdx = stack.pop();
    result[currentIdx] = "";
  }
  return result.join("");
};

input1 = "lee(t(c)o)de)";
input2 = "a)b(c)d";
input3 = "))((";

console.log(minRemoveToMakeValid(input1)); // "lee(t(c)o)de"
console.log(minRemoveToMakeValid(input2)); // "ab(c)d"
console.log(minRemoveToMakeValid(input3)); // ""
