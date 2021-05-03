let dragon = {
  name: "Tanya",
  fire: true,
  fight() {
    return 5;
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name}, the breather of fire`;
    }
  },
};

let lizard = {
  name: "Kiki",
  fight() {
    return 1;
  },
};

const lizardFire = dragon.sing.bind(lizard); // lizardFire has no access to get 'fire' property.
console.log(lizardFire()); // undefiend

// Don't do this, bad performance. Show with bind.
// It's bad for performance and there's different ways that we want to inherit when it comes to prototype inheritance,
// something that we're really going to dive deep into when we talk about object oriented programming.
// It's going to mess up our JavaScript compiler pretty badly.
lizard.__proto__ = dragon;

for (let prop in lizard) {
  console.log("prop", prop); // we have 'name', 'fight', 'fire', 'sing' properties.
  //   if (lizard.hasOwnProperty(prop)) {
  //     console.log("My own property ", prop); we have 'name', 'fight' properties.
  //   }
}

dragon.isPrototypeOf(lizard);
console.log(lizard.name);
console.log(lizard.fire);
console.log(lizard.fight()); // lizard look for the property name 'fight'. We DO HAVE 'fight' method so no need to look up the prototype chain of dragon.
console.log(lizard.sing()); // lizard look for the property name 'sing'. We do NOT!! have 'sing' method so we need to look up the prototype chain of dragon.

// Why it's so cool??
// The fact that objects can share prototypes means that you can have objects with properties 
// that are pointing to the same place in memory, thus being more efficient.



// Whenever the JavaScript engine doesn't find anything up the prototype chain, we get errors or undefined because it goes all the way up to the base object.
// and in the end of the chain is 'null'.