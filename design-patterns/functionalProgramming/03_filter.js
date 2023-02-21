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

// #03.
const users = [
  { name: "John", age: 25, gender: "male" },
  { name: "Cho", age: 31, gender: "female" },
  { name: "Kim", age: 20, gender: "female" },
  { name: "Chase", age: 40, gender: "male" },
];

const olderThen30 = (user) => user.age > 30;
const isFemale = (user) => user.gender === "female";

console.log(users.filter(olderThen30));
console.log(users.filter(olderThen30).filter(isFemale));
