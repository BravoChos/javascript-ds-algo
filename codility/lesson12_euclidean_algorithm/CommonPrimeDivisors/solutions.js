// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// #1
function solution(A, B) {
  const Z = A.length;
  let cnt = 0;

  for (let i = 0; i < Z; i++) {
    if (hasSamePrimeDiv(A[i], B[i])) {
      cnt++;
    }
  }

  return cnt;

  function getGCD(A, B) {
    //최대 공약수 구하기
    if (B === 0) return A;
    return getGCD(B, A % B);
  }

  function hasSamePrimeDiv(A, B) {
    //같은 인수를 가지고 있는지 확인

    let gcd = getGCD(A, B);
    let gcdA = 0;
    let gcdB = 0;

    while (gcdA !== 1) {
      gcdA = getGCD(A, gcd);
      A = A / gcdA;
    }

    while (gcdB !== 1) {
      gcdB = getGCD(B, gcd);
      B = B / gcdB;
    }

    return A === 1 && B === 1 ? true : false; //만약 값이 1이 아니라면 그 값은 공통되지 않는 인수인 것이다.
    //또한 두 수 모두 공통된 인수를 가지고 있어야 하므로 조건식을 위와 같이 적어주었다.
  }
}
