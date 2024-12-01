function SeatingStudents(arr) {
  // boundary condition check
  if (!arr.length || arr[0] % 2 === 1) return -1;

  const totalRows = arr[0] / 2;
  let totalPossibleSeats = (totalRows - 1) * 2 + totalRows;

  if (arr.length === 1) return totalPossibleSeats;

  for (let i = 1; i < arr.length; i++) {
    //exception check
    // #1. every element in array for i greater then 0 should be greater than 0.
    // #2. array is sorted array.
    if (arr[i] < 1 || (i > 1 && arr[i] <= arr[i - 1])) return -1;

    let isNeighbors = arr[i] % 2 === 0 && i > 1 && arr[i] - arr[i - 1] === 1;
    let isFirstOrLastRow =
      arr[i] === 1 ||
      arr[i] === 2 ||
      arr[i] === arr[0] - 1 ||
      arr[i] === arr[0];

    let isParallell =
      (i > 1 && arr[i] - arr[i - 1] === 2) ||
      (i > 2 && arr[i] - arr[i - 2] === 2);

    if (isFirstOrLastRow && (isNeighbors || isParallell)) totalPossibleSeats--;
    else if (isFirstOrLastRow || isNeighbors || isParallell)
      totalPossibleSeats -= 2;
    else totalPossibleSeats -= 3;
  }
  return totalPossibleSeats;
}

console.log(SeatingStudents([12, 2, 6, 7, 11])); // 6
console.log(SeatingStudents([6, 4])); // 4
console.log(SeatingStudents([8, 1, 8])); // 6
