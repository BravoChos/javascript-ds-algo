const solution = (_input) => {
  let numberOfPeople = _input[0].split(" ")[0];
  let numberOfVisits = _input[0].split(" ")[1];
  let visitorsLog = _input[1].split(" ").map((item) => parseInt(item));
  let coronaPatientID = +_input[2];
  let result = [];
  let logObject = {};

  for (let i = 0; i < visitorsLog.length; i++) {
    let currentVisitorID = Math.abs(visitorsLog[i]);
    if (logObject[currentVisitorID]) {
      let length = logObject[currentVisitorID].length;
      if (visitorsLog[i] < 0)
        logObject[currentVisitorID][length - 1] = [
          logObject[currentVisitorID][length - 1][0],
          i,
        ];
      else logObject[currentVisitorID] = [...logObject[currentVisitorID], [i]];
    } else logObject[currentVisitorID] = [[i]];
  }

  let patientPathHistory = [];
  for (var j = 0; j < numberOfVisits; j++) {
    patientPathHistory.push(false);
  }

  logObject[coronaPatientID].forEach((item, index) => {
    let startIdx = item[0];
    let finishIdx = item[1];
    while (startIdx < finishIdx + 1) {
      patientPathHistory[startIdx] = true;
      startIdx++;
    }
  });

  for (let k = 0; k < numberOfPeople; k++) {
    if (k + 1 !== coronaPatientID && logObject[k + 1]) {
      for (let p = 0; p < logObject[k + 1].length; p++) {
        let startIdx = logObject[k + 1][p][0];
        let finishIdx = logObject[k + 1][p][1];

        while (startIdx < finishIdx + 1) {
          if (patientPathHistory[startIdx]) {
            result.push(k + 1);
            break;
          }
          startIdx++;
        }
      }
    }
  }
  return result.length > 0 ? result : -1;
};

console.log(solution(["6 14", "2 1 3 4 -3 -4 -1 -2 5 -5 1 6 -1 -6", "1"])); // [2 3 4 6]
console.log(solution(["7 10", "2 6 3 4 -6 5 -3 -4 -5 -2", "2"])); // [3,4,5,6,]
console.log(solution(["5 10", "4 -4 2 5 3 -3 -5 -2", "4"])); // -1;
