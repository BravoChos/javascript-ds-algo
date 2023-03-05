// Factory Pattern
// 1. create new object, delegate and return it
// 2. create different type of object which shares common method and properties
class Shoe {
  constructor(attrs) {
    this._attrs = attrs || {};
  }
  getName() {
    return this._attrs?.name;
  }
  getSize() {
    return this._attrs?.size;
  }
  getBrand() {
    return this.constructor?.name;
  }
}

class Mike extends Shoe {}
class Tuma extends Shoe {}
class Odidas extends Shoe {}

const data = [
  {
    type: "Mike",
    attrs: {
      name: "SB",
      size: 300,
    },
  },
  {
    type: "Mike",
    attrs: {
      name: "Airspace",
      size: 240,
    },
  },
  {
    type: "Tuma",
    attrs: {
      name: "Jaja",
      size: 270,
    },
  },
  {
    type: "Mike",
    attrs: {
      name: "Kortez",
      size: 265,
    },
  },
  {
    type: "Odidas",
    attrs: {
      name: "Super Stone",
      size: 290,
    },
  },
];

class ShoeFactory {
  typeMap = {
    mike: Mike,
    tuma: Tuma,
    odidas: Odidas,
  };
  create(props) {
    try {
      const Brand = this.typeMap[props?.type?.toLowerCase()];
      return new Brand(props.attrs);
    } catch (e) {
      console.log("error creating new shoes");
    }
  }
}

const factory = new ShoeFactory();
const mike1 = factory.create({
  type: "mike",
  attrs: {
    name: "Kortez",
    size: 265,
  },
});

console.log(mike1);
console.log(mike1.getBrand());
console.log(mike1.getSize());
