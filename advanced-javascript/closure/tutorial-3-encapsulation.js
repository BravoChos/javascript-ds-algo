// encapsulation
// Copy the codes and paste it into chrome developer tools, and then test it!
const makeNuclearButton = () => {
  let timeWithoutDestruction = 0;
  const passTime = () => timeWithoutDestruction++;
  const totalPeaceTime = () => timeWithoutDestruction;
  const launch = () => {
    timeWithoutDestruction = -1;
    return "💥";
  };

  setInterval(passTime, 1000);
  return { totalPeaceTime };
};

const ww3 = makeNuclearButton();
// ww3 can access 'totalPeactTime' only and timeWithoutDestruction.
ww3.totalPeaceTime(); // at first it will return 0 because
// after 4sec
ww3.totalPeaceTime(); // will log 4
// after 6sec
ww3.totalPeaceTime(); // will log 10
