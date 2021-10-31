const solution = (input) => {
  let personName = [];
  let conectivity = {};
  let count = 0;
  for (let i = 2; i < input.length; i++) {
    let username = input[i].split(" ")[0];
    let mutalFriend = input[i].split(" ")[1];

    if (personName.length === 0) {
      personName.push(username);
    } else if (personName.length === 1 && personName[0] !== username) {
      personName.push(username);
    }

    if (!conectivity[mutalFriend]) {
      conectivity[mutalFriend] = [username];
    } else if (
      conectivity[mutalFriend].length === 1 &&
      conectivity[mutalFriend][0] !== username
    ) {
      conectivity[mutalFriend].push(username);
      count++;
    }
  }
  //   console.log(conectivity);
  personName.sort();
  return [personName[0] + " " + personName[1], count];
};

console.log(
  solution([
    "7 8",
    "A B C D E P Q",
    "P A",
    "P B",
    "P C",
    "P D",
    "Q B",
    "Q C",
    "Q D",
    "Q E",
  ]) // "P Q", 3
);

console.log(
  solution(["4 2", "RA LW LD JX", "LW JX", "LD JX"]) // "LD LW", 1
);
