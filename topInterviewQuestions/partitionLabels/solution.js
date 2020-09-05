var partitionLabels = function (S) {
  let indexMaps = new Map();

  for (let i = 0; i < S.length; i++) {
    indexMaps.set(S[i], i);
  }

  let start = 0,
    end = 0,
    i = 0,
    result = [];

  while (i < S.length) {
    if (indexMaps.get(S[i]) > end) {
      end = indexMaps.get(S[i]);
    }

    if (i === end) {
      result.push(end + 1 - start);
      start = end + 1;
    }
    i += 1;
  }
  return result;
};

console.log(partitionLabels("ababcbacadefegdehijhklij"));
