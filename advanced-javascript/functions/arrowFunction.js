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
// 화살표ㅛ 함수는 자신이 종속된 인스턴스를 가리킵니다.!!!
