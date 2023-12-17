// Given the following interface, implement its methods.
// step 1. Verify the constraints
// -> Can we implement helper classes/objects?
// step 2. Write out some test cases

interface Monarchy {
  birth(childName: string, parentName: string): void;
  death(name: string): void;
  getOrderOfSuccession(): Array<string>;
}
