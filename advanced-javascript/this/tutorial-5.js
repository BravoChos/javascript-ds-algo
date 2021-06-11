// implicit binding
var b = {
  name: "bobby",
  say() {
    console.log(this); // it directs object b!!
  },
};

var f = {
  name: "Frozen",
  say: function () {
    console.log(this); // it directs object f!!
  },
};

b.say();
f.say();

///////////////////////////////////////////////////////////////////
// When invoking a new function, we create new execition context!!
var c = {
  name: "gloria",
  say() {
    return function () {
      console.log(this); // it directs global execution context
    };
  },
};

// Explicit binding
var e = {
  name: "Eva",
  say() {
    return function () {
      console.log(this); // it directs e!!
    }.bind(e);
  },
};

// arrow function (feat. lexical scope )
var d = {
  name: "David",
  say() {
    return () => console.log(this); // it directs object d!!
  },
};

c.say()();
e.say()();
d.say()();

///////////////////////////////////////////////////////////////////
var h = {
  name: "Henry",
  say: function () {
    var inner = function () {
      console.log("Inner :", this); // it directs global execution
    };
    return inner();
  },
  hey: function () {
    var inner = () => {
      console.log("Inner :", this); // it directs h object
    };
    return inner();
  },
};
h.say();
h.hey();

///////////////////////////////////////////////////////////////////
// Explicit binding
// Test it on chrome dev environment
// var h = {
//   name: "Hot",
//   hi: function () {
//     this.setTimeout(() => {
//       console.log("Too hot!");
//     }, 100);
//   }.bind(window),
// };

// h.hi();
