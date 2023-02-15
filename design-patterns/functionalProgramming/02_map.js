// FP pattern - map
// map => HOC

// #01.
const arr = [15, 30, 100];

const mapped = arr.map((value) => {
  return value.toFixed(2);
});

console.log(mapped);
