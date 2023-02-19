// FP pattern - filter
// reduce,map => HOC
// filter => HOC

// #01.
const numbers = [1, 2, 3, 4, 5, 6];
const isEven = (n) => n % 2 === 0;

const evenNums = numbers.filter(isEven);

console.log(evenNums);

// #02.
const values = [1, "", 2, undefined, 3, 4];

const filtered = values.filter((value) => Boolean(value));

console.log(filtered);
