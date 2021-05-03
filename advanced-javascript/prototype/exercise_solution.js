//Array.map() => to print '🗺'
Array.prototype.map = function () {
  console.log(this);
  arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(this[i] + " 🗺");
  }
  return arr;
};

// What happens with arrow function here?
// Array.prototype.map = () => {
//   arr = [];
//   console.log(this); // this is referring to the actual function that is called
//   for (let i = 0; i < this.length; i++) {
//     arr.push(this[i] + " 🗺");
//   }
//   return arr; // so it will return [] not [1,2,3]
// };

console.log([1, 2, 3].map());

// As you can imagine, that's pretty dangerous, right?
// What if somebody just modifies the actual functionality of map and all the code in our project that
// uses map is now, well, destroyed?
// So you want to be really careful of this and you should never really modify the existing methods that we have

// Date object => to have method .lastYear() which shows you last year in 'YYYY-MM-DD' format.
Date.prototype.lastYear = function () {
  console.log("this", this);
  return this.getFullYear() - 1;
};

const lastYear = new Date().lastYear();
console.log(lastYear);
