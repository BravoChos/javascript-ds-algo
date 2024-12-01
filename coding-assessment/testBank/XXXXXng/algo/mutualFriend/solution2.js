// Run by Node.js
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
var input = [];
rl.on("line", function (line) {
  input.push(line);
  setTimeout(() => {
    r1.close();
  }, 1000);
}).on("close", function (res) {
  solution();
  process.exit();
});

const solution = () => {
  let personName = [];
  let conectivity = {};
  let count = 0;

  for (let i = 2; i < input.length; i++) {
    let username = input[i].split(" ")[0];
    let mutalFriend = input[i].split(" ")[1];

    if (personName.length == 0) {
      personName.push(username);
    } else if (personName.length == 1 && personName[0] !== username) {
      personName.push(username);
    }

    if (!conectivity[mutalFriend]) {
      conectivity[mutalFriend] = [username];
    } else {
      if (conectivity[mutalFriend].length == 1 && conectivity[mutalFriend]) {
        conectivity[mutalFriend].push(username);
        count++;
      }
    }
  }
  personName.sort();
  console.log(personName[0] + " " + personName[1]);
  console.log(count);
  input = [];
  process.exit();
};
