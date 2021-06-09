//Exercise:
const a = function () {
  //   console.log(this);
  var name = "name-a";

  const b = function () {
    // let name = "name-b";
    // console.log(this);
    const c = {
      name: "name-c",
      hi: function () {
        // console.log(this);
        console.log(this.name);
      },
    };
    c.hi();
  };
  b();
};

a();

//JS is weird:
const obj = {
  name: "Billy",
  sing: function () {
    var anotherFunc = function () {
      console.log(this.name); // this points to windows!
    };
    return anotherFunc;
  },
  sing2: function () {
    var anotherFunc2 = () => {
      console.log(this.name); // this points to obj!
    };
    return anotherFunc2;
  },
  sing3: function () {
    var anotherFunc3 = function () {
      console.log(this.name);
    };
    return anotherFunc3.bind(this); // thanks to bind, this points to obj!
  },
  sing4: function () {
    // You can pass the 'this' like this.
    let self = this;
    var anotherFunc4 = function () {
      console.log(self.name);
    };
    return anotherFunc4;
  },
};

obj.sing()();
obj.sing2()();
obj.sing3()();
obj.sing4()();
