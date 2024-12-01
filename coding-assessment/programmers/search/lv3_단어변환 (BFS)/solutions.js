function solution(begin, target, words) {
  const visited = { [begin]: 0 };
  const queue = [begin];

  while (queue.length) {
    const cur = queue.shift();

    if (cur === target) break;

    for (const word of words) {
      if (isConnected(word, cur) && !visited[word]) {
        visited[word] = visited[cur] + 1;
        queue.push(word);
      }
    }
  }
  return visited[target] ? visited[target] : 0;
}

const isConnected = (str1, str2) => {
  let count = 0;
  const len = str1.length;

  for (let i = 0; i < len; i++) {
    if (str1[i] !== str2[i]) count++;
  }

  return count === 1 ? true : false;
};

////
function solution2(begin, target, words) {
  let answer = 0;
  const q = [];
  const visit = Array(words.length);
  q.push([begin, answer]);
  while (q.length) {
    let [s, cnt] = q.shift();
    if (s == target) return cnt;
    words.forEach((w, i) => {
      // words의 단어들인 w와 begin의 문자를 비교하여 서로 다른 부분의 인덱스들을 구한다.
      const idx = [...w].reduce(
        (a, c, i) => (c != s[i] ? a.push(i) : a, a),
        []
      ); // words와 begin이 1개의 문자가 다르고 방문하지 않은 경우(변환된 문자가 아닌 경우)
      if (idx.length == 1 && !visit[i]) {
        visit[i] = 1;
        q.push([w, ++cnt]);
      }
    });
  }
  return answer;
}

// 출처: https://kis6473.tistory.com/180 [KIS]
