var b = {
  name: "jay",
  say() {
    console.log(this);
  },
};

var c = {
  name: "jay",
  say() {
    return function () {
      console.log(this); // it directs global execution context
    };
  },
};

var d = {
  name: "jay",
  say() {
    return () => console.log(this); // it directs object d
  },
};

b.say();
c.say()();
d.say()();

