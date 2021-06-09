// this
// 1. It gives methods access to their object.
// 2. execute same code for multiple objects.
const obj = {
  name: "Saitama",
  sing: function () {
    // 'this' is 'obj' object that the 'sing' function is a property of
    return "OOH-AHH " + this.name;
  },
  singTwiceSong() {
    return "OOH-AHH " + this.name + "!";
  },
};

console.log(obj.sing());
console.log(obj.singTwiceSong());

function importantPerson() {
  console.log(this.name + "!"); // it global variable 'name' doesn't exists? will return undefined.
}

const name = "Blast";

const obj1 = { name: "King", importantPerson: importantPerson };
const obj2 = { name: "Zenos", importantPerson: importantPerson };

// obj2.importantPerson();
importantPerson();
