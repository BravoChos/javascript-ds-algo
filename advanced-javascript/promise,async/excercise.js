// Async Function
const sumTwoNumbers = (a, b) => {
  return a + b;
};

const resolveAfter5Seconds = (timeinterval) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, timeinterval);
  });
};

const sumAandBAfterXSeconds = async (a, b, x) => {
  let result = await resolveAfter5Seconds(x).then(() => sumTwoNumbers(a, b));
  console.log(
    "Return result after",
    x / 1000,
    "second. And the sum is",
    result
  );
};

sumAandBAfterXSeconds(4, 6, 2000);
