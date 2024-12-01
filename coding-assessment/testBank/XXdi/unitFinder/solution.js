function solution(location, s, e) {
  var answer = -1;
  let xRange = [s[0], e[0]];
  if (s[0] > e[0]) xRange = [e[0], s[0]];
  let yRange = [s[1], e[1]];
  if (s[1] > e[1]) yRange = [e[1], s[1]];
  answer = 0;
  location.forEach((item) => {
    if (
      xRange[0] <= item[0] &&
      item[0] <= xRange[1] &&
      yRange[0] <= item[1] &&
      item[1] <= yRange[1]
    ) {
      answer++;
    }
  });
  return answer;
}
// 100점!!
