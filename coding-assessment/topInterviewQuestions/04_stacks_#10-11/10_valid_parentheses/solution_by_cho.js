/**
 * @param {string} s
 * @return {boolean}
 */

let parens = {
  "{": "}",
  "(": ")",
  "[": "]",
};

var isValid = function (s) {
  let stack = [];

  if (s.length === 0) return false;

  for (let i = 0; i < s.length; i++) {
    if (parens[s[i]]) {
      stack.push(s[i]);
    } else {
      let leftBracket = stack.pop();
      let correctBracket = parens[leftBracket];

      if (s[i] !== correctBracket) return false;
    }
  }

  return true;
};

console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([])")); // true
console.log(isValid("([])")); // true
