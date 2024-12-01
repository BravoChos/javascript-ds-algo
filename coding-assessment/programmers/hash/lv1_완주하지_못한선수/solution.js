function solution(participant, completion) {
  participant.sort(); //참가자 배열 정렬
  completion.sort(); //완주자 배열 정렬
  for (var i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      //인덱스 0부터 순차적으로 두 배열 비교
      return participant[i];
      //비완주자가 참가자 배열에 나올 경우 출력
    }
  }
}

console.log(solution(["a", "b", "c"], ["b", "c"]));

function solution2(participant, completion) {
  participant.sort(); //참가자 배열 정렬
  completion.sort(); //완주자 배열 정렬

  let answer = "";
  participant.forEach((person, index) => {
    if (person !== completion[index]) {
      answer = person;
    }
  });
  return answer;
}
console.log(solution2(["b", "c", "d"], ["b", "c"]));

function TheBestSolution {
    /*
    for(let i in participant) {
        if(completion.includes(participant[i]) == false) return participant[i];
        completion.splice(completion.indexOf(participant[i]), 1);
    }
    */
   participant.sort();
   completion.sort();
   for(let i in participant) {
       if(participant[i] !== completion[i]) return participant[i];
   }
}
