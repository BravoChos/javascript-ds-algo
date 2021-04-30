const array = [10, 20, 30, 40];
for (var i = 0; i < array.length; i++) {
  setTimeout(function () {
    console.log("I am at index " + i);
  }, 3000);
}

// it shoule return

// I am at index 1
// I am at index 2
// I am at index 3
// I am at index 4

// but will return

// I am at index 4
// I am at index 4
// I am at index 4
// I am at index 4

// Why?
// Because initially, when we had a variable 'i', it was part of the global scope.
// Because we didn't really have a function surrounding it,
// so that this setTimeOut when it finally returned by that point,
// the 'for' Loop has already gone through everything and has turned 'i' into 4.
