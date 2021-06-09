function BlackDog() {
  this.name = "흰둥이";
  return {
    name: "검둥이",
    bark: function () {
      //   console.log("this => ", this);
      console.log(this.name + ": 멍멍! \n");
    },
  };
}

const blackDog = new BlackDog();
blackDog.bark();

function WhiteDog() {
  this.name = "흰둥이";

  return {
    name: "검둥이",
    bark: () => {
      //   console.log("this => ", this);
      console.log(this.name + ": 멍멍!");
    },
  };
}

const whiteDog = new WhiteDog(); //
whiteDog.bark();

// Key note!!
// 일반함수는 자신이 종속된 객체를 this로 가리키며,
// 화살표 함수는 자신이 종속된 인스턴스를 가리킵니다.!!!
// 'this' is the object that the function is a property of.
// 'this' keyword is dynamically scoped. 
// That is, it doesn't matter where it's written, it matters how the function was called.

// In arrow function, 'this' indicates the instance that the function is a property of.
// Arrow function lexically bounds 'this'.