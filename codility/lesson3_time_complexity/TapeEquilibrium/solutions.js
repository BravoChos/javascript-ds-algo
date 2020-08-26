function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  
  let sum = A.reduce((a, b) => a + b, 0);
  let diff = 0;
  let index = 0;
  
  for(let i=0; i<A.length; i++){
      let d = sum - A[i];
      if(diff < d){
          diff = d;
          index = i;
      }
  }
  
  return index;
}

function solution2(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  
  let sum = A.reduce((a, b) => a + b, 0);
  let diff = 0;
  let index = 0;
  
  for(let i=0; i<A.length; i++){
      let d = sum - A[i];
      if(diff < d){
          diff = d;
          index = i;
      }
  }
  
  return index;
}