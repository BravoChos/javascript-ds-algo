function solution(movie) {
  var movieSet = {};
  const length = movie.length;

  for (let i = 0; i < length; i++) {
    if (movieSet[movie[i]]) {
      movieSet[movie[i]] = {
        ...movieSet[movie[i]],
        count: movieSet[movie[i]].count + 1,
      };
    } else {
      movieSet[movie[i]] = {
        name: movie[i],
        count: 1,
      };
    }
  }

  let answer = Object.keys(movieSet)
    .map((item) => movieSet[item])
    .sort((a, b) => {
      if (a.count === b.count) return a.name.localeCompare(b.name);
      else return b.count - a.count;
    })
    .map((movie) => movie.name);

  return answer;
}

console.log(
  solution([
    "007",
    "Batman",
    "007",
    "Alien",
    "John Wick",
    "Batman",
    "007",
    "Alien",
  ])
);
