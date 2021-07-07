function solution(tickets) {
  var answer = [];
  const DFS = (airport, tickets, path) => {
    let newPath = [...path, airport];
    if (tickets.length === 0) {
      answer.push(newPath);
    } else {
      tickets.map((ticket, idx) => {
        if (ticket[0] === airport) {
          let copiedTickets = [...tickets];
          const [[from, to]] = copiedTickets.splice(idx, 1);
          DFS(to, copiedTickets, newPath);
        }
      });
    }
  };
  DFS("ICN", tickets, []);
  console.log("11111", answer);
  return answer.sort()[0];
}

function solution2(tickets) {
  let answer = [];
  const result = [];
  const visited = [];

  tickets.sort();

  const len = tickets.length;
  const dfs = (str, count) => {
    result.push(str);

    if (count === len) {
      answer = result;
      return true;
    }

    for (let i = 0; i < len; i++) {
      if (!visited[i] && tickets[i][0] === str) {
        visited[i] = true;

        if (dfs(tickets[i][1], count + 1)) return true;

        visited[i] = false;
      }
    }

    result.pop();

    return false;
  };

  dfs("ICN", 0);

  return answer;
}

console.log(
  solution([
    ["ICN", "JFK"],
    ["HND", "IAD"],
    ["JFK", "HND"],
  ])
); //["ICN", "JFK", "HND", "IAD"]

console.log(
  solution([
    ["ICN", "SFO"],
    ["ICN", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "ICN"],
    ["ATL", "SFO"],
  ])
); //["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"] (O)  vs ["ICN", "SFO", "ATL", "ICN", "ATL", "SFO"] (X)
