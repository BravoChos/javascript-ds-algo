// Functions are objects.
// but it's something that is not very common in other languages,
function Muyaho() {
  console.log("MooooYa~~~ho!!");
}
Muyaho();

/* 
When envoking a function in javascript,
It creates a special type of object called a callable object.
And so we can do the following.
Muyaho.yell = "ahh";
*/

/* 
We also have a arguments, name property and other Properties such as apply, call, bind that comes with this function,
thanks to prototype inheritance
*/
console.log(Muyaho.name);
console.log(Muyaho.arguments);
// Muyaho.apply()
// Muyaho.call()
// Muyaho.bind()

// key note! *Only functions have the prototype property.*
const obj = {};
/* 
obj.name => (X)
obj.arguments = > (X)
obj.call() => (x)
*/
