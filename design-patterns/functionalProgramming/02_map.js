// FP pattern - map
// map => HOC

// #01.
const arr = [15, 30, 100];

const mapped = arr.map((value) => {
  return value.toFixed(2);
});

console.log(mapped);

// #02.
const location = [
  { city: "seoul", temp: 86 },
  { city: "london", temp: 85 },
  { city: "toronto", temp: 72 },
];

// 5/9 * (f - 32)

const toCelcius = (obj) => {
  return {
    ...obj,
    temp: Math.floor((5 / 9) * (obj.temp - 32)),
  };
};

const result = location.map(toCelcius);

console.log(result);
