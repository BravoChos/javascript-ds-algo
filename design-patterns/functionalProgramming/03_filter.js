// FP pattern - filter
// reduce,map => HOC
// filter => HOC

// #01.
const numbers = [1, 2, 3, 4, 5, 6];
const isEven = (n) => n % 2 === 0;

const evenNums = numbers.filter(isEven);

console.log(evenNums);
