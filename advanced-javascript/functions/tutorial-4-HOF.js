// Level 1 => Function ()
function letAdamLogin() {
  let array = [];
  for (let i = 0; i < 100000000; i++) {
    array.push(i);
  }
  return "Access Granted to Adam";
}

function letEvaLogin() {
  let array = [];
  for (let i = 0; i < 10000000; i++) {
    array.push(i);
  }
  return "Access Granted to Eva";
}

console.log(letAdamLogin());
console.log(letEvaLogin());

// Level 2  => Function (a,b)
const giveAccessTo = (name) => "Access Granted to " + name;

function authenticate(person) {
  let array = [];
  // you can add checks here for person.level
  for (let i = 0; i < 10000000; i++) {
    array.push(i);
  }
  return giveAccessTo(person.name);
}

console.log(authenticate({ name: "Adam" }));
console.log(authenticate({ name: "Eva" }));

// Level 3 => HOF
// We can give it the data and also tell the function what to do or some extra abilities when we actually invoke it.
function letPerson(person, fn) {
  // ++ We now tell the function what data to use when we call it not when we define it + tell it what to do.
  if (person.level === "admin") {
    return fn(person);
  } else if (person.level === "user") {
    return fn(person);
  }
}

console.log(letPerson({ name: "Adam", level: "admin" }, authenticate));
console.log(letPerson({ name: "Eva", level: "user" }, authenticate));

function sing(person) {
  return "la la la my name is " + person.name;
}

console.log(letPerson({ level: "user", name: "Tim" }, sing));
