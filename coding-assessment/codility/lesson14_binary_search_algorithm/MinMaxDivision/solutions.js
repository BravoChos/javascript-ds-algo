// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(K, M, A) {
    var begin = A.reduce((a, v) => (a + v), 0)
    begin = parseInt((begin+K-1)/K, 10);
    var maxA = Math.max(A);
    if (maxA > begin) begin = maxA;

    var end = begin + M + 1;
    var res = 0;

    while(begin <= end) {
        var mid = (begin + end) / 2;
        var sum = 0;
        var block = 1;
        for (var ind in A) {
            var a = A[ind];
            sum += a;
            if (sum > mid) {
                ++block;
                if (block > K) break;
                sum = a;
            }
        }
        if (block > K) {
            begin = mid + 1;
        } else {
            res = mid;
            end = mid - 1;
        }
    }
    return res;
}

