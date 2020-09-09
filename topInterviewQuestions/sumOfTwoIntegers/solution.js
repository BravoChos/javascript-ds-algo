/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

// using javascript Expressions and Operation
// reference
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
var getSum = function (a, b) {
  let carry;

  while (b) {
    //Step 1
    // Bitwise AND assignment: (1-0,0-0 pair) =>0, (1-1 pair) =>1
    carry = a & b;
    // let c = 5; // 00000000000000000000000000000101
    // c & 3; // 00000000000000000000000000000011
    // console.log(c); // 00000000000000000000000000000001
    // expected output: 1

    // Step 2
    // Bitwise XOR assignment: (1-1,0-0 pair? =>0), (1-0) =>1
    a ^= b;
    // let d = 5; // 00000000000000000000000000000101
    // d ^= 3; // 00000000000000000000000000000011
    // console.log(d); // 00000000000000000000000000000110
    // expected output: 6

    //Step 3
    // Left shift assignment operator
    b = carry << 1;
  }

  return a;
};
var getSum2 = function (a, b) {
  return b == 0 ? a : getSum(a ^ b, (a & b) << 1);
};
console.log(getSum(1, 2));
console.log(getSum(-2, 3));
console.log(getSum2(1, 2));
console.log(getSum2(-2, 3));
