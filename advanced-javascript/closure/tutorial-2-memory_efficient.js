// Memory efficient
function heavyDuty(index) {
  const bigArray = new Array(7000).fill("😄");
  console.log("created!");
  return bigArray[index];
}

heavyDuty(699);
heavyDuty(699);
heavyDuty(699);

// Now if implement closure!!, let's see what happens
function heavyDuty2() {
  const bigArray = new Array(7000).fill("😄");
  console.log("created Again!");
  return function (index) {
    return bigArray[index];
  };
}

const getHeavyDuty = heavyDuty2();
getHeavyDuty(699);
getHeavyDuty(699);
getHeavyDuty(699);
