function a() {
  let grandpa = "grandpa";
  return function b() {
    let father = "father";
    let random = 5123123; 
    // Key Note!!!
    // The JavaScript engine, once b() is invoked, isn't going to keep random around because, 
    // and going to get garbage collected, nothing's referencing it.
    // but the JavaScript engine is going to keep any thing that's still being referenced by a child function.
    return function c() {
      let son = "son";
      return `${grandpa} > ${father} > ${son}`;
    };
  };
}

console.log(a()()());

//closures and higher order function
function boo(string) {
  return function (name) {
    return function (name2) {
      console.log(`hi ${name2}`);
    };
  };
}

const boo2 = (string) => (name) => (name2) => console.log(`hi ${name2}`);

boo("hi")("john")("tanya");

// AHH! HOW DOES IT REMEMBER THIS 5 years from now?
booString = boo2("sing");
booStringName = booString("John");
booStringNameName2 = booStringName("tanya");
