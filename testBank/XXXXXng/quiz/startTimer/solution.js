function startTimer(callback, interval) {
  let counter = 1;
  let intervalId = setInterval(
    () => {
      if (callback(counter)) {
        counter++;
      } else {
        clearInterval(intervalId);
      }
    },
    interval,
    counter
  );
}

function callback(counter) {
  //
  console.log({ counter });
  return counter < 5;
}

startTimer(callback, 50);
