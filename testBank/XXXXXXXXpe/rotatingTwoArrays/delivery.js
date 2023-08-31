function solution(n) {
    // 옷 3개 또는 5개 를 담을 수 있는 상자
    // 배송비는 상자의 개수에 비례

    let countFive = 0;
    let countThree = 0;

    countFive = Math.floor(n / 5);
    countThree = Math.floor((n - countFive * 5) / 3);

    while (true) {
        if (n - countFive * 5 - countThree * 3 === 0) {
            return countFive + countThree;
        }
        if (countFive === 0 && n - countThree * 3 !== 0) {
            return -1;
        } else {
            countFive--;
            countThree = Math.floor((n - countFive * 5) / 3);
        }
    }
}

// console.log(solution(7));
// console.log(solution(3));
console.log(solution(4));
// let test = () => {
//     // console.log("object");
//     for (let i = 3; i < 100; i++) {
//         // console.log(i);
//         console.log(i, "-----", solution(i)); //  solution(i);
//     }
// };
// test();
