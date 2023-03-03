// ES6
// 1. only one instance
// 2. use static function to approach object
class Singleton {
  constructor() {
    if (Singleton.instance) {
      return console.log("Singleton class already instantiated");
    }
    Singleton.instance = this;
    this.version = Date.now();
    this.config = "test";
  }
  static getInstance() {
    if (!this.instance) {
      this.instance = new Singleton();
    }
    return this.instance;
  }
}

const s1 = new Singleton();
console.log(s1); // => Singleton { version: 1682350008737, config: 'test' }
const s2 = new Singleton(); // => Singleton class already instantiated
console.log(s2); // => Singleton {}
